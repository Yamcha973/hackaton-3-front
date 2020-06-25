import React from 'react';

const medecine_alerts = [
   {
      date_time: "2020-11-08 11:00",
      medicine_name: "Ventoline",
   },
   {
      date_time: "2020-08-07 11:00",
      medicine_name: "Efferalgan",
   },
   {
      date_time: "2020-12-25 19:00",
      medicine_name: "Doliprane",
   },
   {
      date_time: "2020-07-07 19:00",
      medicine_name: "Lysopaïne",
   },
]
;

const Treatment = (props) => {
   const {patient_name, changePage} = props ;
   return(
      <> <button id='change_page' onClick={ () => changePage("practician_page") } > Retour liste patients </button>
         <h2>Voici le traitement en cours de {patient_name} </h2>
         <ul>
            { medecine_alerts.map((alert) => {
               return( 
                  <div>
                     <p> Le {alert.date_time} </p>
                     <p> {alert.medecine_name} </p>
                     <p> {alert.medecine_name} </p>
                  </div>
               )
            })}
         </ul>
      </>
   )
}

export default Treatment ;