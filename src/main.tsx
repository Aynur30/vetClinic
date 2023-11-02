import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";
import "./styles/index.scss";
import MainRoutes from "./mainRoutes";
import { ThemeProvider } from "./app/providers/ThemeProvide";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={MainRoutes} />
    </Provider>
  </ThemeProvider>
);
