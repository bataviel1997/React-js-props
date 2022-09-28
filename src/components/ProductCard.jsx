import React, { useState } from 'react';
import MyButton from './MyButton';

export default function ProductCard(props) {
  const [qty, setQty] = useState(1);
  function increase() {
    setQty(qty + 1);
  }
  function decrease() {
    if (qty < 1) {
      return;
    }
    setQty(qty - 1);
  }

  return (
    <div className="product-card">
      <img src={props.image} alt="img-produk" />

      <div className="pc-content">
        <h1>{props.name}</h1>
        <p>Rp {props.price}</p>

        <div className="input-qty">
          <button onClick={decrease}>-</button>
          <input type="number" value={qty} />
          <button onClick={increase}>+</button>
        </div>

        <MyButton
          content={'Beli Sekarang'}
          bgColor={'orange'}
          color={'white'}
        />
      </div>
    </div>
  );
}
