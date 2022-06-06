import "./CartItemList.css";
import { useCartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const CartItemList = () => {
  const { cartList } = useCartContext();

  return (
    <div className="CartItemList">
      {cartList.map((item) => (
        <CartItem key={Math.random()} item={item} />
      ))}
    </div>
  );
};

export default CartItemList;
