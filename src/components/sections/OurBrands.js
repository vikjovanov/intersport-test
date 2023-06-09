import BFBanner from "../ui/BFBanner";
import CategoryCard from "../ui/CategoryCard";
import NikeBrand from "../../assets/img/brand-nike.png";

const OurBrands = () => {
	return (
		<div className="product-section" style={{ overflow: "hidden" }}>
			<div className="product-section__header-bg">
				<div className="our-brands__banner-mobile-1 hidden-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="our-brands__banner-mobile-2 hidden-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="our-brands__banner-desk-1 hidden visible-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="our-brands__banner-desk-2 hidden visible-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="our-brands__banner-desk-3 hidden visible-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="our-brands__banner-desk-4 hidden visible-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="container">
					<div className="product-section__header">
						<div className="product-section__title-container">
							<div className="surtitle product-section__surtitle">
								Exclusivité web
							</div>
							<div className="title product-section__title">
								Black friday sur
								<br />
								<span className="title--outlined">les grandes marques</span>
							</div>
						</div>
						<div className="product-section__image our-brands__image hidden visible-lg" />
					</div>
				</div>
			</div>
			<div className="product-grid">
				<div className="container no-padding">
					<div className="product-grid__wrapper">
						<div className="product-grid__container">
							<CategoryCard image={NikeBrand} />
							<CategoryCard image={NikeBrand} />
							<CategoryCard image={NikeBrand} />
							<CategoryCard image={NikeBrand} />
							<CategoryCard image={NikeBrand} />
							<CategoryCard image={NikeBrand} />
							<CategoryCard image={NikeBrand} />
							<CategoryCard image={NikeBrand} />
						</div>
						<div className="product-grid__btn-container">
							<button className="slide-btn slide-btn--prev slide-btn--hidden"></button>
							<button className="slide-btn slide-btn--next"></button>
						</div>
					</div>
					{/* <div className="container">
						<div className="product-grid__cta-container">
							<button className="btn btn-outline">Toute la sélection</button>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default OurBrands;
