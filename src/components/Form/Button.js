import React from 'react';

import palette from '../../utils/palette';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function Button(props) {
    const { color, bgColor, icon, children } = props;

    const styles = {
        border: 0,
        padding: '10px 20px',
        color: palette(color),
        backgroundColor: palette(bgColor)
    }

    return <button style={styles}><FontAwesomeIcon icon={['fas', icon]} /><span>{children}</span></button>
}

Button.defaultProps = {
    color: 'clouds',
    bgColor: 'alizarin',
    icon: 'user',
    children: 'Just Click'
};

export default Button;