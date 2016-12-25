class ScoreBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    Score : {this.props.score}
                </div>
            </div>
        );
    }
}

export default ScoreBox;