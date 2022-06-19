import React from "react";
import ReactDOM from "react-dom/client"
import App from "./components/App"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers"
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.css"
import "./styles/global.css"
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(reducers, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
            <App />
    </Provider>

);