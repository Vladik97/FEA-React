import React, {Component} from 'react'

import Headerlogo from './Headerlogo.js'
import Headerbtn from './Headerbtn.js'
import Headerform from './Headerform.js'

import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    // constructor(props){
    //     super(props)

    // }

    render(){
        return (
            <div className="header">
                <Headerlogo />
                <Headerbtn />
                <Headerform />
            </div>
        );
    }
}

export default Header
