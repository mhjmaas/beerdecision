'use strict';

console.log('App.js is running!');

var app = {
    title: 'Beerdecision app',
    subtitle: 'Dont decide, just drink beer',
    options: ['One', 'Two']

    // JSX - Javascript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your beers' : 'No beers :('
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Beer one'
        ),
        React.createElement(
            'li',
            null,
            'Beer two'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
