import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentTable() {
    const [payments, setPayments] = useState([]);
   

    useEffect(() => {
        // Fetch all passengers when the component mounts
        axios.get('http://localhost:3001/payments')
            .then(response => setPayments(response.data))
            .catch(err => console.error(err));
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevData => ({ ...prevData, [name]: value }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3001/addPayment')
    //         .then(response => {
    //             setPayments(prevPayment => [...prevPayment, response.data]);
                
    //         })
    //         .catch(err => console.error(err));
    // };

    return (
        <div>
            

            <h3>Payments List</h3>
            <table>
                <thead>
                    <tr>
                        <th>firstname</th>
                        <th>email</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                        <th>totalprice</th>
                        <th>cardname</th>
                        <th>cardnumber</th>
                        <th>expmonth</th>
                        <th>expyear</th>
                        <th>cvv</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment._id}>
                            <td>{payment.firstname}</td>
                            <td>{payment.email}</td>
                            <td>{payment.address}</td>
                            <td>{payment.city}</td>
                            <td>{payment.state}</td>
                            <td>{payment.zip}</td>
                            <td>{payment.totalPrice}</td>
                            <td>{payment.cardname}</td>
                            <td>{payment.cardnumber}</td>
                            <td>{payment.expmonth}</td>
                            <td>{payment.expyear}</td>
                            <td>{payment.cvv}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PaymentTable;
