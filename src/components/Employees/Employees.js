import React, { useState, useEffect } from 'react';

import './employees.css';
import List from './components/List';
import Details from './components/Details';

function Employees({ data }) {

    const [ user, setUser ] = useState(1);
    const change = id => {
        setUser(id);
    }

    useEffect(() => {
        const items = document.querySelectorAll('.employees-list li');

        [...items].forEach(item => {
            parseInt(item.dataset.key) === parseInt(user) ? item.classList.add('is-active') : item.classList.remove('is-active');
        });
    }, [user]);

    return (
        <div className="employees">
            <List data={data} clickHandler={change} />
            <Details user={user} data={data} />
        </div>
    );
}

export default Employees;