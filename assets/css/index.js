import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ART FACTORY

https://templatemo.com/tm-537-art-factory
  // ---------------------------------------------
Table of contents
---------------------------------------------
01. font & reset css
02. reset
03. global styles
04. header
05. welcome
06. features
07. team
08. pricing
09. blog
10. contact
11. footer
12. preloader

---------------------------------------------
  // ---------------------------------------------
font & reset css
---------------------------------------------
  import: 'url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900")',
  // ---------------------------------------------
reset
---------------------------------------------
  html: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  body: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  div: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  span: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  applet: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  object: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  iframe: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  h1: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  h2: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  h3: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  h4: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  h5: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  h6: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  'p': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  blockquote: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  'div pre': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  'a': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  abbr: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  acronym: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  address: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  big: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  cite: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  code: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  del: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  dfn: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  em: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  font: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  img: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  ins: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  kbd: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  'q': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  's': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  samp: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  small: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  strike: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  strong: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  sub: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  sup: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  tt: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  var: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  'b': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  'u': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  'i': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  center: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  dl: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  dt: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  dd: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  ol: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  ul: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  li: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  figure: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  header: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  nav: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  section: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  article: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  aside: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  footer: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  figcaption: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }],
    outline: '0',
    '<w991': {
      overflowX: 'hidden'
    }
  },
  'clearfix:after': {
    content: '"."',
    display: 'block',
    clear: 'both',
    visibility: 'hidden',
    lineHeight: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 0 }]
  },
  clearfix: {
    display: 'inline-block'
  },
  'html[xmlns] clearfix': {
    display: 'block'
  },
  '* html clearfix': {
    height: [{ unit: '%V', value: 0.01 }]
  },
  ul: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    listStyle: 'none'
  },
  li: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    listStyle: 'none'
  },
  header: {
    display: 'block'
  },
  nav: {
    display: 'block'
  },
  section: {
    display: 'block'
  },
  article: {
    display: 'block'
  },
  aside: {
    display: 'block'
  },
  footer: {
    display: 'block'
  },
  hgroup: {
    display: 'block'
  },
  '*': {
    boxSizing: 'border-box'
  },
  html: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: '400',
    backgroundColor: '#fff',
    fontSize: [{ unit: 'px', value: 16 }],
    MsTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  body: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: '400',
    backgroundColor: '#fff',
    fontSize: [{ unit: 'px', value: 16 }],
    MsTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  'a': {
    textDecoration: 'none !important'
  },
  h1: {
    marginTop: [{ unit: 'px', value: 0 }],
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  h2: {
    marginTop: [{ unit: 'px', value: 0 }],
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  h3: {
    marginTop: [{ unit: 'px', value: 0 }],
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  h4: {
    marginTop: [{ unit: 'px', value: 0 }],
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  h5: {
    marginTop: [{ unit: 'px', value: 0 }],
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  h6: {
    marginTop: [{ unit: 'px', value: 0 }],
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  ul: {
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'p': {
    fontSize: [{ unit: 'px', value: 15 }],
    lineHeight: [{ unit: 'px', value: 25 }],
    color: '#4a4a4a'
  },
  // ---------------------------------------------
global styles
---------------------------------------------
  html: {
    background: '#fff',
    fontFamily: '"Roboto", sans-serif'
  },
  body: {
    background: '#fff',
    fontFamily: '"Roboto", sans-serif'
  },
  '::selection': {
    background: '#ff589e',
    color: '#fff'
  },
  '::-moz-selection': {
    background: '#ff589e',
    color: '#fff'
  },
  'section-padding': {
    padding: [{ unit: 'em', value: 8 }, { unit: 'px', value: 0 }, { unit: 'em', value: 8 }, { unit: 'px', value: 0 }]
  },
  'section-padding-half': {
    padding: [{ unit: 'em', value: 4 }, { unit: 'px', value: 0 }, { unit: 'em', value: 4 }, { unit: 'px', value: 0 }]
  },
  'amain-button-slider': {
    fontSize: [{ unit: 'px', value: 13 }],
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 12 }, { unit: 'px', value: 20 }, { unit: 'px', value: 12 }, { unit: 'px', value: 20 }],
    backgroundColor: '#f55858',
    textTransform: 'uppercase',
    color: '#fff',
    letterSpacing: [{ unit: 'px', value: 0.25 }],
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s'
  },
  'amain-button-slider:hover': {
    backgroundColor: '#0088e8'
  },
  'amain-button': {
    fontSize: [{ unit: 'px', value: 13 }],
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 12 }, { unit: 'px', value: 20 }, { unit: 'px', value: 12 }, { unit: 'px', value: 20 }],
    backgroundColor: '#00b4c6',
    textTransform: 'uppercase',
    color: '#fff',
    letterSpacing: [{ unit: 'px', value: 0.25 }],
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s'
  },
  'amain-button:hover': {
    backgroundColor: '#0088e8'
  },
  'buttonmain-button': {
    outline: 'none',
    border: [{ unit: 'string', value: 'none' }],
    cursor: 'pointer',
    fontSize: [{ unit: 'px', value: 13 }],
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 20 }, { unit: 'px', value: 10 }, { unit: 'px', value: 20 }],
    backgroundColor: '#f55858',
    textTransform: 'uppercase',
    color: '#fff',
    letterSpacing: [{ unit: 'px', value: 0.25 }],
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s'
  },
  'buttonmain-button:hover': {
    backgroundColor: '#0088e8'
  },
  'section-heading h2': {
    textAlign: 'center',
    fontSize: [{ unit: 'px', value: 48 }],
    fontWeight: '300',
    color: '#232323',
    marginBottom: [{ unit: 'px', value: 20 }]
  },
  'section-heading p': {
    fontSize: [{ unit: 'px', value: 17 }],
    color: '#777',
    textAlign: 'center'
  },
  // ---------------------------------------------
header
---------------------------------------------
  'background-header': {
    backgroundColor: '#fff',
    height: [{ unit: 'px', value: 80 }, { unit: 'string', value: '!important' }],
    position: 'fixed !important',
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }],
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.15)' }, { unit: 'string', value: 'rgba(0, 0, 0, 0.15)' }, { unit: 'string', value: '!important' }]
  },
  'background-header logo': {
    color: '#1e1e1e !important'
  },
  'background-header main-nav nav li a': {
    color: '#1e1e1e !important'
  },
  'background-header main-nav nav > li:hover > a': {
    color: '#f55858 !important'
  },
  'background-header main-nav nav > li > ul > li:hover > a': {
    color: '#f55858 !important'
  },
  'background-header nav li aactive': {
    color: '#f55858 !important'
  },
  'header-area': {
    position: 'absolute',
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }],
    zIndex: '100',
    height: [{ unit: 'px', value: 100 }],
    WebkitTransition: 'all 0.5s ease 0s',
    MozTransition: 'all 0.5s ease 0s',
    OTransition: 'all 0.5s ease 0s',
    transition: 'all 0.5s ease 0s',
    '<w991': {
      padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }],
      height: [{ unit: 'px', value: 80 }],
      boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }],
      textAlign: 'center'
    }
  },
  'header-area main-nav': {
    minHeight: [{ unit: 'px', value: 80 }],
    background: 'transparent'
  },
  'header-area main-nav logo': {
    lineHeight: [{ unit: 'px', value: 80 }],
    color: '#fff',
    fontSize: [{ unit: 'px', value: 28 }],
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: [{ unit: 'px', value: 2 }],
    float: 'left',
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s'
  },
  'header-area main-nav nav': {
    float: 'right',
    marginTop: [{ unit: 'px', value: 27 }],
    marginLeft: [{ unit: 'px', value: 20 }],
    marginRight: [{ unit: 'px', value: 0 }],
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s',
    position: 'relative',
    zIndex: '999',
    '>w992': {
      display: 'flex !important'
    }
  },
  'header-area main-nav nav li': {
    paddingLeft: [{ unit: 'px', value: 20 }],
    paddingRight: [{ unit: 'px', value: 20 }],
    '<w1200': {
      paddingLeft: [{ unit: 'px', value: 12 }],
      paddingRight: [{ unit: 'px', value: 12 }]
    }
  },
  'header-area main-nav nav li:last-child': {
    paddingRight: [{ unit: 'px', value: 0 }]
  },
  'header-area main-nav nav li a': {
    display: 'block',
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 13 }],
    color: '#fff',
    textTransform: 'uppercase',
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s',
    height: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    border: [{ unit: 'string', value: 'transparent' }],
    letterSpacing: [{ unit: 'px', value: 1 }]
  },
  'header-area main-nav nav li:hover a': {
    color: '#f55858'
  },
  'header-area main-nav nav lisubmenu': {
    position: 'relative',
    paddingRight: [{ unit: 'px', value: 35 }]
  },
  'header-area main-nav nav lisubmenu:after': {
    fontFamily: 'FontAwesome',
    content: '"\f107"',
    fontSize: [{ unit: 'px', value: 12 }],
    color: '#fff',
    position: 'absolute',
    right: [{ unit: 'px', value: 18 }],
    top: [{ unit: 'px', value: 12 }]
  },
  'header-areabackground-header main-nav nav lisubmenu:after': {
    color: '#000'
  },
  'header-area main-nav nav lisubmenu ul': {
    position: 'absolute',
    width: [{ unit: 'px', value: 200 }],
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 2 }, { unit: 'px', value: 28 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.06)' }],
    overflow: 'hidden',
    top: [{ unit: 'px', value: 40 }],
    opacity: '0',
    transform: 'translateY(-2em)',
    visibility: 'hidden',
    zIndex: '-1',
    transition: 'all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
    z-index 0s linear 0.01s'
  },
  'header-area main-nav nav lisubmenu ul li': {
    marginLeft: [{ unit: 'px', value: 0 }],
    paddingLeft: [{ unit: 'px', value: 0 }],
    paddingRight: [{ unit: 'px', value: 0 }]
  },
  'header-area main-nav nav lisubmenu ul li a': {
    display: 'block',
    background: '#fff',
    color: '#3b566e',
    paddingLeft: [{ unit: 'px', value: 20 }],
    height: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s',
    position: 'relative',
    fontSize: [{ unit: 'px', value: 13 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#f5f5f5' }]
  },
  'header-area main-nav nav lisubmenu ul li a:before': {
    content: '""',
    position: 'absolute',
    width: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 40 }],
    left: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }],
    bottom: [{ unit: 'px', value: 0 }],
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s',
    background: '#f55858'
  },
  'header-area main-nav nav lisubmenu ul li a:hover': {
    background: '#fff',
    color: '#f55858',
    paddingLeft: [{ unit: 'px', value: 25 }]
  },
  'header-area main-nav nav lisubmenu ul li a:hover:before': {
    width: [{ unit: 'px', value: 3 }]
  },
  'header-area main-nav nav lisubmenu:hover ul': {
    visibility: 'visible',
    opacity: '1',
    zIndex: '1',
    transform: 'translateY(0%)',
    transitionDelay: '0s, 0s, 0.3s'
  },
  'header-area main-nav menu-trigger': {
    cursor: 'pointer',
    display: 'block',
    position: 'absolute',
    top: [{ unit: 'px', value: 23 }],
    width: [{ unit: 'px', value: 32 }],
    height: [{ unit: 'px', value: 40 }],
    textIndent: '-9999em',
    zIndex: '99',
    right: [{ unit: 'px', value: 40 }],
    display: 'none'
  },
  'header-area main-nav menu-trigger span': {
    MozTransition: 'all 0.4s',
    OTransition: 'all 0.4s',
    WebkitTransition: 'all 0.4s',
    transition: 'all 0.4s',
    backgroundColor: '#fff',
    display: 'block',
    position: 'absolute',
    width: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 2 }],
    left: [{ unit: 'px', value: 0 }]
  },
  'header-area main-nav menu-trigger span:before': {
    MozTransition: 'all 0.4s',
    OTransition: 'all 0.4s',
    WebkitTransition: 'all 0.4s',
    transition: 'all 0.4s',
    backgroundColor: '#fff',
    display: 'block',
    position: 'absolute',
    width: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 2 }],
    left: [{ unit: 'px', value: 0 }]
  },
  'header-area main-nav menu-trigger span:after': {
    MozTransition: 'all 0.4s',
    OTransition: 'all 0.4s',
    WebkitTransition: 'all 0.4s',
    transition: 'all 0.4s',
    backgroundColor: '#fff',
    display: 'block',
    position: 'absolute',
    width: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 2 }],
    left: [{ unit: 'px', value: 0 }]
  },
  'background-header main-nav menu-trigger span': {
    backgroundColor: '#1e1e1e'
  },
  'background-header main-nav menu-trigger span:before': {
    backgroundColor: '#1e1e1e'
  },
  'background-header main-nav menu-trigger span:after': {
    backgroundColor: '#1e1e1e'
  },
  'header-area main-nav menu-trigger span:before': {
    MozTransition: 'all 0.4s',
    OTransition: 'all 0.4s',
    WebkitTransition: 'all 0.4s',
    transition: 'all 0.4s',
    backgroundColor: '#fff',
    display: 'block',
    position: 'absolute',
    width: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 2 }],
    left: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 0.75 }]
  },
  'header-area main-nav menu-trigger span:after': {
    MozTransition: 'all 0.4s',
    OTransition: 'all 0.4s',
    WebkitTransition: 'all 0.4s',
    transition: 'all 0.4s',
    backgroundColor: '#fff',
    display: 'block',
    position: 'absolute',
    width: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 2 }],
    left: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 0.75 }]
  },
  'background-header main-nav menu-trigger span:before': {
    backgroundColor: '#1e1e1e'
  },
  'background-header main-nav menu-trigger span:after': {
    backgroundColor: '#1e1e1e'
  },
  'header-area main-nav menu-trigger span:before': {
    content: '""'
  },
  'header-area main-nav menu-trigger span:after': {
    content: '""'
  },
  'header-area main-nav menu-trigger span': {
    top: [{ unit: 'px', value: 16 }]
  },
  'header-area main-nav menu-trigger span:before': {
    MozTransformOrigin: '33% 100%',
    MsTransformOrigin: '33% 100%',
    WebkitTransformOrigin: '33% 100%',
    transformOrigin: '33% 100%',
    top: [{ unit: 'px', value: -10 }],
    zIndex: '10'
  },
  'header-area main-nav menu-trigger span:after': {
    MozTransformOrigin: '33% 0',
    MsTransformOrigin: '33% 0',
    WebkitTransformOrigin: '33% 0',
    transformOrigin: '33% 0',
    top: [{ unit: 'px', value: 10 }]
  },
  'header-area main-nav menu-triggeractive span': {
    backgroundColor: 'transparent',
    width: [{ unit: '%H', value: 1 }]
  },
  'header-area main-nav menu-triggeractive span:before': {
    backgroundColor: 'transparent',
    width: [{ unit: '%H', value: 1 }]
  },
  'header-area main-nav menu-triggeractive span:after': {
    backgroundColor: 'transparent',
    width: [{ unit: '%H', value: 1 }]
  },
  'header-area main-nav menu-triggeractive span:before': {
    MozTransform: 'translateY(6px) translateX(1px) rotate(45deg)',
    MsTransform: 'translateY(6px) translateX(1px) rotate(45deg)',
    WebkitTransform: 'translateY(6px) translateX(1px) rotate(45deg)',
    transform: 'translateY(6px) translateX(1px) rotate(45deg)',
    backgroundColor: '#fff'
  },
  'background-header main-nav menu-triggeractive span:before': {
    backgroundColor: '#1e1e1e'
  },
  'header-area main-nav menu-triggeractive span:after': {
    MozTransform: 'translateY(-6px) translateX(1px) rotate(-45deg)',
    MsTransform: 'translateY(-6px) translateX(1px) rotate(-45deg)',
    WebkitTransform: 'translateY(-6px) translateX(1px) rotate(-45deg)',
    transform: 'translateY(-6px) translateX(1px) rotate(-45deg)',
    backgroundColor: '#fff'
  },
  'background-header main-nav menu-triggeractive span:after': {
    backgroundColor: '#1e1e1e'
  },
  'header-areaheader-sticky': {
    minHeight: [{ unit: 'px', value: 80 }]
  },
  'header-areaheader-sticky nav': {
    marginTop: [{ unit: 'px', value: 20 }, { unit: 'string', value: '!important' }]
  },
  'header-areaheader-sticky nav li aactive': {
    color: '#f55858'
  },
  // ---------------------------------------------
