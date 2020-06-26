import React, { useEffect, useState } from 'react';
import axios from 'axios';

const updateBoolean = (id) => {
    axios.put(`http://localhost:8000/api/treatment/${id}`)
        .then(r => console.log(r.status))
        .catch(e => console.log(e));
}


function PatientPage2(props) {
    const [treatments, setTreatments] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:8000/api/patients/3/treatment')
            .then(response => response.data)
            .then(data => {
                setTreatments(data);
                console.log(data);
            });
    }, [count]); const { patient_name, changePage } = props;
    var tableau = { treatments };
    console.log(tableau);
    return (
        <>
            <h2>Bonjour! Voici les prises de médicaments pour votre traitement: </h2>
            <div className='treatments3'>
                {tableau.treatments.map((alert) => {
                    return (
                        <div className='warningText'>
                            <p> Le {alert.date_time} {alert.nom} {alert.done ? "☑" : "☐"} <button key={alert.id} onClick={(event) => { updateBoolean(alert.id); setCount(count + 1); }} >J'ai pris mon médicament</button> </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PatientPage2;