import BFBanner from "../ui/BFBanner";
import CategoryCard from "../ui/CategoryCard";
import Football from "../../assets/img/football.png";

const OurSports = () => {
	return (
		<div className="product-section" style={{ overflow: "hidden" }}>
			<div className="product-section__header-bg">
				<div className="our-sports__banner-mobile-1 hidden-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="our-sports__banner-mobile-2 hidden-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="our-sports__banner-desk-1 hidden visible-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="our-sports__banner-desk-2 hidden visible-lg">
					<BFBanner type="neutral" />
				</div>
				{/* <div className="our-sports__banner-desk-3 hidden visible-lg">
					<BFBanner type="neutral" />
				</div> */}
				<div className="our-sports__banner-desk-4 hidden visible-lg">
					<BFBanner type="neutral" />
				</div>
				<div className="container">
					<div className="product-section__header">
						<div className="product-section__title-container">
							<div className="surtitle product-section__surtitle">
								Exclusivité web
							</div>
							<div className="title product-section__title">
								Les sports
								<br />
								<span className="title--outlined">en black friday</span>
							</div>
						</div>
						<div className="product-section__image our-sports__image hidden visible-lg" />
					</div>
				</div>
			</div>
			<div className="product-grid">
				<div className="container no-padding">
					<div className="product-grid__wrapper">
						<div className="product-grid__container">
							<CategoryCard title="Football" image={Football} />
							<CategoryCard title="Volleyball" image={Football} />
							<CategoryCard title="Basketball" image={Football} />
							<CategoryCard title="Aviron" image={Football} />
							<CategoryCard title="Natation" image={Football} />
							<CategoryCard title="Escalade" image={Football} />
							<CategoryCard title="football" image={Football} />
							<CategoryCard title="football" image={Football} />
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

export default OurSports;
