import React, {Component} from 'react'
import TestjQuery from '../components/TestjQuery.js'
import questions from '../questions.js'

class TestjQueryr extends Component{

	render() {
		return (
			<div className="card mx-auto" style={{width: '70%'}}>
				<TestjQuery testjQuery={questions[1]} />
			</div>
		);
	}
}			


export default TestjQueryr