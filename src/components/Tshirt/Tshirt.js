import React from "react";

const Tshirt = ({ tshirt, addToCart }) => {
  const { picture, name, price } = tshirt;
  return (
    <div>
      <div className="card card-compact w-90 bg-base-100 shadow-2xl p-3 border border-base-500">
        <figure>
          <img className="w-70 h-60" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <h1 className="text-lg font-bold text-primary">Price: ${price}</h1>
          <div className="card-actions justify-center">
            <button onClick={() => addToCart(tshirt)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
