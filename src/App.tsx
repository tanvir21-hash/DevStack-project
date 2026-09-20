import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Technologies from "./components/technologies/Technologies";
import type { ITech } from "./components/types/tech";

function App() {
  const [technologies, setTechnologies] = useState<ITech[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: ITech[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Nav />
      <Banner />
      <Technologies technologies={technologies} loading={loading} />
      <Footer />
    </>
  );
}

export default App;