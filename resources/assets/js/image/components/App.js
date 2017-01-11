let App = React.createClass({

    getInitialState(){
        return {
            text: '',
            textX: 0,
            textY: 40,
        }
    },

    handleChange(event) {
        event.preventDefault();
        let src = URL.createObjectURL(event.target.files[0]);
        let canvas = document.getElementById('viewport');
        let context = canvas.getContext('2d');
        let baseImage = new Image();
        baseImage.src = src;
        baseImage.onload = function(){
            context.drawImage(baseImage, 0, 0);
        };
    },

    textChange(event) {
        event.preventDefault();
        let text = event.target.value;
        let canvas = document.getElementById('viewport');
        let context = canvas.getContext('2d');
        context.font = "60px Arial";
        context.fillStyle = '#ffffff';
        context.fillText(text, this.state.textX, this.state.textY, 1024);
    },

    render(){
        let result = '';
        if(this.state.src) result = <Image src={this.state.src}/>;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Tên</label>
                                <input className="form-control" name="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Tên</label>
                                <textarea onChange={this.textChange} defaultValue="TextArea" className="form-control" name="name"></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Positsion</label>
                                <input className="form-control" name="name"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Positsion</label>
                                <input onChange={this.handleChange} type="file" className="form-control" name="name"/>
                            </div>
                        </form>
                        <canvas width="960" height="600" id="viewport"></canvas>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;