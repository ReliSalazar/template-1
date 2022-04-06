import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "./components/Banner";
import Features from "./components/Features";
import "./index.css";

function Home() {
  return (
    <main className="font-sans">
      <Banner />
      <Features />

      <FontAwesomeIcon icon={["fab", "github"]} />
    </main>
  );
}

export default Home;
