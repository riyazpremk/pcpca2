export const OrderReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        ...state,
        orders: action.payload
      };

    case "MARK_DELIVERED":
      return {
        ...state,
        orders: state.orders.map(order =>
          order.orderId === action.payload
            ? { ...order, status: "delivered" }
            : order
        )
      };

    default:
      return state;
  }
};