import React, {Component} from 'react'

export default  class Astronaut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            maxX: 0,
            maxY: 0,
            currentImg: 0,
            transform: false
        }
    }
    componentDidMount() {
        const xMax = document.body.clientWidth;
        const yMax = window.innerHeight;
        this.setState({maxX: xMax * 0.92});
        this.setState({maxY: yMax * 0.8});
        document.addEventListener('keydown', this.onMotion);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onMotion)
    }

    defMoving = (blTransform) => {
        this.setState(({currentImg}) => {
            return {
                currentImg: currentImg+1
            }
        })
        if (this.state.currentImg > 3) this.setState({currentImg: 1});
        this.setState({transform: blTransform});
    }

    onMotion = (e) => {
        if (e.key === 'd' || e.key === 'ArrowRight')
            if (this.state.x < this.state.maxX) {
                this.setState(({x}) => {
                    return {
                        x: (x++) + 10
                    }
                })
                this.defMoving(false);
            }

        if (e.key === 'a' || e.key === 'ArrowLeft')
            if (this.state.x > 0) {
                this.setState(({x}) => {
                    return {
                        x: (x--) - 10
                    }
                })
                this.defMoving(true);
            }

        if (e.key === 'w' || e.key === 'ArrowUp')
            if (this.state.y > 0) {
                this.setState(({y}) => {
                    return {
                        y: (y--) - 10
                    }
                })
            }

        if (e.key === 's' || e.key === 'ArrowDown')
            if (this.state.y < this.state.maxY) {
                this.setState(({y}) => {
                    return {
                        y: (y++) + 10
                    }
                })
            }

        if (e.key === 'e') this.props.onSetCoordinate(this.state.x, this.state.y, true)
        this.props.onSetCoordinate(this.state.x, this.state.y, false)
    }

    render() {
        return (
            <div className={this.state.transform ? 'astronaut' + this.state.currentImg + ' transform' : 'astronaut' + this.state.currentImg}
                 style={{
                     left: this.state.x + 'px',
                     top: this.state.y + 'px'
                 }}
            />
        )
    }
}