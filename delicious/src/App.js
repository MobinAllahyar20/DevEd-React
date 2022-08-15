import { useEffect, useState } from "react";
import Pages from "./pages/Pages";

function App() {
  const [popular, setPopular] = useState([]);


  useEffect(() => {
    getPopular();
  }, []);


  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json();
    setPopular(data.recipes);
  }
  

  return (
    <div>
      {popular.map((recipes) => {
        return (
          <div>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}
export default App;