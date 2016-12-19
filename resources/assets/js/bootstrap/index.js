class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            name: null,
        }
    }

    render() {
        return (
            <div className="masthead clearfix">
                <div className="inner">
                    <h3 className="masthead-brand">Cover</h3>
                    <nav className="nav nav-masthead">
                        <a name="home" onClick={this.handleClick.bind(this)}
                           className={this.state.name == 'home' ? 'nav-link active' : 'nav-link'} href="#">Home</a>
                        <a name="feature" onClick={this.handleClick.bind(this)}
                           className={this.state.name == 'feature' ? 'nav-link active' : 'nav-link'} href="#">Features</a>
                        <a name="contact" onClick={this.handleClick.bind(this)}
                           className={this.state.name == 'contact' ? 'nav-link active' : 'nav-link'} href="#">Contact</a>
                    </nav>
                </div>
            </div>
        );
    }

    handleClick(event) {
        event.preventDefault();
        let name = event.target.getAttribute('name');
        this.setState({
            name: name
        });
    }
}

class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            title: 'home'
        }
    }

    render() {
        return (
            <div className="inner cover">
                <h1 className="cover-heading">{this.state.title}</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the
                    text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                    <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                </p>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="mastfoot">
                <div className="inner">
                    <p>Cover template for <a href="https://getbootstrap.com">Bootstrap</a>, by <a
                        href="https://twitter.com/mdo">@mdo</a>.</p>
                </div>
            </div>
        );
    }
}

class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="site-wrapper-inner">
                <div className="cover-container">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

Main.defaultProps = {
    changeTitle: () => {

    }
};

ReactDOM.render(
    <Main/>,
    document.getElementById('main')
);