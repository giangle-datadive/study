import Form from "./Form";
class Info extends React.Component {
    constructor() {
        super();
        this.state = {
            showForm: false,
        }
    }

    showForm(event) {
        event.preventDefault();
        this.setState({
            showForm: true,
        });
    }

    hideForm(event) {
        event.preventDefault();
        this.setState({
            showForm: false,
        });
    }

    render() {
        let form = '';
        if (this.state.showForm) {
            form = <Form hideForm={this.hideForm.bind(this)}/>;
        }
        return (
            <div className="col-md-8">
                <div className="col-md-6">
                    <img className="img-fluid"
                         src="http://boivansu.com/images/cover_images/dieu-gi-lam-nen-thanh-cong-cua-ban_cover_image.png"/>
                </div>
                <div className="col-md-6">
                    Đằng sau thành công hay thất bại của mỗi người đều có những nguyên nhân sâu xa. Vậy đâu là yếu tố xuyên
                    suốt
                    làm nên thành công trong cuộc đời của bạn?
                    <div>
                        <button className="btn btn-success">Xem</button>
                        <button onClick={this.showForm.bind(this)} className="btn btn-secondary">Xem cho bạn</button>
                    </div>
                    <div>
                        {form}
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;