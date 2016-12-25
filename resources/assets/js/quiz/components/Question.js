class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(event) {
        event.preventDefault();
        const {updateCurrent, updateScore, question} = this.props;

        let selected = event.target.value;
        if (selected == question.correct) {
            updateScore(this.props.score + 1);
        }

        updateCurrent(this.props.current + 1);
    }

    render() {
        const {question} = this.props;
        return (
            <div className="card">
                <div className="card-header">
                    <h3>{question.text}</h3>
                </div>
                <div className="card-block">
                    <div className="custom-controls-stacked">
                        {question.choices.map(choice => {
                            return (
                                <label key={choice.id} className="custom-control custom-radio">
                                    <input key={choice.id} onChange={this.onChange.bind(this)} name={question.id} type="radio"
                                           value={choice.id} className="custom-control-input"/>
                                    <span className="custom-control-indicator">
                                    </span>
                                    <span className="custom-control-description">{choice.text}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;