welcome
---------------------------------------------
  '#welcome': {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7008a',
    // background-image: linear-gradient(145deg, #00b4c6 0%, #0088e8 100%);
    backgroundImage: 'url(../images/banner-bg.png)',
    backgroundRepeat: 'no-repeat',
    // TRY IT ... with or without CENTER CENTER
  background-position: center center;
    backgroundSize: 'cover',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'vh', value: 105 }],
    marginTop: [{ unit: 'vh', value: -10 }]
  },
  'welcome-area header-text': {
    position: 'absolute',
    top: [{ unit: '%V', value: 0.55 }],
    transform: 'translateY(-60%)',
    textAlign: 'left',
    width: [{ unit: '%H', value: 1 }],
    '<w991': {
      top: [{ unit: '%V', value: 0.55 }, { unit: 'string', value: '!important' }],
      transform: 'perspective(1px) translateY(-60%) !important'
    },
    '<w820': {
      top: [{ unit: '%V', value: 0.55 }, { unit: 'string', value: '!important' }],
      transform: 'perspective(1px) translateY(-60%) !important'
    },
    '<w765': {
      top: [{ unit: '%V', value: 0.55 }, { unit: 'string', value: '!important' }],
      transform: 'perspective(1px) translateY(-50%) !important',
      textAlign: 'center'
    }
  },
  'welcome-area header-text left-text': {
    alignSelf: 'center'
  },
  'welcome-area header-text h1': {
    fontWeight: '400',
    fontSize: [{ unit: 'px', value: 64 }],
    lineHeight: [{ unit: 'px', value: 80 }],
    letterSpacing: [{ unit: 'px', value: 1.4 }],
    marginBottom: [{ unit: 'px', value: 30 }],
    color: '#fff'
  },
  'welcome-area header-text p': {
    fontWeight: '300',
    fontSize: [{ unit: 'px', value: 17 }],
    color: '#fff',
    lineHeight: [{ unit: 'px', value: 30 }],
    letterSpacing: [{ unit: 'px', value: 0.25 }],
    marginBottom: [{ unit: 'px', value: 40 }],
    position: 'relative'
  },
  // ---------------------------------------------
