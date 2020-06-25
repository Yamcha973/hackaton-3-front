import React, { Component } from 'react';
import axios from 'axios';


class PracticianPage extends Component {
   constructor(props){
      super(props);
      this.state = {
         patients: []
      }
   }
   componentDidMount(){
      axios.get('http://localhost:8000/api/patients/')
          .then(response => response.data)
          .then(data => {
             console.log(data);
              this.setState({ patients: data });
          })
   }
   render(){
      const {active_patient, patient_name, changePatient, changePatientName, changePage} = this.props;
      return(<>
            <h1>Bienvenue Dr Raoult ! </h1>
            <h2>Vos patients en cours de traitement</h2>  
            {this.state.patients.map((patient) => {return <button key={patient.id} id={patient.id} onClick={ (event) => {changePatient(event.target.id); changePatientName(patient.name) ;changePage("treatment")}}> {patient.name} </button>  })}
        </>)
   }
    
}


export default PracticianPage;