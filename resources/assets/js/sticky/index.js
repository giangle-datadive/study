let App = require('./components/App');
let Api = require('./utils/Api');

Api.getNotes();
ReactDOM.render(
    <App/>,
    document.getElementById('main')
);