about
---------------------------------------------
  '#about': {
    padding: [{ unit: 'px', value: 120 }, { unit: 'px', value: 0 }, { unit: 'px', value: 120 }, { unit: 'px', value: 0 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eee' }],
    '<w765': {
      padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 120 }, { unit: 'px', value: 0 }]
    }
  },
  '#about right-text': {
    alignSelf: 'center'
  },
  '#about right-text p': {
    marginBottom: [{ unit: 'px', value: 40 }]
  },
  '#about2': {
    padding: [{ unit: 'px', value: 120 }, { unit: 'px', value: 0 }, { unit: 'px', value: 120 }, { unit: 'px', value: 0 }]
  },
  '#about2 right-image': {
    alignSelf: 'center'
  },
  '#about h5': {
    fontSize: [{ unit: 'px', value: 26 }],
    fontWeight: '700',
    color: '#1e1e1e',
    lineHeight: [{ unit: 'px', value: 40 }],
    marginBottom: [{ unit: 'px', value: 25 }],
    letterSpacing: [{ unit: 'px', value: 0.5 }]
  },
  '#about2 h5': {
    fontSize: [{ unit: 'px', value: 26 }],
    fontWeight: '700',
    color: '#1e1e1e',
    lineHeight: [{ unit: 'px', value: 40 }],
    marginBottom: [{ unit: 'px', value: 25 }],
    letterSpacing: [{ unit: 'px', value: 0.5 }]
  },
  '#about p': {
    marginBottom: [{ unit: 'px', value: 30 }],
    fontSize: [{ unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 30 }],
    letterSpacing: [{ unit: 'px', value: 0.5 }]
  },
  '#about2 p': {
    marginBottom: [{ unit: 'px', value: 30 }],
    fontSize: [{ unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 30 }],
    letterSpacing: [{ unit: 'px', value: 0.5 }]
  },
  '#about2 ul li img': {
    display: 'inline',
    float: 'left'
  },
  '#about2 ul li text': {
    marginLeft: [{ unit: 'px', value: 80 }]
  },
  '#about2 ul li text h6': {
    paddingTop: [{ unit: 'px', value: 12 }],
    fontSize: [{ unit: 'px', value: 21 }],
    fontWeight: '500',
    color: '#1e1e1e',
    marginBottom: [{ unit: 'px', value: 20 }]
  },
  // ---------------------------------------------
