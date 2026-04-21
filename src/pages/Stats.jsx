import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const Stats = () => {
  const { state } = useContext(OrderContext);

  const validOrders = state.orders.filter(order =>
    order.items &&
    order.items.length > 0 &&
    order.items.every(i => i.quantity > 0) &&
    order.totalAmount > 0
  );

  const total = validOrders.length;

  const delivered = validOrders.filter(o => o.status === "delivered").length;

  const cancelled = validOrders.filter(o => o.status === "cancelled").length;

  window.appState = {
    totalOrders: total,
    deliveredOrders: delivered,
    cancelledOrders: cancelled
  };

  return (
    <div>
      <h2>Stats</h2>

      <p data-testid="total-orders">{total}</p>
      <p data-testid="delivered-orders">{delivered}</p>
      <p data-testid="cancelled-orders">{cancelled}</p>
    </div>
  );
};

export default Stats;