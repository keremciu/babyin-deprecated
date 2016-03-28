import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavHeader from './NavHeader.jsx';
import NavRightContent from './NavRightContent.jsx';

import AppConfig from '/client/configs/app.js';

// Custom theme
import ThemeContainer from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

const theme = getMuiTheme({
  fontFamily: 'Gotham Rounded, Arial, sans-serif',
  palette: {
    primary1Color: '#8726F7',
    accent1Color: '#ff0000',
  },
});

// needed for ontouchtap
injectTapEventPlugin();

const styles = {
  hide: {
    display: 'none',
  },
};

export default class extends React.Component {

  render() {
    return (
      <ThemeContainer muiTheme={theme}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" style={styles.hide}><symbol id="logo" viewBox="0 0 133.99 122.92"><title>icons</title><path d="M67.27 7a8.19 8.19 0 0 1 8.19 8.19l.53 26.92a2.3 2.3 0 0 0 1.72 2.18q1 .26 2 .57a2.3 2.3 0 0 0 2.8-1.27l9.25-21.24a8.19 8.19 0 0 1 15 6.48l-9 26a2.29 2.29 0 0 0 .43 2.25q1 1.12 1.85 2.31a2.3 2.3 0 0 0 3.42.3l10.73-10.15a7.51 7.51 0 0 1 10.62 10.62c-.14.14-.29.27-.44.4l-12 11a16.4 16.4 0 0 0-3.25 4.11l-2.33 4.19a16.37 16.37 0 0 0-1.44 3.47 62.2 62.2 0 0 1-2.8 7.82 49 49 0 0 1-7.08 12.27 41.72 41.72 0 0 1-29.75 12.52 42.2 42.2 0 0 1-36.09-20.67 16.48 16.48 0 0 0-1.84-2.49L9.25 72.15A8.53 8.53 0 0 1 21.5 60.29l6.49 5.22a2.27 2.27 0 0 0 1.43.5 2.31 2.31 0 0 0 2-1.24 40.62 40.62 0 0 1 5.36-7.85 2.29 2.29 0 0 0 .4-2.37L26.86 28.8a8.19 8.19 0 1 1 15-6.49L51.99 43.8a2.29 2.29 0 0 0 2.08 1.32 2.32 2.32 0 0 0 .73-.12q1.2-.39 2.43-.71a2.29 2.29 0 0 0 1.71-2.21l.13-26.87a8.19 8.19 0 0 1 8.19-8.19m0-7a15.21 15.21 0 0 0-15.19 15.19v.09l-.08 12.09-3.71-7.93a15.19 15.19 0 0 0-27.88 12l9.34 23.1q-.79 1-1.52 2.1l-2.1-1.68a15.63 15.63 0 0 0-1.89-1.52l-.19-.15A15.53 15.53 0 0 0 4.08 76.86l18.49 20.6a9.5 9.5 0 0 1 1.06 1.43 48.74 48.74 0 0 0 76.81 9.45l.27-.28.24-.31a55.9 55.9 0 0 0 8.04-13.92 69.46 69.46 0 0 0 3.07-8.59 9.38 9.38 0 0 1 .82-2l2.33-4.19a9.38 9.38 0 0 1 1.86-2.36l11.92-10.92c.27-.23.51-.46.74-.68a14.517 14.517 0 0 0-20.43-20.63l-.85.8 4.86-14a15.22 15.22 0 0 0 .52-1.51l.39-1.12-.07-.17a15.19 15.19 0 0 0-28.86-8.91v.1l-2.59 6-.2-10.49A15.21 15.21 0 0 0 67.31.05z"/></symbol></svg>
          <NavHeader
            brand={() => (AppConfig.name) }
            rightContent={() => (<NavRightContent />) }
            leftContent={() => (this.props.leftIcon ? this.props.leftIcon() : null) }
          />
          <div className="container">
            {this.props.content()}
          </div>
        </div>
      </ThemeContainer>
    );
  }
}
