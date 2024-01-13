import "./card.css";
const Card = ({ coffee }) => {
  return (
    <div className="card">
      <img className="coffee-img" src={coffee.image} alt={coffee.name} />
      <div className="coffee-details">
        <h2 className="coffee-name">{coffee.name}</h2>
        <p className="coffee-price">{coffee.price}</p>
      </div>
      <div className="coffee-stats">
        <p className="coffee-rating">{coffee.rating}</p>
        <p className="coffee-votes">({coffee.votes} votes)</p>
      </div>
    </div>
  );
};
export default Card;
