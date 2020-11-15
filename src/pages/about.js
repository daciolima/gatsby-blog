import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"


const About = () => (

    <Layout>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about" activeStyle={{color: "red"}}>About</Link></li>
      </ul>
      <h1>Page About</h1>

    </Layout>  

)

export default About