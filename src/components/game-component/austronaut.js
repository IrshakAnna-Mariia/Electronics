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
            transform: false,
            slower: 1
        }
    }
    componentDidMount() {
        const xMax = document.body.clientWidth;
        const yMax = window.innerHeight;
        this.setState({maxX: xMax * 0.92});
        this.setState({maxY: yMax * 0.8});
        document.addEventListener('keydown', this.onMotion);
        document.addEventListener('keyup', () => {this.setState({currentImg: 0});})
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onMotion)
        document.removeEventListener('keyup', () => {this.setState({currentImg: 0});})
    }

    defMovingHorizontally = (blTransform) => {
        if (this.state.slower === 1 && this.state.currentImg !== 0) return this.setState({slower: 2});
        this.setState(({currentImg}) => {return {currentImg: currentImg+1}})
        if (this.state.currentImg > 3) this.setState({currentImg: 1});
        this.setState({transform: blTransform, slower: 1});
    }

    defMovingVertically = (direction) => {
        if (this.state.slower === 1 && this.state.currentImg !== 0) return this.setState({slower: 2});;
        switch (direction) {
            case 'down':
                if (this.state.currentImg !== 4) this.setState({currentImg: 4});
                else this.setState({currentImg: 5});
                this.setState({slower: 1});
                break;
            case 'up':
                if (this.state.currentImg !== 6) this.setState({currentImg: 6});
                else this.setState({currentImg: 7});
                this.setState({slower: 1});
                break;
        }
    }

    onMotion = (e) => {
        if (e.keyCode === 68 || e.key === 'ArrowRight')
            if (this.state.x < this.state.maxX) {
                this.setState(({x}) => {return {x: (x++) + 5}})
                this.defMovingHorizontally(false);
            }

        if (e.keyCode === 65 || e.key === 'ArrowLeft')
            if (this.state.x > 0) {
                this.setState(({x}) => {return {x: (x--) - 5}})
                this.defMovingHorizontally(true);
            }

        if (e.keyCode === 87 || e.key === 'ArrowUp')
            if (this.state.y > 0) {
                this.setState(({y}) => {return {y: (y--) - 5}})
                this.defMovingVertically("up");
            }

        if (e.keyCode === 83 || e.key === 'ArrowDown')
            if (this.state.y < this.state.maxY) {
                this.setState(({y}) => {return {y: (y++) + 5}})
                this.defMovingVertically("down");
            }

        if (e.keyCode === 69) this.props.onSetCoordinate(this.state.x, this.state.y, true)
        else this.props.onSetCoordinate(this.state.x, this.state.y, false)
        if (e.key === 'Escape') this.props.onSetCoordinate(this.state.x, this.state.y, false)
    }

    render() {
        return (
            <div className={this.state.transform ? 'astronaut anim' + this.state.currentImg + ' transform' : 'astronaut anim' + this.state.currentImg}
                 style={{
                     left: this.state.x + 'px',
                     top: this.state.y + 'px'
                 }}
            />
        )
    }
}