services
---------------------------------------------
  '#services': {
    position: 'relative',
    padding: [{ unit: 'px', value: 120 }, { unit: 'px', value: 0 }, { unit: 'px', value: 90 }, { unit: 'px', value: 0 }],
    background: 'rgba(0, 136, 232, 1)',
    background: '-moz-linear-gradient(
    -45deg,
    rgba(0, 136, 232, 1) 0%,
    rgba(0, 182, 198, 1) 0%,
    rgba(0, 136, 232, 1) 100%
  )',
    background: '-webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, rgba(0, 136, 232, 1)),
    color-stop(0%, rgba(0, 182, 198, 1)),
    color-stop(100%, rgba(0, 136, 232, 1))
  )',
    background: '-webkit-linear-gradient(
    -45deg,
    rgba(0, 136, 232, 1) 0%,
    rgba(0, 182, 198, 1) 0%,
    rgba(0, 136, 232, 1) 100%
  )',
    background: '-o-linear-gradient(
    -45deg,
    rgba(0, 136, 232, 1) 0%,
    rgba(0, 182, 198, 1) 0%,
    rgba(0, 136, 232, 1) 100%
  )',
    background: '-ms-linear-gradient(
    -45deg,
    rgba(0, 136, 232, 1) 0%,
    rgba(0, 182, 198, 1) 0%,
    rgba(0, 136, 232, 1) 100%
  )',
    background: 'linear-gradient(
    135deg,
    rgba(0, 136, 232, 1) 0%,
    rgba(0, 182, 198, 1) 0%,
    rgba(0, 136, 232, 1) 100%
  )',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#0088e8', endColorstr='#0088e8', GradientType=1 )'
  },
  'service-item': {
    cursor: 'pointer',
    display: 'block',
    background: '#ffffff',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 2 }, { unit: 'px', value: 48 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.1)' }],
    padding: [{ unit: 'px', value: 40 }, { unit: 'px', value: 30 }, { unit: 'px', value: 40 }, { unit: 'px', value: 30 }],
    textAlign: 'center',
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s',
    position: 'relative',
    'screen&&<w920': {
      margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 30 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 30 }]
    }
  },
  'service-item:hover icon': {
    backgroundColor: '#0088e8'
  },
  'service-item:hover amain-button': {
    backgroundColor: '#0088e8'
  },
  'service-item icon': {
    textAlign: 'center',
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s',
    width: [{ unit: 'px', value: 100 }],
    height: [{ unit: 'px', value: 100 }],
    lineHeight: [{ unit: 'px', value: 100 }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    position: 'relative',
    marginBottom: [{ unit: 'px', value: 30 }],
    background: '#00b4c6',
    WebkitBorderRadius: '50%',
    MozBorderRadius: '50%',
    borderRadius: '50%',
    position: 'relative'
  },
  'service-item icon img': {
    maxWidth: [{ unit: 'px', value: 50 }],
    position: 'absolute',
    top: [{ unit: '%V', value: 0.5 }],
    left: [{ unit: '%H', value: 0.5 }],
    transform: 'translate(-50%, -50%)'
  },
  'service-item service-title': {
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 18 }],
    color: '#1e1e1e',
    letterSpacing: [{ unit: 'px', value: 0.7 }],
    marginBottom: [{ unit: 'px', value: 15 }],
    position: 'relative',
    zIndex: '2'
  },
  'service-item p': {
    fontWeight: '400',
    fontSize: [{ unit: 'px', value: 13 }],
    color: '#777',
    letterSpacing: [{ unit: 'px', value: 0.5 }],
    lineHeight: [{ unit: 'px', value: 25 }],
    position: 'relative',
    zIndex: '2'
  },
  'service-item amain-button': {
    marginTop: [{ unit: 'px', value: 30 }],
    display: 'inline-block'
  },
  'owl-carousel owl-dots': {
    marginTop: [{ unit: 'px', value: 60 }],
    textAlign: 'center',
    alignSelf: 'center'
  },
  'owl-carousel buttonowl-dot span': {
    borderRadius: '50%',
    backgroundColor: '#fff',
    width: [{ unit: 'px', value: 5 }],
    height: [{ unit: 'px', value: 5 }],
    display: 'inline-block',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }]
  },
  'owl-carousel buttonactive span': {
    width: [{ unit: 'px', value: 8 }],
    height: [{ unit: 'px', value: 8 }],
    paddingTop: [{ unit: 'px', value: 1.5 }]
  },
  'owl-carousel': {
    position: 'relative'
  },
  'owl-carousel owl-nav buttonowl-next span': {
    top: [{ unit: '%V', value: 0.32 }],
    borderRadius: '50%',
    fontSize: [{ unit: 'px', value: 36 }],
    color: '#fff',
    right: [{ unit: 'px', value: -80 }],
    width: [{ unit: 'px', value: 60 }],
    height: [{ unit: 'px', value: 60 }],
    lineHeight: [{ unit: 'px', value: 60 }],
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'rgba(250, 250, 250, 0.15)',
    position: 'absolute'
  },
  'owl-carousel owl-nav buttonowl-prev span': {
    top: [{ unit: '%V', value: 0.32 }],
    borderRadius: '50%',
    fontSize: [{ unit: 'px', value: 36 }],
    color: '#fff',
    left: [{ unit: 'px', value: -80 }],
    width: [{ unit: 'px', value: 60 }],
    height: [{ unit: 'px', value: 60 }],
    lineHeight: [{ unit: 'px', value: 60 }],
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'rgba(250, 250, 250, 0.15)',
    position: 'absolute'
  },
  // ---------------------------------------------
