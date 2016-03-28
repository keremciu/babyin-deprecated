import React from 'react';
import Navigation from './navigation.jsx';

const Layout = ({content = () => null }) => (
  <div class="layout">
    <header>
    <h1>Mantra</h1>
    <Navigation />
    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>Built with Love.</small>
    </footer>
  </div>
);

export default Layout;
