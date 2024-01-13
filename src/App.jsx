import { useEffect, useState } from "react";
import bgImg from "./assets/bg-cafe.jpg";
import CoffeeListing from "./components/CoffeeListing/CoffeeListing";
const App = () => {
  const URL = `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`;
  const [coffeeListing, setCoffeeListing] = useState([]);
  useEffect(() => {
    async function fetchCoffeeData() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setCoffeeListing(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCoffeeData();
  }, [URL]);

  return (
    <main>
      <section className="section-banner">
        <img className="banner-image" src={bgImg} alt="banner" />
      </section>
      <section className="section-listing">
        <CoffeeListing coffeeListing={coffeeListing} />
      </section>
    </main>
  );
};
export default App;
