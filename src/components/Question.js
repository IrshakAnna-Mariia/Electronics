import React, {Component} from 'react'

export default  class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightAnswer: this.props.value.numberOfRightAnswer - 1
        }
    }

    onSubmitAnswer = (e) => {
        e.preventDefault();

        const {rightAnswer} = this.state;
        this.props.onSubmit(e.target.elements.answer[rightAnswer].checked)
    }

    render() {
        const {value} = this.props;
        return (
            <form onSubmit={this.onSubmitAnswer}>
                <p><b>{value.question}</b></p>
                {value.answer.map((valueCell, index) => {
                    return <div key={index}>
                        <input type='radio' name='answer' value={'a' + (index+1)}/>{valueCell}<br/>
                    </div>
                })}
                <input type='submit' value='Відповісти'/>
            </form>
        )
    }
}