accordions
---------------------------------------------
  '#frequently-question': {
    padding: [{ unit: 'px', value: 120 }, { unit: 'px', value: 0 }, { unit: 'px', value: 120 }, { unit: 'px', value: 0 }]
  },
  '#frequently-question section-heading p': {
    marginBottom: [{ unit: 'px', value: 80 }]
  },
  '#frequently-question left-text': {
    alignSelf: 'center !important',
    '<w765': {
      marginBottom: [{ unit: 'px', value: 60 }]
    }
  },
  '#frequently-question left-text h5': {
    fontSize: [{ unit: 'px', value: 26 }],
    fontWeight: '700',
    color: '#1e1e1e',
    lineHeight: [{ unit: 'px', value: 40 }],
    marginBottom: [{ unit: 'px', value: 25 }],
    letterSpacing: [{ unit: 'px', value: 0.5 }]
  },
  '#frequently-question left-text p': {
    marginBottom: [{ unit: 'px', value: 30 }],
    fontSize: [{ unit: 'px', value: 16 }],
    lineHeight: [{ unit: 'px', value: 30 }],
    letterSpacing: [{ unit: 'px', value: 0.5 }]
  },
  '#frequently-question left-text span': {
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#4a4a4a',
    marginBottom: [{ unit: 'px', value: 50 }],
    display: 'block'
  },
  '#frequently-question left-text span a': {
    fontWeight: '500'
  },
  accordions: {
    backgroundColor: '#f7f7f7'
  },
  'accordion-head': {
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }],
    fontSize: [{ unit: 'px', value: 20 }],
    cursor: 'pointer',
    transition: 'color 200ms ease-in-out',
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }],
    'screen&&>w768': {
      padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
      fontSize: [{ unit: 'rem', value: 1.2 }]
    }
  },
  'accordion-head icon': {
    float: 'right',
    transition: 'transform 200ms ease-in-out'
  },
  'accordion-headis-open': {
    color: '#0088e8',
    borderBottom: [{ unit: 'string', value: 'none' }]
  },
  'accordion-headis-open icon': {
    transform: 'rotate(45deg)'
  },
  'accordion-body': {
    overflow: 'hidden',
    height: [{ unit: 'px', value: 0 }],
    transition: 'height 300ms ease-in-out',
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }]
  },
  'accordion-body > content': {
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }],
    paddingTop: [{ unit: 'px', value: 0 }]
  },
  // ---------------------------------------------
