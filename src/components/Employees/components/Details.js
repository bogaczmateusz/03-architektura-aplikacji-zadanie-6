import React from 'react';

import UserDetails from './UserDetails';

function Details({ user, data }) {
    return (
        <div className="employees-details">
            {data.map(item => {
                if (item.id === user) {
                    return <UserDetails key={`user-${item.id}`} user={item}/>
                }

                return null;
            })}
        </div>
    )
}

export default Details;