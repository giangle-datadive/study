import Info from "./Info";
class App extends React.Component {
    constructor() {
        this.state = {
            result: '',
        }
    }

    componentDidMount() {

    }

    viewForSelf() {

    }

    viewForFriend(){
        let html = (
            <div>

            </div>
        )
    }

    render() {
        let content;
        if(this.state.result) {
            content = this.state.result;
        }else{
            content = <Info/>;
        }
        return (
            <div className="row">
                {content}
            </div>
        )
    }
}

export default App;