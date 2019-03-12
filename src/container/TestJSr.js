import React, {Component} from 'react'
import TestJS from '../components/TestJS.js'
import questions from '../questions.js'

class TestJSr extends Component{

	render() {
		return (
			<div className="card mx-auto" style={{width: '70%'}}>
				<TestJS testJS={questions[0]} />
			</div>
		);
	}
}			


export default TestJSr