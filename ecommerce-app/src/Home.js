import "./styles.css";
import { useState } from "react";

export default function Home() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h3>Our products</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className="product-container">
        <div className="product">
          <img src="https://static.zara.net/assets/public/bee3/eb1d/f3b24224aef9/91d2ca3ef20f/02770399402-e1/02770399402-e1.jpg?ts=1740501694430&w=750" alt="satin dress" className="product-image" />
          <figcaption>
            <p>Satin dress - Rs.1100 </p>
            <p>{count1}</p>
            <div className="counter-buttons">

              <button onClick={() => setCount1(count1 + 1)}>+</button>
              <button onClick={() => setCount1(count1 - 1)}>-</button>
            </div>
          </figcaption>
        </div>
        <div className="product">
          <img src="https://static.zara.net/assets/public/743d/62c7/62634dfc907a/de613f3efd61/02625188077-e1/02625188077-e1.jpg?ts=1739465038343&w=750" alt="geometric dress" className="product-image" />
          <figcaption>
            <p>Geometric dress - Rs.1500 </p>
            <p>{count2}</p>
            <div className="counter-buttons">

              <button onClick={() => setCount2(count2 + 1)}>+</button>
              <button onClick={() => setCount2(count2 - 1)}>-</button>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}