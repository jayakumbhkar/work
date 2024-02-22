import React from 'react'

const Header = () => {
  return (

    <div className='headers'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <p>Fill the form and submit the data then data will be entered into the table</p>
        <div className='login-btns'>
        <button className='sign-in'>SignIn</button>
        <button className='sign-up'>SignUp</button>
        </div>
    </div>
  )
}

export default Header