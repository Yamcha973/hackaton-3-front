import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Treatment = (props) => {
   const [treatments, setTreatments] = useState([]);
   useEffect(() => {
      axios.get('http://localhost:8000/api/patients/1/treatment')
          .then(response => response.data)
          .then(data => {
             setTreatments(data);
             console.log(data);
          });
   }, []);

   const {patient_name, changePage} = props ;
   const tableau = {treatments};
   console.log(tableau); 
   return(
      <> <button id='change_page' onClick={ () => changePage("practician_page") } > Retour liste patients </button>
         <h2 className='colorWhite'>Voici le traitement en cours de {patient_name} </h2>
         <div className="left-align">
            { tableau.treatments.map((alert) => { 
               return(  
               <div> 
                  <p> Le {alert.date_time} </p> 
                  <p> {alert.nom} </p> 
               </div> 
                ) 
             })}
         </div>
      </>
   )
}

export default Treatment ;