import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.css'

function Home() {
    const history = useHistory();

    const LoginHandle = () => {
        history.push("/login")
    }

    function SignupHandle() {
        history.push("/signup")
    }

    return (
        <div className='container'>

            <a className="waves-effect waves-light btn-large" onClick={LoginHandle}><i class="left" ></i>Login</a><br /><br /><br /><br /><br />
            <a className="waves-effect waves-light btn-large" onClick={SignupHandle}><i class="right"></i>SignUp</a>


        </div>
    )
}

export default Home
