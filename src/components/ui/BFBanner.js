// Type: Neutral - Colored
const BFBanner = ({ type }) => {
	if (type === "neutral") {
		return (
			<div className="bf-banner--neutral">
				<div className="bf-banner__image--neutral" />
			</div>
		);
	}

	return (
		<div className="bf-banner--colored">
			<div className="bf-banner__image--colored" />
		</div>
	);
};

export default BFBanner;