contact
---------------------------------------------
  '#contact-us container-fluid': {
    paddingRight: [{ unit: 'px', value: 0 }],
    paddingLeft: [{ unit: 'px', value: 0 }],
    overflowX: 'hidden'
  },
  '#contact-us col-lg-6': {
    paddingLeft: [{ unit: 'px', value: 0 }],
    paddingRight: [{ unit: 'px', value: 0 }]
  },
  '#contact-us h5': {
    fontWeight: '500',
    fontSize: [{ unit: 'px', value: 18 }],
    color: '#1e1e1e',
    letterSpacing: [{ unit: 'px', value: 0.25 }],
    lineHeight: [{ unit: 'px', value: 26 }]
  },
  'contact-text': {
    fontWeight: '400',
    fontSize: [{ unit: 'px', value: 14 }],
    color: '#6f8ba4',
    letterSpacing: [{ unit: 'px', value: 0.6 }],
    lineHeight: [{ unit: 'px', value: 26 }]
  },
  'contact-text p': {
    marginBottom: [{ unit: 'px', value: 28 }]
  },
  'contact-field': {
    backgroundColor: 'rgba(250, 250, 250, 0.3)'
  },
  'contact-form': {
    padding: [{ unit: 'px', value: 100 }, { unit: 'px', value: 100 }, { unit: 'px', value: 100 }, { unit: 'px', value: 100 }],
    background: 'rgba(0, 136, 232, 1)',
    background: '-moz-linear-gradient(
    -45deg,
    rgba(0, 136, 232, 1) 0%,
    rgba(0, 182, 198, 1) 0%,
    rgba(0, 136, 232, 1) 100%
  )',
    background: '-webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, rgba(0, 136, 232, 1)),
    color-stop(0%, rgba(0, 182, 198, 1)),
    color-stop(100%, rgba(0, 136, 232, 1))
  )',
    background: '-webkit-linear-gradient(
    -45deg,
    rgba(0, 136, 232, 1) 0%,
    rgba(0, 182, 198, 1) 0%,
    rgba(0, 136, 232, 1) 100%
  )',
    background: '-o-linear-gradient(
    -45deg,
    rgba(0, 136, 232, 1) 0%,
    rgba(0, 182, 198, 1) 0%,
    rgba(0, 136, 232, 1) 100%
  )',
    background: '-ms-linear-gradient(
    -45deg,
    rgba(0, 136, 232, 1) 0%,
    rgba(0, 182, 198, 1) 0%,
    rgba(0, 136, 232, 1) 100%
  )',
    background: 'linear-gradient(
    135deg,
    rgba(0, 136, 232, 1) 0%,
    rgba(0, 182, 198, 1) 0%,
    rgba(0, 136, 232, 1) 100%
  )',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#0088e8', endColorstr='#0088e8', GradientType=1 )',
    '<w765': {
      padding: [{ unit: 'px', value: 60 }, { unit: 'px', value: 60 }, { unit: 'px', value: 60 }, { unit: 'px', value: 60 }],
      marginTop: [{ unit: 'px', value: -7 }]
    }
  },
  'contact-form input': {
    color: '#777',
    fontSize: [{ unit: 'px', value: 14 }],
    border: [{ unit: 'string', value: 'none' }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 50 }],
    outline: 'none',
    paddingLeft: [{ unit: 'px', value: 20 }],
    paddingRight: [{ unit: 'px', value: 20 }],
    borderRadius: '0px',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'contact-form textarea': {
    color: '#777',
    fontSize: [{ unit: 'px', value: 14 }],
    border: [{ unit: 'string', value: 'none' }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 50 }],
    outline: 'none',
    paddingLeft: [{ unit: 'px', value: 20 }],
    paddingRight: [{ unit: 'px', value: 20 }],
    borderRadius: '0px',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  'contact-form textarea': {
    height: [{ unit: 'px', value: 150 }],
    resize: 'none',
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }]
  },
  'contact-form': {
    textAlign: 'center'
  },
  'contact-form ::-webkit-input-placeholder': {
    // Edge
    color: '#fff'
  },
  'contact-form :-ms-input-placeholder': {
    // Internet Explorer 10-11
    color: '#fff'
  },
  'contact-form ::placeholder': {
    color: '#fff'
  },
  // ---------------------------------------------
