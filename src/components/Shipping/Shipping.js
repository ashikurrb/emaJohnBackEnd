import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("your order placed successfully");
          clearTheCart();
          reset();
        }
      });
  };

  return (
    <div>
      <h2>This is shipping</h2>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <br />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        <br />
        {errors.email && <span className="error">This field is required</span>}
        <br />
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <br />
        <input placeholder="city" defaultValue="" {...register("city")} />
        <br />
        <input placeholder="Phone" defaultValue="" {...register("phone")} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
