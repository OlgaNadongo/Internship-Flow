import React from 'react'
import ApprenticeshipCard from './ApprenticeshipCard'
import Dashboard from './Dashboard'

const Apprenticeships = () => {
  return (
    <div className='apprenticeshipcontainer'>
        <Dashboard/>
       <div className='apprenticeshipelements'>

        <div className='Apprenticeshiptopbar'>
           <h1>Apprenticeships</h1>
           <button>Add New Apprenticeship</button>
        </div>
           
           <div>
               <ApprenticeshipCard/>
           </div>
        </div> 
    </div>
  )
}

export default Apprenticeships