footer
---------------------------------------------
  footer: {
    backgroundColor: '#fff',
    padding: [{ unit: 'px', value: 60 }, { unit: 'px', value: 0 }, { unit: 'px', value: 60 }, { unit: 'px', value: 0 }]
  },
  'footer social': {
    overflow: 'hidden',
    textAlign: 'right'
  },
  'footer social li': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }],
    display: 'inline-block'
  },
  'footer social li a': {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#00b4c6',
    width: [{ unit: 'px', value: 40 }],
    height: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    borderRadius: '5px',
    display: 'inline-block',
    fontSize: [{ unit: 'px', value: 16 }],
    WebkitTransition: 'all 0.3s ease 0s',
    MozTransition: 'all 0.3s ease 0s',
    OTransition: 'all 0.3s ease 0s',
    transition: 'all 0.3s ease 0s'
  },
  'footer social li a:hover': {
    backgroundColor: '#0088e8',
    color: '#fff'
  },
  'footer copyright': {
    marginTop: [{ unit: 'px', value: 10 }],
    fontWeight: '400',
    fontSize: [{ unit: 'px', value: 15 }],
    color: '#4a4a4a',
    letterSpacing: [{ unit: 'px', value: 0.88 }],
    textTransform: 'capitalize',
    '<w991': {
      textAlign: 'center'
    }
  },
  // ---------------------------------------------
