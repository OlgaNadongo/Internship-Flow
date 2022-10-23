import React from 'react'

const LoginPage = () => {
  return (
    <div className='logincontainer'>
        <div className='loginitem-1'></div>
        <div className='loginitem-2'>
            <h1 className='logo'>Radical<span>X</span></h1>
            <h1 className='logintitle'>Login</h1>
            <form className='loginform'>
                <div>
                  <input type="text" placeholder='email'/>
                </div>
               <div>
                  <input type="text" placeholder='password'/>
               </div>
                <div className='remme'>
                  <div>
                    <label>Remember me</label>
                    <input type="checkbox" className='rememberme' />
                  </div>
                    
                    <h3>Forgot password?</h3>
                </div>
               
               <div>
                 <input className='loginbtn' type="submit" value="Login" />
               </div>
              
            </form>
        </div>
    </div>
  )
}

export default LoginPage
