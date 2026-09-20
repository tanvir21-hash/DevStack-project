import { useEffect, useState } from "react";
import Nav from "./components/Nav";


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
      
    </>
  );
}

export default App;