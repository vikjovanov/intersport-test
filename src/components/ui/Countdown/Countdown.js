import Digit from "./Digit";

const Countdown = () => {
	return (
		<div className="countdown">
			<div className="countdown__headline">Plus que</div>
			<div className="countdown__digits-container">
				<Digit value="00" label="Jours" />
				<Digit value="01" label="Heures" />
				<Digit value="23" label="Minutes" />
				<Digit value="58" label="Secondes" />
			</div>
		</div>
	);
};

export default Countdown;
