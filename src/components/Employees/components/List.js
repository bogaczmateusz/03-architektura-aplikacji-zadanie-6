import React from 'react';

function List({ data, clickHandler }) {
    return (
        <div className="employees-list">
            <ul>
                {data.map(employee => {
                    return <li key={`user-${employee.id}`} data-key={employee.id}><button onClick={() => clickHandler(employee.id)}>{employee.name} {employee.surname}</button></li>
                })}
            </ul>
        </div>
    )
}

export default List;