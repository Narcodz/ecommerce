import React from 'react'
import Layout from '../components/Layout/Layout'

function About() {
  return (
    <Layout title={"About us - Cakes n’ Sprinkles"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/about.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
        <p className="text-justify mt-2">
        Cakes n’ Sprinkles is an innovative online platform that allows users to conveniently order their favorite cakes for various occasions. 
        With our user-friendly interface, customers can explore a wide range of delicious cake options, customize their orders, 
        and have them delivered right to their doorstep. We prioritize the privacy and security of our users' personal information, 
        ensuring that all data shared with us is treated with the utmost confidentiality. At Cakes n’ Sprinkles, we strive to provide a 
        seamless and delightful cake ordering experience, making celebrations sweeter and more memorable for our valued customers.
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default About