import React from "react"
import Helmet from "react-helmet"
import { Navbar } from "./index"
import { loadTheme } from "office-ui-fabric-react"
import { initializeIcons } from '@uifabric/icons';
import "../index.scss"

initializeIcons();

loadTheme({
  palette: {
    themePrimary: "#5516a6",
    themeLighterAlt: "#f6f3fb",
    themeLighter: "#decff1",
    themeLight: "#c2a9e4",
    themeTertiary: "#8e60c9",
    themeSecondary: "#6429b0",
    themeDarkAlt: "#4c1395",
    themeDark: "#40107e",
    themeDarker: "#2f0c5d",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#111111",
    neutralSecondary: "#171616",
    neutralPrimaryAlt: "#1d1c1b",
    neutralPrimary: "#323130",
    neutralDark: "#282726",
    black: "#2d2c2c",
    white: "#ffffff",
  },
})

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
