import "./DataEntry.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Counter from "../../components/Counter.js";
import ProductList from "../../components/ProductList.js";

export default function DataEntry() {
  const navigate = useNavigate();
  const [apples, setApples] = useState(0);
  const [donuts, setDonuts] = useState(0);
  const [pizza, setPizza] = useState(0);
  const [products, setProducts] = useState([]);

  const handleAddProduct = (name, price) => {
    setProducts([...products, { name, price }]);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const handleReset = () => {
    setApples(0);
    setDonuts(0);
    setPizza(0);
    setProducts([]);
  };
  const total = apples * 1 + donuts * 2 + pizza * 3;

  const handleIncrement = (arg2) => {
    if (arg2 == "Apples") {
      setApples(apples + 1);
      handleAddProduct("Apples", 1);
    } else if (arg2 == "Donuts") {
      setDonuts(donuts + 1);
      handleAddProduct("Donuts", 2);
    } else if (arg2 == "Pizza") {
      setPizza(pizza + 1);
      handleAddProduct("Pizza", 3);
    }
  };

  const handleDecrement = (arg2) => {
    if (arg2 == "Apples") {
      setApples(apples - 1);
      handleRemoveProduct("Apples", 1);
    } else if (arg2 == "Donuts") {
      setDonuts(donuts - 1);
      handleRemoveProduct("Donuts", 2);
    } else if (arg2 == "Pizza") {
      setPizza(pizza - 1);
      handleRemoveProduct("Pizza", 3);
    }
  };

  return (
    <div className="data-entry">
      <h2>Data Entry</h2>
      <div className="counters">
        <Counter
            label="Apples"
            count={apples}
            onIncrement={() => handleIncrement("Apples")}
            onDecrement={() => handleDecrement("Apples")}
        />
        <Counter
            label="Donuts"
            count={donuts}
            onIncrement={() => handleIncrement("Donuts")}
            onDecrement={() => handleDecrement("Donuts")}
        />
        <Counter
            label="Pizza"
            count={pizza}
            onIncrement={() => handleIncrement("Pizza")}
            onDecrement={() => handleDecrement("Pizza")}
        />
      </div>
      <ProductList products={products} onRemoveProduct={handleRemoveProduct} />
      <div className="total">
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      <div className="buttons">
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => navigate("/recommendation", {state: {apples, donuts, pizza, total, products}})}>
          Go to Recommendation
        </button>
      </div>
    </div>
  );
}
