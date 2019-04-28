import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  body {
    /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    font-family: "Segoe UI", "Helvetica Neue", "Helvetica", "Lucida Grande", Arial, "Ubuntu", "Cantarell", "Fira Sans", sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: "Segoe UI", "Helvetica Neue", "Helvetica", "Lucida Grande", Arial, "Ubuntu", "Cantarell", "Fira Sans", sans-serif;
    line-height: 1.5em;
  }

  p {
    margin: 0;
  }
`;
