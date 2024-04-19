import React from 'react'
import Layout from '../components/Layout/Layout'
import { Typography }  from 'antd'

const { Title, Paragraph, Text } = Typography;

function Policy() {
  return (
    <Layout title={"Privacy Policy"} >
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <Typography>
        <Title level={2}>Information Collected</Title>
        <Paragraph>
          We collect the following types of personal information from our users:
        </Paragraph>
        <ul>
          <li>
            <Text>Name</Text>
          </li>
          <li>
            <Text>Email address</Text>
          </li>
          <li>
            <Text>Shipping address</Text>
          </li>
          <li>
            <Text>Payment details</Text>
          </li>
          <li>
            <Text>Order history</Text>
          </li>
        </ul>
        <Paragraph>
          We may also collect information automatically through the use of cookies
          and similar technologies when you visit our website.
        </Paragraph>

        <Title level={2}>Data Usage</Title>
        <Paragraph>
          The personal information we collect is used to:
        </Paragraph>
        <ul>
          <li>
            <Text>Process and fulfill orders</Text>
          </li>
          <li>
            <Text>Provide customer support</Text>
          </li>
          <li>
            <Text>Send promotional emails or newsletters</Text>
          </li>
          <li>
            <Text>Improve our website and services</Text>
          </li>
        </ul>

        <Title level={2}>Data Security</Title>
        <Paragraph>
          We take appropriate measures to protect your personal information from unauthorized access, alteration, or disclosure.
        </Paragraph>
        <Paragraph>
          We implement encryption, secure payment gateways, and regular security audits to safeguard your data.
        </Paragraph>

        <Title level={2}>User Rights</Title>
        <Paragraph>
          You have the right to:
        </Paragraph>
        <ul>
          <li>
            <Text>Access and update your personal information</Text>
          </li>
          <li>
            <Text>Request deletion of your personal information</Text>
          </li>
          <li>
            <Text>Opt-out of receiving marketing communications</Text>
          </li>
          <li>
            <Text>Request information about the data we have collected about you</Text>
          </li>
        </ul>

        <Title level={2}>Third-Party Disclosure</Title>
        <Paragraph>
          We do not sell, trade, or transfer your personal information to third parties without your consent, except for the purposes of order fulfillment and legal requirements.
        </Paragraph>
      </Typography>
      </div>
    </Layout>
  );
}

export default Policy