import React from 'react'

const ApprenticeshipForm = () => {
  return (
    <div className='apprenticeshipformcontainer'>
        <div>
            <h3>Back</h3>
            <h1>Creating Apprenticeship</h1>
            <button>Publish Apprenticeship</button>
        </div>
        <form>
            <div>
                <label>Apprenticeship Title</label>
                <input type="text" placeholder='Enter Apprenticeship Title' />
            </div>
            <div>
                <label>Company Description</label>
                <input type="text" placeholder='Enter description' />
            </div>

            <div>
                <label>Apprenticeship Description</label>
                <input type="text" placeholder='Enter description' />
            </div>
        
            <div>
                <label>Introduce yourself,company, and what you are building</label>
                <input type="text" placeholder='Drag n drop to upload video' />
            </div>
            <div>
                <h3>Team Type</h3>
                <div>
                   <label>Web platform</label>
                    <input type="checkbox"  />
                </div>
                <div>
                   <label>Mobile App</label>
                    <input type="checkbox"  />
                </div>
                <div>
                   <label>Growth</label>
                    <input type="checkbox"  />
                </div>
                <div>
                   <label>Marketing website</label>
                    <input type="checkbox"  />
                </div>
                <div>
                   <label>Prototyping</label>
                    <input type="checkbox"  />
                </div>
                <div>
                   <label>Data</label>
                    <input type="checkbox"  />
                </div>
                <div>
                   <label>Custom Team</label>
                    <input type="checkbox"  />
                </div>
              <div>
                <h3>Team Roles</h3>
                   <div>
                       <button>Add Team member</button>
                    </div>
              </div>
                
              <div>
                <h3>Team Admin</h3>
                   <div>
                       <button>Add Team member</button>
                    </div>
              </div>

              <div>
                <h3>Timeline</h3>
                   <div>
                       <input type="date" placeholder='Start Date'/>
                       <input type="date" placeholder='Estimated End Date'/>
                    </div>
              </div>

               
            </div>
            
        </form>
    </div>
  )
}

export default ApprenticeshipForm