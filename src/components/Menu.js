import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default  class Menu extends Component {
    render() {
        return (
            <div className='background menu'>
                <fieldset id='fieldset'>
                    <div id='menuItem'>
                        <h1>Назва гри</h1>
                        <Link to="/game" className="links">
                            <b>почати гру</b><i className="fa fa-angle-right" aria-hidden="true"/>
                        </Link>
                        <Link to="/settings" className="links">
                            <b>налаштування</b><i className="fa fa-angle-right" aria-hidden="true"/>
                        </Link>
                        <Link to="/exit" className="links">
                            <b>вихід</b><i className="fa fa-angle-right" aria-hidden="true"/>
                        </Link>
                    </div>
                </fieldset>
            </div>
        )
    }
}