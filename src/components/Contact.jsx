import React from "react"
import { useState } from "react"

const Contact = () => {
	const [data, setData] = useState({
		fname: "",
		phone: "",
		email: "",
		msg: "",
	})

	const inputChangeEvent = (event) => {
		const { name, value } = event.target
		setData((preValue) => {
			return {
				...preValue,
				[name]: value,
			}
		})
	}

	const formSubmit = (e) => {
		e.preventDefault()
		alert(
			`Full Name : ${data.fname} and phone number is ${data.phone}, email : ${data.email} and your msg is ${data.msg}`
		)
		setData({
			fname: '',
			phone: '',
			email: '',
			msg: '',
		})
	}

	return (
		<>
			<div className="mt-4 mb-4">
				<h1 className="text-center"> Contact Us </h1>
			</div>
			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
						<form onSubmit={formSubmit}>
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
									Full Name
								</label>
								<input
									type="text"
									class="form-control"
									id="exampleFormControlInput1"
									name="fname"
									value={data.fname}
									onChange={inputChangeEvent}
									placeholder="Enter your name"
									required
								/>
							</div>
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
									Phone Number
								</label>
								<input
									type="number"
									class="form-control"
									id="exampleFormControlInput1"
									name="phone"
									min='1'
									// max='10'
									maxlength="10"
									value={data.phone}
									onChange={inputChangeEvent}
									placeholder="Phone Number"
									required
								/>
							</div>
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
									Email address
								</label>
								<input
									type="email"
									class="form-control"
									id="exampleFormControlInput1"
									name="email"
									value={data.email}
									onChange={inputChangeEvent}
									placeholder="name@example.com"
									required
								/>
							</div>
							<div class="mb-3">
								<label for="exampleFormControlTextarea1" class="form-label">
									Message
								</label>
								<textarea
									class="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									name="msg"
									value={data.msg}
									onChange={inputChangeEvent}
									required
								></textarea>
							</div>
							<div className="col-12">
								<button className="btn btn-outline-success" type="submit">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
