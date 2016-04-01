import React from 'react';

// material-ui elements
const UI = require('material-ui');
const { Card, CardHeader, AppBar, LeftNav, MenuItem } = UI;

function handleTouchTap() {
  FlowRouter.go('/');
}

const styles = {
  logoWrapper: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
  },
  logoSvg: {
    width: 36,
    height: 36,
    fill: '#ffffff',
    marginTop: 10,
    marginRight: 10,
  },
  floatbtn: {
    position: 'fixed',
    bottom: 22,
    right: 22,
  }
};

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleLeftButton = this.handleLeftButton.bind(this);
    this.leftNav = this.leftNav.bind(this);
  }

  handleLeftButton() {
    return this.setState({open: !this.state.open});
  }

  leftNav() {
    return 'page ' + ((this.state.open) ? 'opened' : '');
  }

  render() {
    const {brand, rightContent, leftContent} = this.props;
    return (
      <div className={this.leftNav()}>
        <AppBar
          className="appbar"
          style={styles.appbar}
          iconElementLeft={leftContent ? leftContent() : null }
          onLeftIconButtonTouchTap={this.handleLeftButton}
          onTitleTouchTap={handleTouchTap}
          title={
            <div style={styles.logoWrapper}>
              <svg style={styles.logoSvg}><use xlinkHref='#logo' /></svg>
              <span className="logotitle">{brand()}</span>
            </div>}
          iconElementRight={
            <div>
              {rightContent ? rightContent() : null }
            </div>
          }
        />
      <LeftNav zDepth={5} docked={false} containerClassName="leftNavigation" open={this.state.open}>
          <Card>
            <CardHeader
              title="title"
              subtitle="Subtitle"
            />
          </Card>
            <MenuItem
              linkButton
              href="/colors">Colors</MenuItem>
            <MenuItem
              linkButton
              href="/preschools"><T label="preschools" /></MenuItem>
            <MenuItem
              linkButton
              href="/users"><T label="users" /></MenuItem>
          </LeftNav>
      </div>
    );
  }
}
