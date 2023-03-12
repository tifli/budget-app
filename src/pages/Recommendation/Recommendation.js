import "./Recommendation.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from '../../components/Header.js';

export default function Recommendation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { apples, donuts, pizza, total, products } = location.state;
  const isBelow30 = total < 30 ? true : false;
  const cheapestProduct = "Apple";
  const appleRatio = apples / total;
  const donutRatio = donuts / total;
  const pizzaRatio = pizza / total;

  const buyMore = (appleRatio, donutRatio, pizzaRatio) => {
    if (appleRatio < donutRatio && appleRatio < pizzaRatio) {
      return "apples";
    } else if (donutRatio < appleRatio && donutRatio < pizzaRatio) {
      return "donuts";
    } else {
      return "pizza";
    }
  };
  const buyMoreOf = buyMore(appleRatio, donutRatio, pizzaRatio);

  return (
    <div>
      <h1>Recommendation</h1>

      <button onClick={() => navigate("/")}>Click to go to Data Entry</button>

      <Header text= "RECOMMENDATIONS:"></Header>
      <div>
        {isBelow30 ? (
          <h2>Buy another {cheapestProduct}! Total is less than 30 USD!</h2>
        ) : (
          <h1>Go ahead and pay!</h1>
        )}
      </div>

      { <div>
        <h2>Based on your product ratios, you should buy more {buyMoreOf}</h2>
      </div> }
    </div>
  );
}
