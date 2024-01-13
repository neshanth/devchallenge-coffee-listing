import bgImg from "./assets/bg-cafe.jpg";
const App = () => {
  return (
    <main>
      <section className="section-banner">
        <img className="banner-image" src={bgImg} alt="banner" />
      </section>
    </main>
  );
};
export default App;
