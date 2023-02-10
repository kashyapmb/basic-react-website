import React from "react"
import Button from '@mui/material/Button';

const Card = (props) => {
	return (
		<>
			<div className="col-md-4 col-10 mx-auto">
				<div className="row ">
					<div className="card card_hover">
						<div className="mt-3 text-center">
							<img
								className="card-img-top card_size"
								src={props.imgSrc}
								alt="Card image cap"
							/>
						</div>
						<div className="card-body">
							<h4 className="card-title">{props.cardTitle}</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href="#" className="btn btn-success">
								Get Service
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card
