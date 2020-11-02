import React from 'react';

function NavLink(props) {
    const {to, children, isActive} = props;

    return isActive ? <a href={to} className="is-active">{children}</a> : <a href={to}>{children}</a>
}

export default NavLink;