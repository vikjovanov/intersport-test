const Digit = ({ value, label }) => {
	return (
		<div className="digit">
			<div className="digit__number">
				{value}
				<div className="digit__separator">
					<div className="digit__separator-line" />
				</div>
			</div>
			<div className="digit__legend">{label}</div>
		</div>
	);
};

export default Digit;
