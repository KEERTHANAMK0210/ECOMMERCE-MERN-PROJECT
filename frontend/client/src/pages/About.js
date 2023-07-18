import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <div>
      <Layout title={'About us - Ecommerce Appnpm '}>
        <div className="row contactus">
          <div className='col-md-6'>
          <img src="/images/about.jpeg" alt="contactus" style={{width :"100%"}} />
          </div>
          <div className="col-md-4">
            <p className='text-justify-mt-4'>Thank you for visiting our website and expressing interest in getting in touch with us. We value your feedback, inquiries, and suggestions. Our dedicated team is here to assist you and provide any information you may need.

 we strive to offer exceptional customer service and ensure that your experience with us is smooth and hassle-free. We encourage you to reach out to us with any questions, concerns, or comments you may have regarding our products, services, or your recent purchase.

Our contact form below is designed to make it convenient for you to get in touch. Simply fill in your details and your message, and we will get back to you as soon as possible. We appreciate your patience in advance, as we receive a high volume of inquiries and strive to respond promptly to each one.</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
