import { useState, useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderCard from "../components/OrderCard";

const Filter = () => {
  const [input, setInput] = useState("");
  const { state } = useContext(OrderContext);

  const filteredOrders = state.orders.filter(order =>
    order.restaurant === input
  );

  return (
    <div>
      <h2>Filter Orders</h2>

      <input
        data-testid="filter-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter restaurant name"
      />

      {filteredOrders.map(order => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </div>
  );
};

export default Filter;