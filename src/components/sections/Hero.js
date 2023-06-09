import HeroProduct from "../ui/HeroProduct";

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="hero__slide">
					<HeroProduct />
					<div className="hero__dots-container">
						<div className="hero__dot" />
						<div className="hero__dot hero__dot--active" />
						<div className="hero__dot" />
						<div className="hero__dot" />
					</div>
					<div className="hero__btn-container">
						<button className="slide-btn slide-btn--prev"></button>
						<button className="slide-btn slide-btn--next"></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
