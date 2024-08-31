import "./Cart.css";
import { FaTrashAlt } from "react-icons/fa";
import {
  useStateContext,
  foodArrType,
  foodType,
} from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

type CartProps = {
  cart: foodArrType;
  customermobile: number;
  cartValue: number;
  totalAmount: string;
  display: boolean;
  handleDelete: (id: number) => void;
};

const Cart = () => {
  const { cart, customermobile, cartValue, display, handleDelete }: CartProps =
    useStateContext();
  const [itemId, setItemId] = useState<number | null>(null);

  const handleCartTrash = (id: number) => {
    cart.find((item: foodType) => {
      if (item.id === id && itemId == null) {
        //sets itemId to display delete icon
        setItemId(id);
        return id;
      } else if (item.id === id && itemId !== item.id) {
        //sets itemId to display delete icon
        setItemId(id);
        return id;
      } else {
        setItemId(null);
        return null; //sets itemId to null to remove delete icon
      }
    });
  };

  return (
    <div className="cart">
      {display && (
        <div className="listMsgContainer">
          <h2 className="heading">Your Cart List</h2>
          <div className="foods__link">
            <Link to="/">
              <FaArrowLeft />
            </Link>
          </div>
          <ul className="cartList">
            {cart.map((item) => {
              return (
                <li key={item.id} data-id={item.id} className="cartItem">
                  <h5 className="cartFoodTitle">{item.name}</h5>

                  <img
                    className="CartImg"
                    src={require(`../../images/${item.image}`)}
                    alt={item.name}
                    onClick={() => handleCartTrash(item.id)}
                  />
                  <p>
                    {item.quantity} {item.name}-{item.price}$ each-$
                    {item.totalAmount}
                  </p>

                  {itemId === item.id && (
                    <FaTrashAlt
                      role="button"
                      tabIndex={0}
                      aria-label={`Delete ${item.name}`}
                      onClick={() => handleDelete(item.id)}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          <ul className="ulMsg">
            <li className="liMessage">
              <label>
                Order Submitted! You will receive an SMS, once ready, on your
                mobile, {customermobile}, for pickup.
              </label>

              <h3>
                Total Bill is ${cartValue} for {cart.length}{" "}
                {cart.length > 1 ? "products" : "product"}
              </h3>
            </li>
          </ul>
        </div>
      )}
      {!display && (
        <div className="empty">
          <Link to="/">
            <FaArrowLeft />
          </Link>
          <p>Cart is empty. Place your orders!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
