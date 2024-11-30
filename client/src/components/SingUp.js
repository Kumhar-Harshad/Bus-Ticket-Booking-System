import { useState, useEffect } from 'react';
import '../components/css/singup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const [adminCode, setAdminCode] = useState('');
    const [role, setRole] = useState('');
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        setShow(role === "ADMIN");
    }, [role]);

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!username || username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters long.';
        }
        if (!email || !emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!password || password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }
        if (password !== confirmpass) {
            newErrors.confirmpass = 'Passwords do not match.';
        }
        if (role === "ADMIN" && adminCode !== "HARSHADBUS") {
            newErrors.adminCode = 'Invalid Admin code.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (!validateForm()) {
            return; // Stop if validation fails
        }

        handleSubmitDone();
    };

    const handleSubmitDone = () => {
        axios.post('http://localhost:3001/signup', { username, email, password, role })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='registration'>
            <div className="container">
                <div className="registration-box">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        {show && (
                            <div className="textbox">
                                <input 
                                    type="text" 
                                    name="AdminCode" 
                                    placeholder="Admin Code" 
                                    onChange={(e) => setAdminCode(e.target.value)} 
                                    required 
                                />
                                {errors.adminCode && <p className="error">{errors.adminCode}</p>}
                            </div>
                        )}
                        <div className="textbox">
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Username" 
                                required 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                            {errors.username && <p className="error">{errors.username}</p>}
                        </div>
                        <div className="textbox">
                            <input 
                                type="email" 
                                name='email' 
                                placeholder="Email" 
                                required 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="textbox">
                            <input 
                                type="password" 
                                name='password' 
                                placeholder="Password" 
                                required 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="textbox">
                            <input 
                                type="password" 
                                name='confirmpass' 
                                placeholder="Confirm Password" 
                                required 
                                onChange={(e) => setConfirmpass(e.target.value)} 
                            />
                            {errors.confirmpass && <p className="error">{errors.confirmpass}</p>}
                        </div>
                        <select 
                            onChange={(e) => setRole(e.target.value)} 
                            className="allcity mb-4 px-4 py-2 border rounded w-full text-black"
                            required
                        >
                            <option value="">Select Your Role</option>
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                        <button type="submit" className="btn bb1">Register</button>
                    </form>
                    <p>Already have an account? <a href='/login'>Login here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
