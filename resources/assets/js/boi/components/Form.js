class Form extends React.Component {
    constructor() {
        this.state  = {
            hasError: false,
        }
    }

    viewForFriend(event) {
        event.preventDefault();
        let name = this.refs.name.value;
        if(name == '') {
            this.setState({
                hasError: true,
            });
        }
    }

    render() {
        let errorClass = '';
        let errorMessage = '';
        if(this.state.hasError){
            errorClass = 'has-danger ';
            errorMessage = 'Error';
        }

        return (
            <div>
                <h6>Vui lòng nhập thông tin cá nhân</h6>
                <form className="row">
                    <div className={errorClass + "form-group col-sm-6"}>
                        <label htmlFor="name">Name</label>
                        <input type="text" ref="name" name="name" className="form-control"/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="day">Day</label>
                        <select name="day" className="form-control">
                            <option>Day</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="day">Month</label>
                        <select name="month" className="form-control">
                            <option>Day</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="day">Year</label>
                        <select name="month" className="form-control">
                            <option>Day</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-12">
                        <button onClick={this.viewForFriend.bind(this)} className="btn btn-success">View</button>
                        <button onClick={this.props.hideForm} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

Form.setDefaultProps = {
    hideForm: () => {
    },
};

export default Form;