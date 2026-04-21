import { OrderProvider } from "./context/OrderContext";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <OrderProvider>
      <AppRouter />
    </OrderProvider>
  );
}

export default App;