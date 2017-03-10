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


// The output of renderVDOM might look something like this
var potentialOutput = {
  elementType: 'html',
  props: null,
  children: [
    {
      elementType: 'head',
      props: null,
      children: [
        {
          elementType: 'link',
          props: {
            href: '../static/style.css',
            rel: 'stylesheet'
          }
        }
      ]
    },
    {
      elementType: 'body',
      props: null,
      children: [
        {
          elementType: 'section',
          props: {
            id: 'root'
          },
          children: [
            {
              elementType: 'div',
              props: {
                className: 'my-div'
              },
              children: [
                {
                  elementType: 'span',
                  props: null,
                  children: [
                    'With\xA0'
                  ]
                },
                {
                  elementType: 'span',
                  props: null,
                  children: [
                    'some\xA0'
                  ]
                },
                {
                  elementType: 'span',
                  props: null,
                  children: [
                    'spans.'
                  ]
                }
              ]
            },
            {
              elementType: 'div',
              props: null,
              children: [
                'Another div'
              ]
            }
          ]
        }
      ]
    }
  ]
};
