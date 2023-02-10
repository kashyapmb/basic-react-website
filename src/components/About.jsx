import React from "react"
import Common from "./Common"
import AboutImg from "../images/about_page.jpg"

const About = () => {
	return (
		<>
			<Common 
				name='Contact Us'
				btnName='Contact Us'
				btnSrc='/contact'
				imgSrc={AboutImg}
				altImg="About Image"
			/>
		</>
	)
}

export default About
