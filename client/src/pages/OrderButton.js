import React, { useState } from 'react'
import axios from 'axios';
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import '../styles/OrderButton.modules.css'

const OrderButton = () => {
  const navigate = useNavigate();
  const [Order , setOrder] =  useState("PLACE ORDER")


    const [auth, setAuth] = useAuth();
      // HandleOrder

  const handleOrder = async () => {
    
    setOrder("Booked")
    const { name, email, phone, address,shopName } = auth.user;
    const data = {
      name,
      email,
      phone,
      shopName,
      address,
    };

  
    
    try{
    const order = await axios.post(
        "https://sharvannosepin.onrender.com/api/v1/order/create-order",
        data);
      toast.success("Order Placed");
      
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      
          <div className="col-12 text-center mt-5 orderButton">


          {!auth?.user ? (
                <button
                  className="btn  "
                  onClick={() => navigate("/login")}
                >
                     {Order}
                  
                </button>
              ) : (
                <button className="btn " onClick={handleOrder}>
                  {Order}
                </button>
              )}
     
          </div>
      
    </div>
  )
}

export default OrderButton