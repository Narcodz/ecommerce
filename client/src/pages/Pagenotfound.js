import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <Layout title={'Go back - page not found'}>
      <div className='pnf'>
        <h1 className='pnf-title'>Page Not Found</h1>
        <h2 className='pnf-heading'>Ooops ! Page Not Found</h2>
        <Link className='pnf-btn' to="/">Go Back</Link>
      </div>

    </Layout>

  )
}

export default Pagenotfound