import React, { Component } from 'react';

const patients = [
   {id:13,  name: 'Brigitte'},{id: 75, name: 'Bernard'}, {id: 77, name: 'Didier'}
];

class PracticianPage extends Component {
   constructor(props){
      super(props);
   }
   render(){
      const {active_patient, patient_name, changePatient, changePatientName, changePage} = this.props;
      return(<>
            <h1>Bienvenue Dr Raoult ! </h1>
            <h2>Vos patients en cours de traitement</h2>  
            { patients.map((patient) => {return <button id={patient.id} onClick={ (event) => {changePatient(event.target.id); changePatientName(patient.name) ;changePage("treatment")}}> {patient.name} </button>  })}
        </>)
   }
    
}


export default PracticianPage;