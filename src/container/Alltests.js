import React, {Component} from 'react'
import Alltest from '../components/Alltest.js'
import questions from '../questions.js'

class Alltests extends Component{
	
	render() {
		return (
			<div>
				<Alltest Alltest tests={questions} />
			</div>
		);
	}			
}

export default Alltests