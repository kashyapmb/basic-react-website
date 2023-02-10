import React from "react"
import CardData from "./CardData"
import Card from "./Card"
const Service = () => {
	return (
		<>
			<div className="my-4">
				<h2 className="text-center"> Our Services </h2>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row gy-3 gx-5">
							{CardData.map((item, index) => {
								return (
									<>
										<Card imgSrc={item.imgSrc} cardTitle={item.title} />
									</>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Service
