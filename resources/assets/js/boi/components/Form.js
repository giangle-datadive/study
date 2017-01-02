let AppActions = require('../actions/AppActions');

let Form = React.createClass({

    getYearRange() {
        let yearRange = [];
        for (let i = 1780; i < 2016; i++) {
            yearRange.push(i);
        }

        return yearRange;
    },

    getMonthRange() {
        let monthRange = [];
        for (let i = 1; i < 13; i++) {
            monthRange.push(i);
        }

        return monthRange;
    },

    getHourRange() {
        let hourRange = [];
        for (let i = 1; i < 25; i++) {
            hourRange.push(i);
        }

        return hourRange;
    },

    getMinuteRange() {
        let minuteRange = [];
        for (let i = 1; i < 61; i++) {
            minuteRange.push(i);
        }

        return minuteRange;
    },

    getDayRange() {
        let dayRange = [];
        for (let i = 1; i < 32; i++) {
            dayRange.push(i);
        }

        return dayRange;
    },

    viewForFriend(event) {
        event.preventDefault();
        let name = this.refs.name.value;
        if (name == '') {
            this.setState({
                hasError: true,
            });
        }
    },

    hideForm(event) {
        event.preventDefault();
        AppActions.hideForm();
    },

    onSubmit(event) {
        event.preventDefault();
        let data = {
            name: this.refs.name.value,
            gender: this.refs.gender.value,
            hour: this.refs.hour.value,
            minute: this.refs.minute.value,
            day: this.refs.day.value,
            month: this.refs.month.value,
            year: this.refs.year.value,
        };
        AppActions.view(data);
    },

    render() {
        let errorClass = '';
        let errorMessage = '';
        // if (this.state.hasError) {
        //     errorClass = 'has-danger ';
        //     errorMessage = 'Error';
        // }

        return (
            <div>
                <h6>Vui lòng nhập thông tin cá nhân</h6>
                <form method="post" onSubmit={this.onSubmit} ref="form" className="row">
                    <div className={errorClass + "form-group col-sm-6"}>
                        <label htmlFor="name">Name</label>
                        <input type="text" ref="name" className="form-control"/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" ref="gender" className="form-control">
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="day">Hour</label>
                        <select name="hour" ref="hour" className="form-control">
                            {this.getHourRange().map((hour) => {
                                return (
                                    <option key={hour} value={hour}>{hour}</option>
                                );
                            })}

                        </select>
                    </div>

                    <div className="form-group col-sm-4">
                        <label htmlFor="day">Minute</label>
                        <select name="day" ref="minute" className="form-control">
                            {this.getMinuteRange().map((minute) => {
                                return (
                                    <option key={minute} value={minute}>{minute}</option>
                                );
                            })}

                        </select>
                    </div>

                    <div className="clearfix"></div>

                    <div className="form-group col-sm-4">
                        <label htmlFor="day">Day</label>
                        <select ref="day" name="day" className="form-control">
                            {this.getDayRange().map((day) => {
                                return (
                                    <option key={day} value={day}>{day}</option>
                                );
                            })}

                        </select>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="month">Month</label>
                        <select ref="month" name="month" className="form-control">
                            {this.getMonthRange().map((month) => {
                                return (
                                    <option key={month} value={month}>{month}</option>
                                )
                            })}

                        </select>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="year">Year</label>
                        <select ref="year" name="year" className="form-control">
                            {this.getYearRange().map((year) => {
                                return (
                                    <option key={year} value={year}>{year}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form-group col-sm-12">
                        <button type="submit" className="btn btn-success">View</button>
                        <button onClick={this.hideForm} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Form;