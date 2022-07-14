import GroceryItems from './components/GroceryItems';
import './App.css';
import { useState } from 'react';

function App() {
  const [totalEggs, setTotalEggs] = useState(5);
  const [totalChocolate, setTotalChocolate] = useState(5);
  const [totalAvocado, setTotalAvocado] = useState(5);

  const removeEggs = () => {
    if (totalEggs <= 0) {
      alert('You cannot purchase less than 0 items.');
    } else {
      let removed = totalEggs - 1;
      setTotalEggs(removed);
    }
  };

  const removeChocolate = () => {
    if (totalChocolate <= 0) {
      alert('You cannot purchase less than 0 items.');
    } else {
      let removed = totalChocolate - 1;
      setTotalChocolate(removed);
    }
  };

  const removeAvocado = () => {
    if (totalAvocado <= 0) {
      alert('You cannot purchase less than 0 items.');
    } else {
      let removed = totalAvocado - 1;
      setTotalAvocado(removed);
    }
  };

  const eggs = {
    item: 'Eggs',
    brand: 'great value',
    units: '1',
    quantity: '18',
    isPurchased: ''
  };
  const chocolate = {
    item: 'Chocolate',
    brand: 'Hersheys',
    units: '1',
    quantity: '6',
    isPurchased: ''
  };
  const avocado = {
    item: 'Avocados',
    brand: 'Hass',
    units: '1',
    quantity: '3',
    isPurchased: ''
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Viry's Grocery List</h1>
      </header>
      <main>
        <GroceryItems
          item={eggs.item}
          brand={eggs.brand}
          units={eggs.units}
          quantity={eggs.quantity}
          isPurchased={eggs.isPurchased}
          totalItems={totalEggs}
          removeItems={removeEggs}
        />

        <GroceryItems
          item={chocolate.item}
          brand={chocolate.brand}
          units={chocolate.units}
          quantity={chocolate.quantity}
          isPurchased={chocolate.isPurchased}
          totalItems={totalChocolate}
          removeItems={removeChocolate}
        />

        <GroceryItems
          item={avocado.item}
          brand={avocado.brand}
          units={avocado.units}
          quantity={avocado.quantity}
          isPurchased={avocado.isPurchased}
          totalItems={totalAvocado}
          removeItems={removeAvocado}
        />
      </main>
    </div>
  );
}

export default App;
