import React, {Component} from 'react'
import {testsList} from '../store/testsList'
import Question from "./Question";
import {Link} from "react-router-dom";

export default  class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayQuestion: 0,
            countRightAnswer: 0
        }
    }

    onSubmitAnswer = (rightAnswer) => {
        if (rightAnswer) {
            this.setState(({countRightAnswer}) => {return {countRightAnswer: countRightAnswer+1}})
        }
        this.setState(({displayQuestion}) => {return {displayQuestion: displayQuestion+1}})
    }

    render() {
        if (this.state.displayQuestion < testsList.test1.length) return (
            <Question
                value={testsList.test1[this.state.displayQuestion]}
                onSubmit={this.onSubmitAnswer}
            />
        )
        else return (
            <div>
                <p>It is all. Your result {this.state.countRightAnswer + '/' + testsList.test1.length}</p>
                <Link to="/game">
                    <h1>Перейти до гри</h1>
                </Link>
            </div>
        )
    }
}