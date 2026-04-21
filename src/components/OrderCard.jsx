import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(OrderContext);

  return (
    <div data-testid="order-item" style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <p>Order ID: {order.orderId}</p>
      <p>Customer: {order.customerName || "Unknown"}</p>
      <p>Restaurant: {order.restaurant}</p>
      <p>Total: ₹{order.totalAmount}</p>

      {order.rating && <p>Rating: {order.rating}</p>}

      <button onClick={() => navigate(`/orders/${order.orderId}`)}>
        View Details
      </button>

      <button onClick={() => dispatch({ type: "MARK_DELIVERED", payload: order.orderId })}>
        Mark Delivered
      </button>
    </div>
  );
};

export default OrderCard;