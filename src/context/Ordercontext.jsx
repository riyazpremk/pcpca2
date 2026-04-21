import { createContext, useReducer, useEffect } from "react";
import { OrderReducer } from "../reducer/OrderReducer";
import { getToken, getDataset } from "../api/api";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const initialState = {
    orders: []
  };

  const [state, dispatch] = useReducer(OrderReducer, initialState);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const tokenRes = await getToken(
          "E0423014",
          "698769",
          "SETA"
        );

        const data = await getDataset(
          tokenRes.token,
          tokenRes.dataUrl
        );

        dispatch({ type: "SET_ORDERS", payload: data });
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};