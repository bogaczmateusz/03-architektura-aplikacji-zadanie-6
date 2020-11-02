import React from 'react';

import './menu.css';

function Menu({ children }) {
    return (
        <nav>{children}</nav>
    )
}

export default Menu;