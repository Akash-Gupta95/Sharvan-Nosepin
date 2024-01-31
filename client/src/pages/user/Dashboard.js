import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="Container  mt-5">
        <div className="row dashboardRow">
          <div className="col-6 dashboard">
            <UserMenu />
          </div>
          <div className="col-6 left">
            <div className="Profile ">
              <h1 className="text-center ">Profile</h1>
              <h3>Name </h3>
              <p>{auth.user.name}</p>
              <hr />
              <h3>Email </h3>

              <p>{auth.user.email}</p>
              <hr />
              <h3>Phone </h3>
              
              <p>{auth.user.phone}</p>
              <hr />
              <h3>Address </h3>

              <p>{auth.user.address}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
