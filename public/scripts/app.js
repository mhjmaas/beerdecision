'use strict';

console.log('App.js is running!');

var appRoot = document.getElementById('app');

var app = {
    title: 'Beerdecision app',
    subtitle: 'Dont decide, just drink beer',
    options: ['La Chouffe Soleil', 'Affliggem Tripel', 'Delerium Tremens']
};

var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    console.log(option);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert('Have a ' + option + '!');
};

var renderApp = function renderApp() {
    // JSX - Javascript XML
    var template = React.createElement(
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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'Which beer to drink?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Here are your beers:' : 'No beers :('
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
