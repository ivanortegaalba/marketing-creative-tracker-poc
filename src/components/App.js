import React from "react"
import Helmet from "react-helmet"
import { Navbar } from "./index"
import { loadTheme } from "office-ui-fabric-react"
import { initializeIcons } from '@uifabric/icons';
import "../index.scss"

initializeIcons();


loadTheme({
  palette: {
    themePrimary: '#009687',
    themeLighterAlt: '#f1fbfa',
    themeLighter: '#c8eeea',
    themeLight: '#9de0d9',
    themeTertiary: '#4dc0b5',
    themeSecondary: '#14a395',
    themeDarkAlt: '#00877a',
    themeDark: '#007267',
    themeDarker: '#00544c',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#bab8b7',
    neutralSecondary: '#a3a2a0',
    neutralPrimaryAlt: '#8d8b8a',
    neutralPrimary: '#323130',
    neutralDark: '#605e5d',
    black: '#494847',
    white: '#ffffff',
  }
});

function App(props) {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/10.0.0/css/fabric.min.css"
        />
      </Helmet>
      <Navbar />
      {props.children}
    </div>
  )
}

export default App
