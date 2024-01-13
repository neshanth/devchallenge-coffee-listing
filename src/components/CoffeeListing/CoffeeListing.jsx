import "./coffeeListing.css";
import Card from "../Card/Card";
const CoffeeListing = ({ coffeeListing }) => {
  return (
    <div className="coffee-listing">
      <div className="coffee-lisiting-content">
        <h1>Our Collection</h1>
        <p className="coffee-listing-description">
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
        </p>
        <div className="coffee-listing-filters">
          <button>All Products</button>
          <button>Available Now</button>
        </div>
      </div>
      <div className="coffee-lists">
        {coffeeListing.map((coffee) => {
          return <Card coffee={coffee} key={coffee.id} />;
        })}
      </div>
    </div>
  );
};
export default CoffeeListing;
