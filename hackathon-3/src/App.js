import React ,{ Component } from 'react';
import './App.css';
import PracticianPage from './components/PracticianPage.js';
import PatientPage from './components/PatientPage.js';
import PatientPage2 from './components/PatientPage2.js';
import Treatment from './components/Treatment.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
        active_page: '',
        active_practician: 0,
        patient_name: '',
        active_patient: '',
        active_patient_id: 0
    }
    this.changePage = this.changePage.bind(this);
    this.changePractician = this.changePractician.bind(this);
    this.changePatient = this.changePatient.bind(this);
    this.displayPage = this.displayPage.bind(this);   
    this.changePatientName = this.changePatientName.bind(this); 
    this.changePatientId = this.changePatientId.bind(this);  
    
  }
  changePatientId(id){
    this.setState({ active_patient_id: id })
  }
  changePage(page){
    this.setState( {active_page: page} )
  }
  changePatientName(name){
    this.setState({ patient_name: name })
  }
  changePractician(){
    
  }  
  changePatient(id){
    this.setState({active_patient: id})
  };
  displayPage(){
    switch (this.state.active_page) {
      case "patient_page":
        return(<PatientPage {...this.state}/>  )
      case "patient_page2":
        return(<PatientPage2 {...this.state}/>  )
      case "practician_page":
        return(<PracticianPage {...this.state} changePatientId={this.changePatientId} changePatient={this.changePatient} changePatientName={this.changePatientName} changePage={this.changePage} />)    
      case "treatment":
        return(<Treatment {...this.state} changePage={this.changePage} />  )
      default:
        break;
    }
  }
  render(){
    return(
      <>
        <div>
          <button key='acces_praticien' onClick={ (event) => this.changePage('practician_page') } > Accès Praticien </button> 
          <button key='acces_patient' onClick={ (event) => {this.changePage('patient_page');this.changePatient('Brigite'); }} > Bribri </button>
          <button key='acces_patient2' onClick={ (event) => {this.changePage('patient_page2');this.changePatient('Heloise'); }} > Heloise </button> 
        </div>  
        <div className="main-container" >
          {this.displayPage()}
        </div>
      </>
    )
  }
}

export default App;