preloader
---------------------------------------------
  '#preloader': {
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(145deg, #00b4c6 0%, #0088e8 100%)',
    left: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }],
    bottom: [{ unit: 'px', value: 0 }],
    position: 'fixed',
    zIndex: '9999',
    color: '#fff'
  },
  '#preloader jumper': {
    left: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }],
    bottom: [{ unit: 'px', value: 0 }],
    display: 'block',
    position: 'absolute',
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    width: [{ unit: 'px', value: 50 }],
    height: [{ unit: 'px', value: 50 }]
  },
  '#preloader jumper > div': {
    backgroundColor: '#fff',
    width: [{ unit: 'px', value: 10 }],
    height: [{ unit: 'px', value: 10 }],
    borderRadius: '100%',
    WebkitAnimationFillMode: 'both',
    animationFillMode: 'both',
    position: 'absolute',
    opacity: '0',
    width: [{ unit: 'px', value: 50 }],
    height: [{ unit: 'px', value: 50 }],
    WebkitAnimation: 'jumper 1s 0s linear infinite',
    animation: 'jumper 1s 0s linear infinite'
  },
  '#preloader jumper > div:nth-child(2)': {
    WebkitAnimationDelay: '0.33333s',
    animationDelay: '0.33333s'
  },
  '#preloader jumper > div:nth-child(3)': {
    WebkitAnimationDelay: '0.66666s',
    animationDelay: '0.66666s'
  }
});
