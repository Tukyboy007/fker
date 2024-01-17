import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./pages/App";
import "./style/index.css";
import "./style/App.css";
import store from "./redux/store";
import { Provider } from "react-redux";

import { NotificationProvider } from "./utils/NotificationProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NotificationProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </NotificationProvider>
);
