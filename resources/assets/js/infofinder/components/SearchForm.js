let SearchFom = React.createClass({
    onSubmit(event) {
        event.preventDefault();
    },

    render() {
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" ref="keyword" className="form-control"/>
                        </div>
                        <div className="form-group text-md-center">
                            <button className="btn btn-info" type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = SearchFom;