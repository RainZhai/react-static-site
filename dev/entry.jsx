var React = require('react'),
  Router = require('react-router'),
  Routes = require('../elements/Routes.jsx');

require('../elements/blueprint/screen.css');
require('../elements/rain.css');

Router.run(Routes, Router.HistoryLocation,  function (Handler) {
  React.render(React.createElement(Handler, null), document);
});

