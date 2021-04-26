import React, {Component} from 'react'
import Astronaut from './game-component/austronaut'

export default  class Game extends Component {
    componentDidMount() {
        //document.body.style.background = 'black'
    }

    render() {
        return (
            <div id='game'>
                <Astronaut/>
            </div>
        )
    }
}