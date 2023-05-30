import { css } from "@emotion/react";

import React from "react";

import { fontFamily, fontSize, colorGray } from "./Styles";

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${colorGray};
      `}
    >
      Hello World!
    </div>
  );
}

export default App;
