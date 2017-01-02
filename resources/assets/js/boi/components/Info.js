let AppActions = require('../actions/AppActions');
let Form = require('./Form');

let Info = React.createClass({

    showForm(event) {
        event.preventDefault();
        AppActions.showForm();
    },

    viewYourSelf() {
        
    },

    render() {
        let form = '';
        if(this.props.showForm === true) {
            form = <Form showForm={this.props.showForm}/>;
        }

        let btnGroup = (
            <div>
                <button onClick={this.viewYourSelf} className="btn btn-success">Xem</button>
                <button onClick={this.showForm} className="btn btn-secondary">Xem cho bạn</button>
            </div>
        );

        if(this.props.showBtnGroup === false) btnGroup = '';

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

                    {btnGroup}
                    <div>
                        {form}
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Info;