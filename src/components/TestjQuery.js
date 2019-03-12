import React, {Component} from 'react'

 
class TestjQuery extends Component {
	constructor(props) {
		super(props);
			this.stete = {
			
			}
			console.log(props)
	}

	render() {
		const testAnswers = this.props.testjQuery.questions.map((test,key) => {
			console.log(test)

			return (
				<div key={key}>
					<h2>{test.question}</h2>
				</div>
			)	
		});
		const testElements = this.props.testjQuery.questions.map((test,key) => {
			console.log(test)

			let testElement = null;

			if(test.type === 'oneOF'){
				return testElement = test.answers.map((test,key) => {
					

					return <div key={key}>	
						<p><input type="radio" name="site_name"  />     {test.text}   {test.weight}</p>  
	                </div>
				});
			}
			else if(test.type == 'manyOF'){
				return testElement = test.answers.map((test,key) => {
					
					return <div key={key}>	
						<p><input type="checkbox" name="site_name"  />     {test.text}   {test.weight}</p>  
	                </div>
				});
			}			
			return (
				<div key={key}>
					<p>{testElement}</p>					
				</div>
			)	
		});
		
		return (
			<div className="card mx-auto" style={{width: '100%'}}>
				<div className="card-header" >
					<h1 className='textcenter'>
						{this.props.testjQuery.name}
					</h1>
					{testAnswers[0]}
					{testElements[0]}
						<button className="btn btn-primary btn-lg" >Back</button>
						<button className="btn btn-primary btn-lg float-right" >Next</button>
				</div>
			</div>
		);
	}
}

export default TestjQuery