import PlaceholderShoes from "../../assets/img/placeholder-shoes.png";

const ProductCard = () => {
	return (
		<div className="product-card">
			<div className="product-card__header">
				<div className="product-card__badge--new">Nouveauté</div>
			</div>
			<div className="product-card__image-container">
				<img
					src={PlaceholderShoes}
					alt="product"
					className="product-card__image"
				/>
			</div>
			<div className="product-text__title product-card__title">MARQUE</div>
			<div className="product-text__description--sm product-card__description">
				Nom produit Nom du produit ligne 2
			</div>
			<div className="product-card__price">
				<div className="product-text__old-price--sm product-card__old-price">
					100,99
				</div>
				<div className="product-text__discount-price product-card__discount-price">
					99,99
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
