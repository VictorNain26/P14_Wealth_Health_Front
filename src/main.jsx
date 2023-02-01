import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<CssBaseline />
		<main>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</main>
	</React.StrictMode>,
);
