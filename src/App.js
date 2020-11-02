import React from 'react';

import Employees from 'components/Employees';

function App() {
    const data = [
        {
            "id": 1,
            "name": "Jan",
            "surname": "Kowalski",
            "birth": "01.02.1932",
            "position": "CEO"
        },
        {
            "id": 2,
            "name": "Jadwiga",
            "surname": "Kowalska",
            "birth": "30.02.1014",
            "position": "CTO"
        },
        {
            "id": 3,
            "name": "Jacek",
            "surname": "Konkretny",
            "birth": "15.01.1489",
            "position": "PR"
        },
        {
            "id": 4,
            "name": "Paweł",
            "surname": "Taki",
            "birth": "17.04.1920",
            "position": "HR"
        }
    ];

    return (
        <Employees data={data}/>
    );
}

export default App;
