import React from 'react';

// material-ui elements
const UI = require('material-ui');
const { Card, CardHeader, AppBar, LeftNav, Menu, MenuItem } = UI;

// material ui svg icons

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

const menuItems = [
  { route: '/classrooms/', text: 'classrooms' },
  { route: '/schools/', text: 'schools' },
  { route: '/users/', text: 'users' }
];

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleLeftButton = this.handleLeftButton.bind(this);
    this.leftNav = this.leftNav.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  handleLeftButton() {
    return this.setState({open: !this.state.open});
  }

  leftNav() {
    return 'page ' + ((this.state.open) ? 'opened' : '');
  }

  isActive(route) {
    let result = false;
    if (FlowRouter.current().route.path === route) {
      result = true;
    }
    return result;
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
      <LeftNav
        zDepth={5}
        docked={false}
        containerClassName="leftNavigation"
        open={this.state.open}>
        <Card>
          <CardHeader
            title="Kerem Sevencan"
            subtitle="kerem@ritmix.org"
            avatar="http://lorempixel.com/100/100/nature/"
            showExpandableButton={true}
          />
        </Card>
        <Menu>
          {menuItems.map(function (item, i) {
            return (
              <MenuItem
                index={i}
                linkButton
                href={FlowRouter.path(item.route)}
                disabled={this.isActive(item.route)}
                >
                <T label={item.text} />
              </MenuItem>);
          }, this)}
        </Menu>
      </LeftNav>
    </div>
    );
  }
}
