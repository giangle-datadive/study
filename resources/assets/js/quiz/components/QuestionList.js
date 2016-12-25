import Question from "./Question";

class QuestionList extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                {data.questions.map(question => {
                    if (data.current === question.id) {
                        return <Question question={question}
                                         key={question.id}
                                         updateCurrent={this.props.updateCurrent}
                                         updateScore={this.props.updateScore}
                                         score={data.score}
                                         current={data.current}/>
                    }
                })}
            </div>
        );
    }
}

export default QuestionList;