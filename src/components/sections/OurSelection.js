import BFBanner from "../ui/BFBanner";
import ProductCard from "../ui/ProductCard";

const OurSelection = () => {
	return (
		<div className="product-section" style={{ overflow: "hidden" }}>
			<div className="product-section__header-bg">
				<div className="our-selection__banner-mobile hidden-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="our-selection__banner-desk-1 hidden visible-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="our-selection__banner-desk-2 hidden visible-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="container">
					<div className="product-section__header">
						<div className="product-section__title-container">
							<div className="title product-section__title">
								Sélection
								<br />
								<span className="title--outlined">exceptionnelle</span>
							</div>
						</div>
						<div className="product-section__image our-selection__image hidden visible-lg" />
					</div>
				</div>
			</div>
			<div className="product-grid">
				<div className="container no-padding">
					<div className="product-grid__wrapper">
						<div className="product-grid__container">
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
						</div>
						<div className="product-grid__btn-container">
							<button className="slide-btn slide-btn--prev slide-btn--hidden"></button>
							<button className="slide-btn slide-btn--next"></button>
						</div>
					</div>
					<div className="container">
						<div className="product-grid__cta-container">
							<button className="btn btn-outline">Toute la sélection</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurSelection;
