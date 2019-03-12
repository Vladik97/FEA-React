import React, {Component} from 'react'

 
class TestJS extends Component {
	constructor(props) {
		super(props);
			this.state = {
				count: 0
			}
			this.add=this.add.bind(this)
			this.dcc=this.dcc.bind(this)
			console.log(props)
	}
	add(){
		//return console.log(this.state.count - 1)
		return this.setState({count: count + 1})
	}
	dcc(){
		//return console.log(this.state.count + 1)
		return this.setState({count: count - 1})
	}

	render() {
		const { count } = this.state;
		
		const testAnswers = this.props.testJS.questions.map((test,key) => {
			console.log(test)

			return (
				<div key={key}>
					<h2>{test.question}</h2>
				</div>
			)	
		});
		const testElements = this.props.testJS.questions.map((test,key) => {
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
						{this.props.testJS.name}
					</h1>
					{testAnswers[{ count }]}
					{testElements[{ count }]}
						<button className="btn btn-primary btn-lg" onClick={this.dcc}>Back</button>
						<button className="btn btn-primary btn-lg float-right" onClick={this.add} >Next</button>
				</div>
			</div>
		);
	}
}


export default TestJS

