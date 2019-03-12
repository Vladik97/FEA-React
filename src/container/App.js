import React, {Component} from 'react'

import {Route, Switch} from 'react-router-dom';

import Header from './Header.js'
import Home from './Home.js'
import Alltests from './Alltests.js'
import TestJS from './TestJSr.js'
import TestjQuery from './TestjQueryr.js'
import History from './History.js'
import Setting from './Setting.js'

// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { add, dec } from "../action/test.js";

class App extends Component {
	render() {
		// const { counter, add, dec } = this.props;
		// console.log("erw", this.props);
		return (
			<div>
			<Header />
			<Switch>
				<Route exact path="/" component = { Home } />
				<Route exact path="/test" component = { Alltests } />
				<Route exact path="/test/JavaScript" component = { TestJS } />
				<Route exact path="/test/jQuery" component = { TestjQuery } />
		        <Route exact path="/history" component = { History } />
		        <Route exact path="/setting" component = { Setting } />   
		    </Switch>
	    </div>
		);
	}
}

// const mapStateToProps = state => ({
// 	counter: 0
// });

// const mapDispatchToProps = dispatch => bindActionCreators({ add, dec }, dispatch);

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(App);

export default App