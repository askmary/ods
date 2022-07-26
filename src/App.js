import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./components/Header"
import Main from "./components/Main"

const GlobalStyle = createGlobalStyle`
 *{
   margin:0;
   padding:0;
   box-sizing:border-box;
   font-family: 'Istok Web', sans-serif;
 }
 body{
  width:100%;
 }
 ::-webkit-scrollbar{
  width:5px;
}
::-webkit-scrollbar-track{
  background:#2C2C2C;
}
::-webkit-scrollbar-thumb{
  width:2px;
  background:white;
  border-radius: 5px;
}
`

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main/>
    </div>
  )
}
