# nes-react

> React component library for nes.css

[![NPM](https://img.shields.io/npm/v/nes-react.svg)](https://www.npmjs.com/package/nes-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save nes-react
```

## Usage

If you want to use the default font family for nes.css (Press Start 2P), make sure to include that in your app in whatever way you choose.
To use Google Font APIs, just stick a

```html
<link
  href="https://fonts.googleapis.com/css?family=Press+Start+2P"
  rel="stylesheet"
/>
```

in your app.

```tsx
import * as React from "react";

import { Container } from "nes-react";

class Example extends React.Component {
  render() {
    return <Container>We're using containers from nes.css!</Container>;
  }
}
```

## Development

`git clone --recursive git@github.com:bschulte/nes-react.git`

`npm install` in both the root folder and in /example.

`npm run dev` then also in both the root folder and in /example.

## License

MIT © [bschulte](https://github.com/bschulte)
