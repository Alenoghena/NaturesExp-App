import React from "react";
import "./FoodOrder.css";
import { FaShoppingCart } from "react-icons/fa";
import {
  useStateContext,
  fudInType,
  foodArrType,
} from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";

type FoodOrderType = {
  setMobile: any;
  foodID: number;
  handleClick: any;
  menuItems: fudInType[][];
  foodItems: foodArrType;
  errorMessage: any;
  cart: foodArrType;
  handleQuantityChange: (event: any) => void;
  handleIsClicked: (clicked: string) => void;
  handleSelect: (event: any, title: any) => void;
  totalAmount: string;
  name: any;
  itemId: number | null;
  setName: React.Dispatch<React.SetStateAction<string>>;
  mobile: number;
  quantity: number;
};

const FoodItems = () => {
  const {
    handleClick,
    menuItems,
    name,
    setName,
    handleQuantityChange,
    handleSelect,
    mobile,
    foodID,
    setMobile,
    quantity,
    itemId,
    cart,
    errorMessage,
  }: FoodOrderType = useStateContext();

  return (
    //Displays selected item
    <>
      <div className=" foodOrder">
        {
          <div>
            <div className="button-cart">
              <Link to="/">
                <button className="btn btnReturnMenu">Return to Menu</button>
              </Link>

              {cart.length > 0 && (
                <Link to="/cart" className="linkCart">
                  <FaShoppingCart />
                </Link>
              )}
            </div>
            <ul className="ulFoodDetails">
              {menuItems.map((food, index) => {
                if (foodID - 1 === index) {
                  return food.map((item) => {
                    return (
                      <li key={item.ID} className="orderedItem">
                        <p>{item.title}</p>
                        <img
                          className="FoodImg"
                          src={require(`../../images/${item.image}`)}
                          alt={item.title}
                          data-id={item.ID}
                          onClick={(event) => handleSelect(event, item.name)}
                        />

                        <p className="orderQuantity">
                          Available Quantity: {item.quantity}
                        </p>
                        <p className="orderFoodDesc">{item.desc}</p>

                        {itemId === item.ID && (
                          <form className="dataInput">
                            <div className="qtyContainer">
                              <label htmlFor="quantity">Quantity:</label>
                              <input
                                type="number"
                                value={quantity}
                                id="quantity"
                                className="quantity"
                                min="1"
                                max={item.quantity}
                                onChange={(e) => handleQuantityChange(e)}
                              />
                            </div>
                            <label htmlFor="name"></label>
                            <input
                              type="text"
                              className="liFields"
                              id="name"
                              value={name}
                              onChange={(event) => setName(event.target.value)}
                              placeholder="Your Name"
                            />
                            <label htmlFor="mobile"></label>
                            <input
                              type="text"
                              className="liFields"
                              id="mobile"
                              name="mobile"
                              value={mobile}
                              onChange={(event) =>
                                setMobile(event.target.value)
                              }
                              placeholder="Your mobile number"
                            />
                          </form>
                        )}
                        {itemId === item.ID && (
                          <button
                            className="btn btnOrder"
                            type="submit"
                            onClick={() =>
                              handleClick(item.ID, quantity, item.quantity)
                            }
                          >
                            Submit Order
                          </button>
                        )}
                      </li>
                    );
                  });
                }
              })}
            </ul>
          </div>
        }
      </div>
      {errorMessage && (
        <div className="stock__msg">
          <h4>
            Quantity above stock. Please check available stock and enter the
            right value!
          </h4>
        </div>
      )}
    </>
  );
};

export default FoodItems;
