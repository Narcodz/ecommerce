import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from "../../context/auth";
import UserMenu from '../../components/Layout/UserMenu';

function Dashboard() {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h3>Admin Name : {auth?.user?.name}</h3>
            <h3>Admin Email : {auth?.user?.email}</h3>
            <h3>Admin Contact : {auth?.user?.address}</h3>
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default Dashboard