import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { getItem, setItem } from "../utils/localStorage";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const ID_KEY = "_id";

const calculateTotal = (items, key = "total_amount") => {
  if (items.length === 0) return 0;
  return items.map((item) => item[key]).reduce((t, i) => t + i, 0);
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "ADD_CART_ITEM":
          if (
            !state.items.find(
              (item) => item[ID_KEY] === action.payload.item[ID_KEY]
            )
          )
            state.items.push(action.payload.item);
          break;
        case "UPDATE_CART_ITEM":
          state.items = state.items.map((item) => {
            if (item[ID_KEY] === action.payload.id)
              return { ...item, ...action.payload.item };
            return item;
          });
          break;
        case "REMOVE_CART_ITEM":
          state.items = state.items.filter(
            (item) => item[ID_KEY] !== action.payload.id
          );
          break;
        case "SET_SHIPPING_ADDRESS_ID":
          state.shipping_address_id = action.payload.shipping_address_id;
          break;
        case "CLEAR_CART":
          state.items = [];
          state.shipping_address_id = null;
          break;
        default:
          throw new Error("undefined action type used");
      }
      state.total_amount = calculateTotal(state.items, "total_amount");

      setItem("cart", JSON.stringify(state));
      return { ...state, items: [...state.items] };
    },
    JSON.parse(getItem("cart") || null) || {
      items: [],
      total_amount: 0,
      shipping_address_id: null,
    }
  );

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CartProvider;

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCartStateContext must be used within a CartProvider");
  }
  return context;
};

export const useCartDispatchContext = () => {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useCartDispatchContext must be used within a CartProvider"
    );
  }
  return context;
};

export const useCartActions = () => {
  const state = useCartState();
  const dispatch = useCartDispatchContext();
  const findItem = (id) => state.items.find((item) => item[ID_KEY] === id);
  const countItem = () => state.items.length;
  const addItem = (item) => {
    dispatch({
      type: "ADD_CART_ITEM",
      payload: { item },
    });
  };

  const updateItem = (id, item) => {
    dispatch({
      type: "UPDATE_CART_ITEM",
      payload: { id, item },
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: { id },
    });
  };
  const setShippingAddressId = (id) => {
    dispatch({
      type: "SET_SHIPPING_ADDRESS_ID",
      payload: { shipping_address_id: id },
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
      payload: null,
    });
  };

  return {
    findItem,
    countItem,
    addItem,
    updateItem,
    removeItem,
    setShippingAddressId,
    clearCart,
  };
};
