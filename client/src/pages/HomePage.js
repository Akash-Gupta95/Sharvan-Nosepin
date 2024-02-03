import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Checkbox, Radio } from "antd";
// import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";


import Carousel from "./Carousel.js"

import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import { useAuth } from "../context/auth";
import "./pageStyle/HomePage.css";
import HeroSection from "./Hero-Section";
import OrderButton from "./OrderButton";

import Banner1 from "./Banner1.png";
import Banner2 from "./Banner_3.png";
import Banner3 from "./Banner2.png";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://sharvannosepin.onrender.com/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error, "getAllCategory Faild");
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://sharvannosepin.onrender.com/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "https://sharvannosepin.onrender.com/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://sharvannosepin.onrender.com/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "https://sharvannosepin.onrender.com/api/v1/product/product-filters",
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // HandleOrder

  const handleOrder = async () => {
    const { name, email, phone, address } = auth.user;
    const data = {
      name,
      email,
      phone,
      address,
    };
    try {
      const order = await axios.post(
        "https://sharvannosepin.onrender.com/api/v1/order/create-order",
        data
      );
      toast.success("Order Placed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Shravan-Nosepin "}>

      {/* <HeroSection></HeroSection> */}

      {/* Cursole */}
      <Carousel></Carousel>


      
      <div className="container TunchOrder">
        <div className="container Tunch-Container">
          <div className="row text-center text-warning mt-5 Tunch">
            <div className="col-6 "><h1 >55 T</h1></div>
            <div className="col-6 "><h1 >65 T</h1></div>
          </div>
        </div>
        <OrderButton></OrderButton>
      </div>



     



    {/* Change Text */}
      <div className="content  text-center">
        <h1 className="changecontent1"></h1>
      </div>


      <div className="container serviceContainer ">
        <div className="col-12 serviceHeader ">
          <h1 className="Services text-center">Our <span>Services </span></h1>
        </div>
      </div>

      <div className="container-fluid row  home-page product-Container">
        <div className="row card-row">

          {products?.map((p) => (
            <>
              <div className="col-lg-4 col-md-4">



                <div className="card" key={p._id}>
                  <div
                    className="navigate"
                    onClick={(e) => {
                      navigate(`/product/${p.slug}`);
                    }}
                  >
                    <div className="CardIMage">
                      <img
                        src={`https://sharvannosepin.onrender.com/api/v1/product/product-photo/${p._id}`}
                        alt={p.name}
                      />
                    </div>
                    <div className="card-body">
                      <div className="card-name-price">
                        <h5 className="card-title cardTitle-name">{p.name}</h5>
                      </div>
                    </div>
                  </div>
                  {!auth?.user ? (
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => navigate("/login")}
                    >
                      PLACE ORDER
                    </button>
                  ) : (
                    <button className="btn btn-dark ms-1" onClick={handleOrder}>
                      PLACE ORDER
                    </button>
                  )}
                </div>
              </div>
            </>
          ))}


          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />{" "}
                  </>
                )}
              </button>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
