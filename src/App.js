import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect( () => {
    async function fetchData() {
      const response = await fetch('/api/coffeeshops')
      const body = await response.json()
      setCoffeeShops(body._embedded.coffeeshops)
      setIsLoading(false)
    }
    fetchData();



  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>Coffee Shop List</h2>
            {coffeeShops.map(coffeeShop =>
                <div key={coffeeShop.id}>
                  {coffeeShop.name} - {coffeeShop.address}
                </div>
            )}
          </div>
        </header>
      </div>
  );
}

export default App;
