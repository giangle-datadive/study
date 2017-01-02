let AppActions = require('../actions/AppActions');

module.exports = {
    view(data) {
        $.ajax({
            url: '/react/boi-result',
            type: 'post',
            data: data,
            dataType: 'json',
            success: function (response) {
                AppActions.updateResult(response.data);
            },
            error: function (xhr, status, err) {
                console.log(err);
                return null;
            }
        })
    }
};