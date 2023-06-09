const Badge = ({ children, size, className }) => {
	return (
		<span className={`badge badge${size ? `--${size}` : ""}`}>{children}</span>
	);
};

export default Badge;
