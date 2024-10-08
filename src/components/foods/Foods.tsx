import React, { useState } from "react";
import "./Foods.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  foodArrType,
  fudInType,
  initialStateType,
  useStateContext,
} from "../../contexts/ContextProvider";
// import { MdCircle } from "react-icons/md";

type FoodsProps = {
  menuItems: fudInType[][];
  foodItems: foodArrType;
  isClicked: initialStateType;
  handleSelectObj: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  searchTerm: string;
  setSearchTerm: (value: React.SetStateAction<string>) => void;
};

const Foods = () => {
  const { foodItems, searchTerm, setSearchTerm, handleSelectObj }: FoodsProps =
    useStateContext();

  const [hidden, setHidden] = useState("hidden");
  const [ID, setID] = useState<number>(0);

  const handleMouseHover = (id: number) => {
    foodItems.map((item) => {
      if (item.id === id) {
        if (hidden === "hidden" && ID === 0) {
          setHidden("show");
          setID(id);
        }
      }
      return item;
    });
  };

  const handleMouseOut = (id: number) => {
    foodItems.map((item) => {
      if (item.id === id) {
        if (hidden === "show" && ID === id) {
          setHidden("hidden");
          setID(0);
        }
      }
      return item;
    });
  };

  return (
    <div className="foods">
      <div className="foods__form">
        <h2>Choose From Our Item List</h2>

        <form className="search">
          <label>Search:</label>
          &nbsp;
          <input
            type="search"
            value={searchTerm}
            placeholder="Search for item"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchInput"
          />
          <FaSearch className="searchSvg" />
        </form>
      </div>

      <ul className="ulFoods">
        {foodItems.map((item) => {
          return (
            //Displays List of items

            <li
              className="liFoods"
              data-id={item.id}
              onClick={(event) => handleSelectObj(event)}
              key={item.id}
            >
              <div
                className="image"
                onPointerLeave={() => handleMouseOut(item.id)}
              >
                <Link to="/orders">
                  <img
                    className="foodImg"
                    src={require(`../../images/${item.image}`)}
                    alt={item.name}
                    onPointerEnter={() => handleMouseHover(item.id)}
                  />
                </Link>

                {item.id === ID && (
                  <Link to="/orders">
                    <button className={`image--btn ${hidden}`}>
                      Click to Order
                    </button>
                  </Link>
                )}
              </div>

              <div className="foodItem">
                <span className="foodName"> {item.name}</span>
                <span className="foodPrice">${item.price}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Foods;
