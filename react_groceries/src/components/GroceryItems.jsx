const GroceryItems = ({item, brand, units, quantity, isPurchased, totalItems, removeItems}) => {
  return (
    <div class="li">
      <h2>{item}</h2>
      <p>Brand: {brand}</p>
      <p>Units: {units}</p>
      <p>Qty: {quantity}</p>
      <p>Purchased: {isPurchased}</p>
      <p>{totalItems}</p>
      <div>
        <button onClick={removeItems}>Remove</button>
      </div>
    </div>
  )
}

export default GroceryItems