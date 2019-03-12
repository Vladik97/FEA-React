import React from 'react'
import { Link } from 'react-router-dom';

// class Alltest extends Component{
// 	constructor(props){
// 		super(props)
// 			this.state={
				
// 			}
// 	}

// 	render() {
// 		const testElements = props.tests.map((test,key) => {
// 			const name = '/test/' + test.name;
// 			return <li key={key}>
// 					<div className="card mx-auto" style={{width: '70%'}}>
// 						<div className="card-header">
// 							<h1>
// 								{test.name}
// 								<button className="btn btn-primary btn-lg float-right"><Link className="a" to={name}>Start</Link></button>	
// 							</h1>
// 						</div>
// 					</div>
// 				</li>
// 		});

// 		return (
// 			<div>
// 				<ul>
// 					{testElements}
// 				</ul>  
// 			</div>
// 		);
// 	}
// }

// export default Alltest

export default function Alltest(props) {
	console.log(props)
	
	const testElements = props.tests.map((test,key) => {
		const name = '/test/' + test.name;
		return <li key={key}>
				<div className="card mx-auto" style={{width: '70%'}}>
					<div className="card-header">
						<h1>
							{test.name}
							<button className="btn btn-primary btn-lg float-right"><Link className="a" to={name}>Start</Link></button>	
						</h1>
					</div>
				</div>
			</li>
	});
	return (
		<div>
			<ul>
				{testElements}
			</ul>  
		</div>
		
	)
}


