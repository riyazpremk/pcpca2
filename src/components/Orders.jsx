import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const { state } = useContext(OrderContext);

  const validOrders = state.orders.filter(order =>
    order.items &&
    order.items.length > 0 &&
    order.items.every(item => item.quantity > 0) &&
    typeof order.totalAmount === "number" &&
    order.totalAmount > 0
  );

  return (
    <div>
      <h2>Orders</h2>

      {validOrders.map(order => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </div>
  );
};

export default Orders;