import React from 'react'
import {render} from 'react-dom';

import App from './container/App.js'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";

import {BrowserRouter} from 'react-router-dom';
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./state/state.js";
import Router from "./router";


render(
	<BrowserRouter>

			<App />

	</BrowserRouter>,
	document.getElementById("root")
);

serviceWorker.unregister();