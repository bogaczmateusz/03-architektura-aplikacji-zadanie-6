import React, { useState } from 'react';

import './card.css';
import { CardHeader, CardMedia, CardExcerpt, CardShowMoreButton, CardReveal } from 'components/Card';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function Card(props) {
    const { headline, image, excerpt, showMore } = props;
    const [ opened, setOpened ] = useState(false);

    const reveal = () => {
        setOpened(prevState => !prevState);
    }

    return (
        <div className="card">
            <CardHeader headline={headline} />
            <CardMedia image={image} />
            <CardExcerpt excerpt={excerpt} />
            <CardShowMoreButton clickHandler={reveal}>
                <FontAwesomeIcon icon={['fas', 'arrow-down']} />
            </CardShowMoreButton>
            <CardReveal content={showMore} isOpened={opened} />
        </div>
    );
}

export default Card;