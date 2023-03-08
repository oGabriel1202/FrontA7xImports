import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  scroll-behavior: smooth;
}
   body{
    margin: 0;
    padding: 0;
    background-color: var(--brackgroud-color); 
  }
  :root {
    --backgroud-color: #EDEDED;
    --white-color: #F2F2F2;
  }

`
