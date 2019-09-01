import React from 'react';
import { Navbar } from './components';
import { loadTheme } from 'office-ui-fabric-react';
// import ListView from './views/ListView';
import DetailedView from './views/DetailedView';

loadTheme({
  palette: {
    themePrimary: '#5516a6',
    themeLighterAlt: '#f6f3fb',
    themeLighter: '#decff1',
    themeLight: '#c2a9e4',
    themeTertiary: '#8e60c9',
    themeSecondary: '#6429b0',
    themeDarkAlt: '#4c1395',
    themeDark: '#40107e',
    themeDarker: '#2f0c5d',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#111111',
    neutralSecondary: '#171616',
    neutralPrimaryAlt: '#1d1c1b',
    neutralPrimary: '#323130',
    neutralDark: '#282726',
    black: '#2d2c2c',
    white: '#ffffff',
  }
});

function App() {
  return (
    <div>
      <Navbar />
      {/* <ListView /> */}
      <DetailedView />
    </div>
  );
}

export default App;