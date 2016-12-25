import QuestionList from "./QuestionList";
import ScoreBox from "./ScoreBox";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name',
                    choices: [
                        {
                            id: 'a',
                            text: 'Haley'
                        },
                        {
                            id: 'b',
                            text: 'Quinn'
                        },
                        {
                            id: 'c',
                            text: 'Barbara'
                        },
                    ],
                    correct: 'b'
                },
                {
                    id: 2,
                    text: 'What is your mother\'s name',
                    choices: [
                        {
                            id: 'a',
                            text: 'Jane'
                        },
                        {
                            id: 'b',
                            text: 'Mary'
                        },
                        {
                            id: 'c',
                            text: 'Watson'
                        },
                    ],
                    correct: 'c'
                },
                {
                    id: 3,
                    text: 'What is your GF name',
                    choices: [
                        {
                            id: 'a',
                            text: 'Jennifer'
                        },
                        {
                            id: 'b',
                            text: 'Lawrence'
                        },
                        {
                            id: 'c',
                            text: 'Barbara'
                        },
                    ],
                    correct: 'a'
                },
                {
                    id: 4,
                    text: 'What is your name',
                    choices: [
                        {
                            id: 'a',
                            text: 'Haley'
                        },
                        {
                            id: 'b',
                            text: 'Quinn'
                        },
                        {
                            id: 'c',
                            text: 'Barbara'
                        },
                    ],
                    correct: 'b'
                }
            ],
            score: 0,
            current: 1
        }
    }

    updateScore(score) {
        this.setState({score});
    }

    updateCurrent(current) {
        this.setState({current});
    }

    render() {
        return (
            <div>
                <ScoreBox score={this.state.score}/>
                <QuestionList data={this.state}
                              updateScore={this.updateScore.bind(this)}
                              updateCurrent={this.updateCurrent.bind(this)}/>
            </div>
        );
    }
}

export default App;