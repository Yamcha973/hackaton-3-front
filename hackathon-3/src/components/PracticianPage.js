import React, { Component } from 'react';
import axios from 'axios';


class PracticianPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         patients: [],
         patient_treatment: [],
      }
   }
   componentDidMount() {
      axios.get('http://localhost:8000/api/patients/')
      .then(response => response.data)
      .then(data => {
         console.log(data);
         this.setState({ patients: data });
      })
      axios.get('http://localhost:8000/api/treatments')
         .then(response => response.data)
         .then(data => {
            console.log(data);
            this.setState({ patient_treatment: data });
         })
   }

   render() {
      const { active_patient, patient_name, changePatient, changePatientId, changePatientName, changePage } = this.props;
      return (<>
         <h1>Bienvenue Dr Raoult ! </h1>
         <h2>Vos patients en cours de traitement</h2>
         {this.state.patients.map((patient) => { return <button key={patient.id} id={patient.id} onClick={(event) => { changePatient(event.target.id); changePatientName(patient.name); changePage("treatment"); changePatientId(patient.id) }}> {patient.name} </button> }
         )}
         <h2>Rappels nons validés par le patient: </h2>         
            <ul>
               {this.state.patient_treatment.map((alerte) => {
                  var d1 = new Date((alerte.date_time).replace(' ', 'T'));
                  var d2 = new Date('2020-06-26T00:00:00'); 
                  // console.log(alerte.date_time);
                  // console.log(d1);
                  // console.log(d2);
                  if(( d1 < d2  ) && (alerte.done == 0)){
                     console.log('boucle if date');
                     return ( <p> Le patient {alerte.name} n'a pas validé son rappel du {alerte.date_time} concernant le médicament {alerte.nom}  </p> )
                  }
               } )}
            </ul> 
      </>)
   }

}


export default PracticianPage;