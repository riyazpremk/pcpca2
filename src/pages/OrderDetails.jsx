import { useParams } from "react-router-dom";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const OrderDetails = () => {
  const { id } = useParams();
  const { state } = useContext(OrderContext);

  const order = state.orders.find(o => o.orderId === Number(id));

  if (!order) return <p>Order not found</p>;

  return (
    <div>
      <h2>Order Details</h2>

      <p>Customer: {order.customerName || "Unknown"}</p>
      <p>Restaurant: {order.restaurant}</p>

      {order.items.map(item => (
        <p key={item.name}>
          {item.name} - ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
        </p>
      ))}
    </div>
  );
};

export default OrderDetails;