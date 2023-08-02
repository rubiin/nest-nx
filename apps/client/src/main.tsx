import "unfonts.css";
import "./i18n/config";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
		},
	},
});

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement);

root.render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
      <App/>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>,
);
