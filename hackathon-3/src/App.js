import React ,{ Component } from 'react';
import './App.css';
import PracticianPage from './components/PracticianPage.js';
import PatientPage from './components/PatientPage.js';
import Treatment from './components/Treatment.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
        active_page: 'patient_page',
        active_practician: 0,
        patient_name: '',
        active_patient: 'Brigitte Macron',
    }
    this.changePage = this.changePage.bind(this);
    this.changePractician = this.changePractician.bind(this);
    this.changePatient = this.changePatient.bind(this);
    this.displayPage = this.displayPage.bind(this);   
    this.changePatientName = this.changePatientName.bind(this);   
    
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
      case "practician_page":
        return(<PracticianPage {...this.state} changePatient={this.changePatient} changePatientName={this.changePatientName} changePage={this.changePage} />)    
      case "treatment":
        return(<Treatment {...this.state} changePage={this.changePage} />  )
      default:
        break;
    }
  }
  render(){
    return(
      <>
        {/* <Menu /> */}
        <div className="main-container" >
          {this.displayPage()}
        </div>
      </>
    )
  }
}

export default App;