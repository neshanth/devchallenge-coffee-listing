import { useEffect, useState } from "react";
import bgImg from "./assets/bg-cafe.jpg";
import CoffeeListing from "./components/CoffeeListing/CoffeeListing";
const App = () => {
  const URL = `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`;
  const [coffeeListing, setCoffeeListing] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    async function fetchCoffeeData() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setCoffeeListing(data);
        setOriginalList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCoffeeData();
  }, [URL]);

  const handleCoffeFilter = (e, type) => {
    e.preventDefault();
    setFilter(type);
    if (type === "Available") {
      setCoffeeListing(coffeeListing.filter((coffee) => coffee.available));
    } else {
      setCoffeeListing(originalList);
    }
  };

  return (
    <main>
      <section className="section-banner">
        <img className="banner-image" src={bgImg} alt="banner" />
      </section>
      <section className="section-listing">
        <CoffeeListing filter={filter} handleCoffeFilter={handleCoffeFilter} coffeeListing={coffeeListing} />
      </section>
    </main>
  );
};
export default App;
