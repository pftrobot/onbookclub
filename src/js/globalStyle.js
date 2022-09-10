import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root{
		--yellow: #f8b83c;
		--green: #008751;
	}
	
	html, body, #root, .App{
		height: 100%;
	}

  .App *{
    box-sizing: border-box;
  }
  
	// reset
  html, body, h1, h2, h3, h4, h5, h6, div, p, span, span, blockquote, pre, ul, ol, dl, dt, dd, main, section, header, footer, nav, menu, a, address, article, aside, canvas, code, img, video, audio, table, input, textarea, label, figure, fieldset, figcaption{
    padding: 0;
    margin: 0;
    border: 0;
  }
  body{
    line-height: 1;
  }
  h1, h2, h3, h4, h5, h6{
    font-size: 1rem;
    font-weight: normal;
  }
  ol, ul, li{
    list-style: none;
  }
  table,th,td{
    border-spacing:0;
    border-collapse:collapse;
  }
  a{
    &:hover, &:active, &:visited, &:focus, &:link{
      color: #000;
      text-decoration: none;
    }
  }
  button{
	  border: none;
	  background-color: transparent;
  }
  img{
    border: 0;
  }
`

export default GlobalStyle;