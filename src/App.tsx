import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;