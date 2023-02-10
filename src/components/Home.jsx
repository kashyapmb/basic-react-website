import React from "react"
import Common from "./Common"
import HomeImg from "../images/home_page.jpg"

const Home = () => {
	return (
		<>
			<Common 
				name='A new tech start-up~'
				btnName='Get Started'
				btnSrc='/service'
				imgSrc={HomeImg}
				altImg="Home Image"
			/>
		</>
	)
}

export default Home
