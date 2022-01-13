import { type } from "@testing-library/user-event/dist/type";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const priceIt = +props.price.toFixed(2);

  console.log((priceIt))
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) =>{
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: props.amount,
      price: priceIt,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
