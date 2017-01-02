class MovieItem extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <div className="media">
                    <a href="#" className="media-left">
                        <img src={this.props.movie.Poster} alt="" className="media-object"/>
                    </a>
                    <div className="media-body">
                        <h4>{this.props.movie.Title}</h4>
                    </div>
                </div>
            </li>
        );
    }
}

module.exports = MovieItem;