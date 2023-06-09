import Badge from "./Badge";
import Bike from "../../assets/img/garmin-watch.png";

const HeroProduct = () => {
	return (
		<div className="hero-product">
			<div className="row">
				<div className="col-12 col-lg-6">
					<div className="hero-product__image-zone">
						<img
							className="hero-product__image"
							alt="Hero Product"
							src={Bike}
						/>
					</div>
				</div>
				<div className="col-12 col-lg-6">
					<div className="hero-product__infos-zone">
						<div className="hero-product__discount">
							<Badge>-300€</Badge>
						</div>
						<div className="product-text__category hero-product__category">
							Adulte
						</div>
						<div className="product-text__title--lg hero-product__name">
							Nakamura
						</div>
						<div className="product-text__description hero-product__body">
							VTT électrique E-CLIFF LTD
						</div>
						<div className="hero-product__price">
							<span className="product-text__old-price--sm">999,99€</span>
							<span className="product-text__discount-price">699,99€</span>
						</div>
						<div className="product-text__label hero-product__divide-payment">
							<span className="hero-product__divide-payment__badge">4x</span> Ou
							payez en 4x sans frais
						</div>
						<div className="hero-product__buy-btn">
							<button className="btn btn-primary">Acheter</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroProduct;
