import {styled, createGlobalStyle } from "styled-components";




export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100%;
    min-height: 100vh;
    background-color: #1c1e21;
    color: #F6F7F9;
}

li{
    list-style: none;
}

a,button{
    cursor: pointer;
}

`