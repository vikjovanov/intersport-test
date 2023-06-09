import BFBanner from "../ui/BFBanner";
import Badge from "../ui/Badge";
import ProductImage from "../../assets/img/garmin-watch.png";

const GoodDeal = () => {
	return (
		<div className="good-deal">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-6">
						<div className="hidden visible-lg">
							<div className="good-deal__container">
								<div className="good-deal__illustration--lg">
									<div className="good-deal__illustration-border-1">
										<BFBanner />
									</div>
									<div className="good-deal__illustration-border-2">
										<BFBanner />
									</div>
									<div className="good-deal__illustration-border-3">
										<BFBanner />
									</div>
									<div className="good-deal__illustration-border-4">
										<BFBanner />
									</div>
									<div
										className="good-deal__illustration-container"
										style={{ padding: 55 }}
									>
										<div>
											<h2 className="title title-lg good-deal__title">
												Le bon plan
											</h2>
											<h2 className="title title-sm--outlined good-deal__title">
												Du black friday
											</h2>
										</div>
										<button className="btn btn-secondary">
											Toute la sélection électronique
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="hidden-lg">
							<div className="good-deal__illustration">
								<div className="good-deal__illustration-container">
									<div>
										<h2 className="title-xs good-deal__title">Le bon plan</h2>
										<h2 className="title-xs--outlined good-deal__title">
											Du black friday
										</h2>
									</div>
									<button tton className="btn btn-secondary">
										Toute la sélection électronique
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="good-deal__container">
							<div className="good-deal__product-zone">
								<div className="good-deal__product-image">
									<img src={ProductImage} alt="product" />
									<div className="good-deal__product-discount">
										<Badge size="lg">-400€</Badge>
									</div>
								</div>
								<div className="good-deal__price">
									<span className="product-text__old-price--sm good-deal__old-price">
										399,99
									</span>
									<span className="product-text__discount-price good-deal__discount-price">
										199,99
									</span>
								</div>
								<div className="product-text__title good-deal__product-title">
									Garmin
								</div>
								<div className="product-text__description--sm good-deal__product-description">
									Montre GPS & Cardio VENU SQ
								</div>
								<button className="btn btn-outline good-deal__buy-btn">
									Acheter
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GoodDeal;
