import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'

function AdminDashboard() {
    const [auth] = useAuth()
    console.log(auth?.user?.address)
    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3">Admin Name : {auth?.user?.name}</div>
                        <div className="card w-75 p-3">Admin Email : {auth?.user?.email}</div>
                        <div className="card w-75 p-3">Admin Contact : {auth?.user?.phone}</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard