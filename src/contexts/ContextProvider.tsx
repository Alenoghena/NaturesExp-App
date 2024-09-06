import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";

export type initialStateType = {
  sidebarSelected: boolean;
  show: boolean;
  componentSelected: boolean;
  pageSelected: boolean;
  cartSelected: boolean;
  orderSelected: boolean;
  itemSelected: boolean;
  return: boolean;
};

export type foodType = {
  id: number;
  name?: string;
  desc?: string;
  quantity: number;
  price: string;
  image: string;
  length?: number;
  totalAmount?: string;
};

export type fudInType = {
  ID?: number;
  id?: number;
  title?: string;
  name: string;
  quantity: number;
  desc: string;
  price: string;
  image: string;
  length?: number;
  totalAmount?: string;
};
export type HomeInType = {
  ID?: number;
  id?: number;
  title?: string;
  name?: string;
  quantity: number;
  desc?: string;
  price?: string;
  image?: string;
  length?: number;
  totalAmount?: string;
};

export type fudType = {
  id?: number;
  name?: string;
  item?: fudInType[];
  quantity: number;
};

export type foodArrType = foodType[];

type useContextType = {
  name: string | null;
  foodID: number;
  display: boolean;
  menuItems: fudInType[][];
  foodItems: foodArrType;
  selectedFood: fudInType;
  itemId: number | null;
  cart: foodArrType;
  isClicked: initialStateType;
  quantity: number;
  cartValue: number;
  totalAmount: string;
  customermobile: number;
  customerName: string | null;
  mobile: number;
  searchTerm: string;
  activeMenu: boolean;
  errorMessage: boolean;
  listArRef: React.MutableRefObject<HomeInType[][]>;
  setActiveMenu: (value: React.SetStateAction<boolean>) => void;
  setScreenSize: (value: React.SetStateAction<any>) => void;
  screenSize: number | undefined;
  updateQuantity: (
    id: number,
    orderQuantity: number,
    itemQuantity: number
  ) => void;
  handleClick: any;
  handleDelete: (id: any) => void;
  handleRemoveItem: (id: any) => void;
  setQuantity: (value: React.SetStateAction<number>) => void;
  setFullName: React.Dispatch<
    React.SetStateAction<{
      customerName: string;
      customermobile: number;
    }>
  >;
  setMobile: React.Dispatch<React.SetStateAction<number>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSelectedFood: React.Dispatch<React.SetStateAction<fudInType>>;
  handleSelect: (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    title: string
  ) => void;
  handleSelectObj: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;

  handleChoosePage: () => void;
  handleIsClicked: (clicked: string) => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleQuantityChange: (event: any) => void;
  handleShowCart: () => void;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  sidebarSelected: false,
  show: false,
  componentSelected: false,
  pageSelected: false,
  cartSelected: false,
  orderSelected: false,
  itemSelected: false,
  return: false,
};

export const StateContext = createContext<useContextType>({} as useContextType);

//New

const foodObjArr1 = [
  {
    id: 1,
    name: "Burger",
    item: [
      {
        ID: 11,
        title: "Chicken Burger",
        name: "Burger",
        quantity: 40,
        desc: `Fried chicken burger - lettuce, tomato, cheese and
      mayonnaise`,
        price: "24",
        image: "cb.jpg",
      },
      {
        ID: 12,
        title: "Veg Burger",
        name: "Burger",
        quantity: 30,
        desc: `Plant-based burger - lettuce, tomato, vegan cheese and
      mayonnaise`,
        price: "22",
        image: "vb.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Ukwa",
    item: [
      {
        ID: 21,
        title: "Dried Ukwa Seeds",
        name: "Ukwa",
        quantity: 30,
        desc: "1KG of Dried Ukwa - Breadfruit Seeds",
        price: "20",
        image: "dried ukwa seeds.jpg",
      },
      {
        ID: 22,
        title: "Fresh Ukwa Seeds",
        name: "Ukwa",
        quantity: 20,
        desc: "1KG of Fresh Ukwa -Breadfruit Seeds",
        price: "15",
        image: "fresh ukwa seeds.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Chips",
    item: [
      {
        ID: 31,
        title: "Chips",
        name: "Chips",
        quantity: 50,
        desc: "Potato chips fried to perfection",
        price: "7",
        image: "chips.jpg",
      },
      {
        ID: 32,
        title: "Ice Cream",
        name: "Chips",
        quantity: 30,
        desc: "Ice cream - Vanilla ice cream double scoop",
        price: "4",
        image: "ic.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Fish",
    item: [
      {
        ID: 41,
        title: "Oron Crayfish",
        name: "Fish",
        quantity: 20,
        desc: "1KG of Oron Crayfish",
        price: "100",
        image: "cf.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Beans",
    item: [
      {
        ID: 51,
        title: "Honey Beans",
        name: "Beans",
        quantity: 20,
        desc: "1KG of Honeybeans",
        price: "15",
        image: "honeybeans.jpg",
      },
      {
        ID: 52,
        title: "Red Beans",
        name: "Beans",
        quantity: 20,
        desc: "1KG of red beans",
        price: "20",
        image: "redbeans.jpg",
      },
      {
        ID: 53,
        title: "White Beans",
        name: "Beans",
        quantity: 20,
        desc: "1KG of white beans",
        price: "20",
        image: "whitebeans.jpg",
      },
    ],
  },

  {
    id: 6,
    name: "Flour",
    item: [
      {
        ID: 61,
        title: "plantain-flour",
        name: "Flour",
        quantity: 20,
        desc: "1KG of plantain-flour",
        price: "45",
        image: "plantain-flour.jpg",
      },
    ],
  },

  {
    id: 7,
    name: "Oil",
    item: [
      {
        ID: 71,
        title: "Okomu Red Oil",
        name: "Oil",
        quantity: 20,
        desc: "1KG of Red oil",
        price: "50",
        image: "oro.jpg",
      },
    ],
  },
];
const foodItemArr = [
  {
    id: 1,
    name: "Burger",
    quantity: 40,
    desc: `Fried chicken burger - lettuce, tomato, cheese and
    mayonnaise`,
    price: "24",
    image: "cb.jpg",
  },
  {
    id: 2,
    name: "Ukwa",
    quantity: 30,
    desc: "1KG of Dried Ukwa - Breadfruit Seeds",
    price: "20",
    image: "dried ukwa seeds.jpg",
  },

  {
    id: 3,
    name: "Chips",
    quantity: 50,
    desc: "Potato chips fried to perfection",
    price: "7",
    image: "chips.jpg",
  },
  {
    id: 4,
    name: "Fish",
    quantity: 20,
    desc: "1KG of Oron Crayfish",
    price: "100",
    image: "cf.jpg",
  },
  {
    id: 5,
    name: "Beans",
    quantity: 20,
    desc: "1KG of white beans",
    price: "20",
    image: "whitebeans.jpg",
  },
  {
    id: 6,
    name: "Flour",
    quantity: 20,
    desc: "1KG of plantain-flour",
    price: "45",
    image: "plantain-flour.jpg",
  },
  {
    id: 7,
    name: "Oil",
    quantity: 20,
    desc: "1KG of Red oil",
    price: "50",
    image: "oro.jpg",
  },
];

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const getLocalStorage = () => {
    const cartList = localStorage.getItem("cart");

    if (cartList) {
      return JSON.parse(cartList);
    }
    return []; // Default value if 'cart' is not set
  };
  const [foodID, setFoodID] = useState(0);
  const [cartValue, setCartValue] = useState(getLocalStorage()); // JSON.parse(localStorage.getItem("cart"))
  const [menuItems, setMenuItems] = useState<fudInType[][]>(
    [] as fudInType[][]
  );
  const [foodItems, setFoodItems] = useState<foodArrType>([] as foodArrType);
  const [cart, setCart] = useState<foodArrType>([] as foodArrType);
  const [selectedFood, setSelectedFood] = useState<fudInType>({} as fudInType);

  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState("");
  const [display, setDisplay] = useState(cart.length > 0);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [fullName, setFullName] = useState({
    customerName: name,
    customermobile: mobile,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isClicked, setIsClicked] = useState<initialStateType>(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const { customerName, customermobile } = fullName;
  const [itemId, setItemId] = useState<number | null>(null);

  const listArRef = useRef<HomeInType[][]>([] as HomeInType[][]);

  const updateQuantity = (
    id: number,
    orderQuantity: number,
    itemQuantity: number
  ) => {
    try {
      let cartList: foodArrType;
      let menuSelected: fudInType;
      let cartObj: foodType;

      const updatedMenuItems: fudInType[][] = menuItems.map((food) => {
        const isCartSame: boolean = cart.some(
          (cartItem: foodType) => cartItem.id === id
        );

        if (Number(orderQuantity) > itemQuantity)
          throw new Error(
            "Quantity above stock. Please check available stock and enter the right value!"
          );

        return food.map((item) => {
          if (item.ID === id) {
            if (isCartSame) {
              cartList = cart.map((cartItem: foodType) => {
                if (cartItem.id === id) {
                  return {
                    ...cartItem,
                    quantity: cartItem.quantity + Number(orderQuantity),
                    totalAmount: String(
                      (cartItem.quantity + Number(orderQuantity)) *
                        Number(cartItem.price)
                    ),
                  };
                } else {
                  return cartItem;
                }
              });

              setErrorMessage(false);
              setCart([...cartList]);
            }
            if (!isCartSame) {
              cartObj = {
                id,
                name: item.title,
                price: item.price,
                quantity: Number(orderQuantity),
                image: item.image,
                totalAmount,
              };

              setErrorMessage(false);

              setCart([...cart, cartObj]);
            }

            handleIsClicked("orderSelected");
            //menuSelected use to update selected item
            menuSelected = {
              ...item, //we are spreading the item, an object, here
              quantity: item.quantity - Number(orderQuantity),
            };

            //return the updated item here and save to updatedMenuItems
            return menuSelected;
          } else {
            return item;
          }
        });
      });

      setMenuItems([...updatedMenuItems]);
    } catch (err) {
      setErrorMessage(true);
      throw err;
    }
  };

  const handleQuantityChange = (event: any) => {
    setQuantity(event.target.value);
    setTotalAmount(
      String(Number(selectedFood.price) * Number(event.target.value))
    );
  };

  const handleShowCart = () => {
    handleIsClicked("return");
  };

  let foodObjLi: fudInType[][] | undefined;
  let foodLi: fudInType | undefined;

  const handleSelect = (event: any, title: string) => {
    foodObjArr1.map((food) => {
      if (food.name === title) {
        return (foodLi = food.item.find((item: fudInType) => {
          if (
            item.ID === parseInt(event.currentTarget.dataset.id) &&
            itemId === null
          ) {
            //sets itemId to display delete icon

            setItemId(parseInt(event.currentTarget.dataset.id));
            return parseInt(event.currentTarget.dataset.id);
          } else if (
            item.ID === parseInt(event.currentTarget.dataset.id) &&
            itemId !== item.ID
          ) {
            //sets itemId to display delete icon

            setItemId(parseInt(event.currentTarget.dataset.id));
            return parseInt(event.currentTarget.dataset.id);
          } else {
            setItemId(null);
            return null;
          }
        }));
      }
      return food;
    });
    if (foodLi) {
      setTotalAmount(String(Number(foodLi.price)));
      setSelectedFood(foodLi);
    }
  };

  const handleSelectObj = (event: any) => {
    if (menuItems.length === 0) {
      foodObjLi = foodObjArr1.map((item) => {
        if (item.id === parseInt(event.currentTarget.dataset.id)) {
          setFoodID(item.id);
          handleIsClicked("componentSelected");

          return item.item;
        } else {
          return item.item;
        }
      });
    }

    if (menuItems.length > 0) {
      foodObjLi = menuItems.map((item, index) => {
        if (index + 1 === parseInt(event.currentTarget.dataset.id)) {
          setFoodID(index + 1);

          handleIsClicked("componentSelected");
          return item;
        } else {
          return item;
        }
      });
    }
    if (foodObjLi) {
      setMenuItems([...foodObjLi]);

      return foodObjLi;
    }
  };

  const totalCartValue = useCallback(() => {
    const value = cart
      .map((item: foodType) => {
        return Number(item.price) * item.quantity;
      })
      .reduce((sum, amount) => sum + amount, 0);
    localStorage.setItem("cart", JSON.stringify(value));
    if (cart.length > 0) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
    setCartValue(value);
  }, [cart]);

  const handleDelete = (id: number) => {
    let cartList: foodArrType;

    const updatedMenuItems = menuItems.map((food) => {
      const isCartSame = cart.some((item: foodType) => item.id === id);
      const index = cart.findIndex((item: foodType) => item.id === id);
      return food.map((item) => {
        if (isCartSame && cart[index].quantity - 1 > 0 && item.ID === id) {
          cartList = cart.map((item: foodType) => {
            //also look for item in cart
            if (item.id === id) {
              return {
                ...item,
                quantity: item.quantity - 1,
                totalAmount: String(
                  Number(item.totalAmount) - Number(item.price)
                ),
              };
            } else {
              return item; //leave other items in cart untouched
            }
          });
          setCart([...cartList]);
          return {
            ...item, //we are spreading the item, an object, here, so we can update the quantity
            quantity: item.quantity + 1,
          };
        }

        if (isCartSame && cart[index].quantity - 1 === 0 && item.ID === id) {
          //filter and keep item.id not equal to selected id
          cartList = cart.filter((item: foodType) => item.id !== id);

          setCart([...cartList]);

          return {
            ...item, //we are spreading the item, an object, here
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    });

    setMenuItems([...updatedMenuItems]);
  };
  ///Remove the item
  const handleRemoveItem = (id: number) => {
    let cartList: foodArrType;

    const updatedMenuItems = menuItems.map((food) => {
      const index = cart.findIndex((item: foodType) => item.id === id);
      return food.map((item) => {
        if (item.ID === id) {
          //filter and keep item.id not equal to selected id
          cartList = cart.filter((item: foodType) => item.id !== id);

          setCart([...cartList]);

          return {
            ...item, //we are spreading the item, an object, here
            quantity: item.quantity + cart[index].quantity,
          };
        }
        return item;
      });
    });

    setMenuItems([...updatedMenuItems]);
  };

  const handleSearch = (search: string) => {
    if (search) {
      const searchList = foodItemArr.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFoodItems([...searchList]);
    } else {
      setFoodItems(foodItemArr);
    }
  };

  const handleChoosePage = () => {
    if (!isClicked.show) {
      handleIsClicked("pageSelected");
    } else {
      handleIsClicked("show");
      handleIsClicked("pageSelected");
    }
  };

  const handleClick = (
    id: number,
    orderQuantity: number,
    itemQuantity: number
  ) => {
    try {
      if (itemQuantity > 0) {
        updateQuantity(id, orderQuantity, itemQuantity);
        setFullName({ customerName: name, customermobile: mobile });
        setMobile(0);
        setName("");
        setQuantity(1);
        setErrorMessage(false);
        handleIsClicked("orderSelected");
      } else throw Error;
    } catch {
      setErrorMessage(true);
    }
  };

  const handleIsClicked = (clicked: string) => {
    if (clicked === "sidebarSelected") {
      setIsClicked({ ...isClicked, [clicked]: !isClicked.sidebarSelected });
    }
    if (clicked === "show") {
      setIsClicked({ ...isClicked, [clicked]: !isClicked.show });
    }
    if (clicked === "componentSelected") {
      setIsClicked({
        ...isClicked,
        [clicked]: !isClicked.componentSelected,
      });
    }
    if (clicked === "pageSelected") {
      setIsClicked({
        ...isClicked,
        [clicked]: !isClicked.pageSelected,
      });
    }
    if (clicked === "itemSelected") {
      setIsClicked({
        ...isClicked,
        [clicked]: !isClicked.itemSelected,
      });
    }
    if (clicked === "cartSelected") {
      setIsClicked({
        sidebarSelected: false,
        show: false,
        componentSelected: false,
        pageSelected: false,
        [clicked]: !isClicked.cartSelected,
        orderSelected: false,
        itemSelected: false,
        return: false,
      });
    }
    if (clicked === "orderSelected") {
      setIsClicked({ ...isClicked, [clicked]: true });
    }
    if (clicked === "return") {
      setIsClicked({
        sidebarSelected: false,
        show: false,
        componentSelected: true,
        pageSelected: true,
        cartSelected: false,
        orderSelected: true,
        itemSelected: false,
        return: false,
      });
    }

    if (clicked === "returnToPage") {
      setIsClicked({
        sidebarSelected: false,
        show: false,
        componentSelected: false,
        pageSelected: true,
        cartSelected: false,
        orderSelected: false,
        itemSelected: false,
        return: false,
      });
    }
  };
  // let listAr: fudType[][] = useMemo(() => [], []);

  useEffect(() => {
    totalCartValue();
  }, [totalCartValue]);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const homeList1 = useCallback(() => {
    if (menuItems.length === 0) {
      listArRef.current = foodObjArr1.map((food) => {
        return food.item.map((foodItem) => {
          return {
            id: foodItem.ID,
            name: foodItem.title,
            quantity: foodItem.quantity,
          };
        });
      });
    }
    return listArRef;
  }, [menuItems.length]);

  const homeList2 = useCallback(() => {
    if (menuItems.length > 0) {
      listArRef.current = menuItems.map((food) => {
        return food.map((foodItem) => {
          return {
            id: foodItem.ID,
            name: foodItem.title,
            quantity: foodItem.quantity,
          };
        });
      });
    }
    return listArRef;
  }, [menuItems]);

  useEffect(() => {
    setFoodItems(foodItemArr);
    homeList1();
  }, [homeList1]);

  useEffect(() => {
    homeList2();
  }, [menuItems, homeList2]);

  return (
    <StateContext.Provider
      value={{
        menuItems,
        listArRef,
        foodID,
        searchTerm,
        activeMenu,
        screenSize,
        setActiveMenu,
        updateQuantity,
        handleClick,
        handleSelect,
        handleSelectObj,
        selectedFood,
        cart,
        setSelectedFood,
        handleChoosePage,
        handleIsClicked,
        setScreenSize,
        isClicked,
        quantity,
        setSearchTerm,
        cartValue,
        handleQuantityChange,
        totalAmount,
        handleShowCart,
        name,
        mobile,
        setName,
        customermobile,
        setMobile,
        setFullName,
        setQuantity,
        handleDelete,
        handleRemoveItem,
        customerName,
        errorMessage,
        display,
        itemId,
        foodItems,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
