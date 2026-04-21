import { OrderProvider } from "./context/OrderContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <OrderProvider>
      <AppRouter />
    </OrderProvider>
  );
}

export default App;