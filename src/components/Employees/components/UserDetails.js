import React, { Fragment } from 'react';

function UserDetails({ user }) {
    return (
        <Fragment>
            <p>Imię: {user.name}</p>
            <p>Nazwisko: {user.surname}</p>
            <p>Data urodzenia: {user.birth}</p>
            <p>Pozycja: {user.position}</p>
        </Fragment>
    )
}

export default UserDetails;