import './css/login.css'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate()

     const handleSubmit = (e) => {
        
        e.preventDefault()
        axios.post('http://localhost:3001/login', {username,password})
        .then(result => {console.log(result)
            if (result.data.client.username === username) {
                // localStorage.setItem("login", true);
                const { token, client } = result.data;
                localStorage.setItem("token", token)
                console.log(client)
                navigate('/')
                window.location.reload()
            }
            else{
                alert("Not Same Username And Password  ")
            }
      })
        .catch(err => console.log(err))
     }
     
     
    return (
        
        <div className="login " >
            <div className="container">
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="textbox">
                        <input type="text" name="username" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="textbox">
                        <input type="password" name='password' placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                       <p>I do not have a account? <a href="/singup">Sing Up</a>   </p><p>Forget Passworad? <a href="/forgetpass">Click</a> </p>
                      
                        <button type="submit" className="btn bb" >Login</button>
                    </form>
                </div>
            </div>
        </div>
       
       
    )
}

export default Login