import React from 'react';

import palette from '../../utils/palette';

function Textarea(props) {
    const { color, bgColor, borderSize, borderRadius, borderColor } = props;

    const styles = {
        display: 'block',
        padding: '10px 20px',
        border: `${borderSize}px solid ${palette(borderColor)}`,
        borderRadius: `${borderRadius}px`,
        color: palette(color),
        backgroundColor: palette(bgColor)
    }

    return (
        <div>
            <span>Textarea</span>
            <textarea style={styles} />
        </div>
    );
}

Textarea.defaultProps = {
    color: 'clouds',
    bgColor: 'alizarin',
    borderSize: 1,
    borderRadius: 5,
    borderColor: 'silver'
};

export default Textarea;