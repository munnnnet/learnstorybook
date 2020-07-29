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

        <div key="body" id="comm100-button-0e5a654b-38bf-4f26-b8cf-73ca080596c6" dangerouslySetInnerHTML={{ __html: props.body }}/>
        <script type="text/javascript">
          var Comm100API=Comm100API||{};(function(t){function e(e){var a=document.createElement("script"),c=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=e+t.site_id,c.parentNode.insertBefore(a,c)}t.chat_buttons=t.chat_buttons||[],t.chat_buttons.push({code_plan:"0e5a654b-38bf-4f26-b8cf-73ca080596c6",div_id:"comm100-button-0e5a654b-38bf-4f26-b8cf-73ca080596c6"}),t.site_id=40000072,t.main_code_plan="0e5a654b-38bf-4f26-b8cf-73ca080596c6",e("https://vue.comm100.com/livechat.ashx?siteId="),setTimeout(function(){t.loaded||e("https://standby.comm100vue.com/livechat.ashx?siteId=")},5e3)})(Comm100API||{})
        </script>
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
