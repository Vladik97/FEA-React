import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class Headerbtn extends Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return (
            <div className="btnmenu">
                <button className="btn btn-primary btnsmenu"><Link className="a" to='/'>Home</Link></button>
                <button className="btn btn-primary btnsmenu"><Link className="a" to='/test'>Tests</Link></button>
                <button className="btn btn-primary btnsmenu"><Link className="a" to='/history'>History</Link></button>
                <button className="btn btn-primary btnsmenu"><Link className="a" to='/setting'>Settings</Link></button>
            </div>
        );
    }
}

export default Headerbtn