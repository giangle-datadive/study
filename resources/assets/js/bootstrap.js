window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
require('bootstrap');
window.http = require('axios');
window.http.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Security.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
};