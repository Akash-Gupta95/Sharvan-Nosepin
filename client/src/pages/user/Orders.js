import React, { useState, useEffect, useReducer } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";

import "./UserOrder.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const getOrders = async () => {

    try {
      let email= auth.user.email;
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/order/get-orderDetails/${email}`
      );
      setOrders(data);

      forceUpdate();
    } catch (error) {
      console.log(error);
    }
  };

 

  useEffect(() => {
    if (auth?.token) getOrders();
    console.log(orders)

  }, [auth?.token, reducerValue]);
  

useEffect(()=>{
  getOrders();
},[reducerValue])

  return (
    <Layout title={"Your Orders"}>



<div className="Container mt-5">
      <div className="row">
        <div className="col-12">
        <UserMenu />
        </div>
        <div className="col-12">
        <div className="Order">   

          {/* <h1>{Orders.orders.email}</h1> */}

            </div>
        </div>
      </div>
    </div>



{/* 
      
      <div className="container-fluid p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
         
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col"> date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3 card flex-row" key={p._id}>
                        <div className="col-md-4">
                          <img
                            src={`https://sharvannosepin.onrender.com/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                            width="100px"
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8">
                          <p>{p.name}</p>
                          <p>{p.description.substring(0, 30)}</p>
                          <p>Price : {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>  */}
    </Layout>
  );
};

export default Orders;
