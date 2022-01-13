import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighligted, setBtnIsHihglighted] = useState(false);
  const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  const numberOfCartItems = cartCtx.items.length;

  const buttonClass = `${classes.button} ${btnIsHighligted ? classes.bump : ''}`;

  useEffect(() =>{
    if(cartCtx.items.length === 0){
      return;
    }
    setBtnIsHihglighted(true);

    setTimeout(() =>{
      setBtnIsHihglighted(false);
    }, 300)
  }, [cartCtx.items])

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
