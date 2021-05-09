import React, {Component} from 'react'
import Astronaut from './game-component/austronaut'
import Tooltip from '@material-ui/core/Tooltip'
import Lecture from "./game-component/lecture";

export default  class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipIsOpen: false,
            visibleFrame: false,
            xSquare: 0,
            ySquare: 0
        }
    }

    componentDidMount() {
        const elem = document.getElementById('square')
        const xSq = elem.getBoundingClientRect().left;
        const ySq = elem.getBoundingClientRect().top;
        this.setState({xSquare: xSq});
        this.setState({ySquare: ySq});
    }

    setTooltipIsOpen = (booleanValue) => {
        this.setState({tooltipIsOpen: booleanValue});
    }

    setCoordinatesAstronaut = (x, y, openFrame) => {
        const {xSquare, ySquare} = this.state
        if (x >= (xSquare - 100) && x <= (xSquare + 100)
            && y >= (ySquare - 100) && y <= (ySquare + 100)) {
            this.setTooltipIsOpen(true)
            if (openFrame) {
                this.setTooltipIsOpen(false)
                this.setState({visibleFrame: true});
            }
        } else this.setTooltipIsOpen(false)
    }

    render() {
        const {visibleFrame, tooltipIsOpen} = this.state;
        return (
            <div className='background game'>
                <Astronaut onSetCoordinate={this.setCoordinatesAstronaut}/>
                <Tooltip
                    open={tooltipIsOpen}
                    onOpen={() => {this.setTooltipIsOpen(true)}}
                    onClose={() => {this.setTooltipIsOpen(false)}}
                    title={'Отримати підказку, натисніть \'E\''}
                >
                    <div id='square'/>
                </Tooltip>
                {visibleFrame ? <Lecture/> : ""}
            </div>
        )
    }
}