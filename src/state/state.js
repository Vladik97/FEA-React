import { createStore } from "redux";
// import logger from "redux-logger";

import reducers from "../reducers";

export default createStore(
	reducers
	// composeEnhancers(applyMiddleware(logger, sagaMiddleware)),
	// applyMiddleware(logger, sagaMiddleware)
);