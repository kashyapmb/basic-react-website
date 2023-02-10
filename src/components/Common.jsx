import React from "react"
import { NavLink } from "react-router-dom"

const Common = (props) => {
	return (
		<>
			<section id="header" className="d-flex align-items-center">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="row">
								<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">
									<h2>
										{props.name}
									</h2>
									<h2>
										<strong> Crystel Infotech </strong>
									</h2>
									<h4 className="my-3">
										{" "}
										Our mission is that deliver scalable digital products and software solutions to unlock the power of client-centric intelligent technology that reduces the time to market and reimagines cost takeout initiatives. {" "}
									</h4>
									<div className="mt-3">
										<NavLink to={props.btnSrc} className="btn-get-started">
											{props.btnName}
										</NavLink>
									</div>
								</div>

								<div className="col-lg-6 order-1 order-lg-2 header-img">
									<img
										src={props.imgSrc}
										className="img-fluid animated"
										alt={props.altImg}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Common
