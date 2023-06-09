import Countdown from "../ui/Countdown/Countdown";
import Logo from "../../assets/img/logo.png";
import Badge from "../ui/Badge";

const Banner = () => {
	return (
		<section className="banner">
			<div className="container no-padding">
				<div className="row">
					<div className="banner__content col-6 col-lg-6">
						<Countdown />
						<span className="title">
							BLACK <span className="title--outlined">FRIDAY</span>
							<br />
							WEEK <Badge size="sm">Derniers jours</Badge>
						</span>
						<div className="banner__alert">Derniers jours</div>
					</div>
					<div className="banner__image col-6 col-lg-6" />
				</div>
				<div className="banner__logo-container">
					<img src={Logo} className="banner__logo" alt="Logo Intersport" />
				</div>
			</div>
		</section>
	);
};

export default Banner;
