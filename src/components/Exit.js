import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default  class Exit extends Component {
    render() {
        return (
            <div className='background menu'>
                <h1 className='hm1'>Ви дійсно бажаєте вийти?</h1>
                <div className='answerExit'>
                    <hr/>
                    <h1><i>Так</i></h1>
                    <hr/>
                    <Link to="/" className='answerExit'>
                        <h1><i>Ні</i></h1>
                    </Link>
                    <hr/>
                </div>
            </div>
        )
    }
}