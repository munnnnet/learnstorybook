// File contents copied from Gatsby's cache in order to add a link tag for the font
// Docs: https://www.gatsbyjs.org/docs/custom-html/
import React from 'react';
import PropTypes from 'prop-types';
import { global } from '@storybook/design-system';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
        <link href={global.fontUrl} rel="stylesheet" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}

        <script dangerouslySetInnerHTML= {{ __html: ` 
          var _smartsupp = _smartsupp || {};
          _smartsupp.key = '2074beefd3bd8750a9805f1bb75ddfd0229f6326';
          window.smartsupp||(function(d) {
            var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
            s=d.getElementsByTagName('script')[0];c=d.createElement('script');
            c.type='text/javascript';c.charset='utf-8';c.async=true;
            c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
          })(document);
         `}} />`

        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
        <script dangerouslySetInnerHTML= {{ __html: ` 
          Paddle.Setup({ vendor: 116821 });
         `}} />`

      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
