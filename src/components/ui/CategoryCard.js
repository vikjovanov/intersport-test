const CategoryCard = ({ title, image }) => {
	return (
		<div className="category-card">
			<div className="category-card__image-container">
				<img className="category-card__image" alt="bg" src={image} />
			</div>
			<div className="category-card__actions-container">
				<div className="category-card__actions-header"></div>
				<div className="category-card__actions-body">
					<span className="category-card__title">{title}</span>
				</div>
				<div className="category-card__actions-footer">
					<span className="category-card__see-more">Voir tout</span>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
