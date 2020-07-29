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
          window.replainSettings = { id: '3402f188-a0cd-4d92-af28-024956fdc368' };
          (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=u;
          var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
          })('https://widget.replain.cc/dist/client.js');
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
