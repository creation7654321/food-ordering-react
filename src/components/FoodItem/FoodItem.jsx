import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
export default function FoodItem({ id, name, price, description, image }) {



  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);


  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id]
        ?
        <img 
        src={assets.add_icon_white}
        className="add"
        alt=""
        onClick={()=>addToCart(id)}
        />
        :
        <div className="food-item-counter">
          <img src={assets.remove_icon_red}
            onClick={()=>removeFromCart(id)}
          />
            {cartItems[id]}
          <img src={assets.add_icon_green}
            onClick={()=>addToCart(id)}
          />

          
        </div>
        }

      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}
