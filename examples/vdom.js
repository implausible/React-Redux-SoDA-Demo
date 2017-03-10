var renderVDOM = function renderVDOM() {
  return React.createElement(
    'html',
    null,
    React.createElement(
      'head',
      null,
      React.createElement('link', { href: '../static/style.css', rel: 'stylesheet' })
    ),
    React.createElement(
      'body',
      null,
      React.createElement(
        'section',
        { id: 'root' },
        React.createElement(
          'div',
          { className: 'my-div' },
          React.createElement(
            'span',
            null,
            'With\xA0'
          ),
          React.createElement(
            'span',
            null,
            'some\xA0'
          ),
          React.createElement(
            'span',
            null,
            'spans.'
          )
        ),
        React.createElement(
          'div',
          null,
          'Another div'
        )
      )
    )
  );
};
