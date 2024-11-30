const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register')
const passengerModel =require('./models/Pessanger')
const paymentModel =require('./models/Payment');
const seatModel = require('./models/Seat');z
const jwt = require("jsonwebtoken");
const busModel = require('./models/Bus');


const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/client")


app.post('/signup',(req,res) => {
   
    RegisterModel.create(req.body)
    .then(client => res.json(client))
    .catch(err => res.json(err))
})


app.post('/login',(req,res) => {
    const {username,password} = req.body;
    RegisterModel.findOne({username, password})
    .then(async(client) =>  {
        if (client) {
            if(client.password === password){
                const token = await client.generateAuthToken();
                res.json({client, token});
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record Existed")
        }

    })
})

//verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.json({ error: "No token provided." });
    }
  
    jwt.verify(token, "HARSHADBUS", (err, decoded) => {
      if (err) {
        return res.json({ error: "Failed to authenticate token." });
      }
      req.client = decoded;
      next();
    });
  };

  //get username
  app.get("/user", verifyToken, (req, res) => {
    RegisterModel.findOne({ username: req.client.username })
      .then((user) => {
        res.json({ user });
      })
      .catch((err) => res.json(err));
  });


//forget password
app.post("/forget", async (req, res) => {
    const { email, password, confirmpass } = req.body;
  
    RegisterModel.findOneAndUpdate({ email }, { password, confirmpass })
      .then((res) => {
        res.json(res);
      })
      .catch((err) => res.json(err));
  });


// app.post('/passenger',(req,res) => {
//     console.log(req.body.records);
    
//     passengerModel.insertMany(req.body.records)
//     .then(client => res.json(client))
//     .catch(err => res.json(err))
// })






app.post('/passenger', async (req, res) => {
    try {
        console.log(req.body.records);
        
        // Insert many records into the database
        const result = await passengerModel.insertMany(req.body.records);
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});


app.post('/payment',(req,res) => {
    console.log(req.body);
    
    paymentModel.create(req.body)
    .then(client => res.json(client))
    .catch(err => res.json(err))
})  


app.post('/seat',(req,res) => {
    console.log(req.body);
    
    seatModel.create(req.body)
    .then(client => res.json(client))
    .catch(err => res.json(err))
})  

app.delete("/delete/:id", async (req,res) =>{
    try{
        const bookingId =req.params.id;
        console.log("deleting booking id:",bookingId);
        
        const deletedbooking =await passengerModel.findOneAndDelete({id: bookingId});
        res.json(deletedbooking);
       
    }
    catch (err)
    {
        res.json(err)
    }
});

// app.post("/pdetails", (req, res) => {
//     const id = req.body.pnr;
//     console.log(id);

//     passengerModel.findById(id)
//     .then(data => res.json(data))
//     .catch(err => res.json(err))
// })

//bus data
app.post('/addBus', async (req, res) => {
    const { busno,busname,busroute,time,service,mode} = req.body;
    
    try {
        const newBus = new busModel({
            busno,
            busname,
            busroute,
            time,
            service,
            mode
        });

        await newBus.save();
        res.status(201).json(newBus);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});

// Endpoint to get all bus records
app.get('/bus', async (req, res) => {
    try {
        const bus = await busModel.find();
        res.status(200).json(bus);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});

app.delete('/bus/:busno', async (req, res) => {
    const busno = req.params.busno;
    try {
        const result = await busModel.deleteOne({ busno: busno }); // Example using MongoDB
        if (result.deletedCount === 1) {
            return res.status(204).send(); // No Content
        } else {
            return res.status(404).send({ message: "Bus not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: "Error deleting bus" });
    }
});

//update bus
app.put('/bus/:busno', (req, res) => {
    const id = req.params.busno; 
    console.log(id);
    
    busModel.findOneAndUpdate({busno: id} , req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
});







//add Passanger data to data base to see
app.post('/addPassenger', async (req, res) => {
    const { name, age, gender,number, from, to, date, seat } = req.body;
    const pnr = generatePnr(); // Generate a new PNR number

    try {
        const newPassenger = new passengerModel({
            id: pnr,
            name,
            age,
            gender,
            number, // Use PNR as the number
            from,
            to,
            date,
            seat,
            
        });

        await newPassenger.save();
        res.status(201).json(newPassenger);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});



//data fetch admin passanger
app.post('/addPayment', async (req, res) => {
    const { firstname,email,address,city,state,zip,totalPrice,cardname,cardnumber,expmonth,expyear,cvv} = req.body;
  

    try {
        const newPayment = new paymentModel({
            firstname,
            email,
            address,
            city,
            state,
            zip,
            totalPrice,
            cardname,
            cardnumber,
            expmonth,
            expyear,
            cvv,
        });

        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});

//all data payment admin
app.get('/payments', async (req, res) => {
    try {
        const payments = await paymentModel.find();
        res.status(200).json(payments);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});


//admin use data
app.post('/adduser', async (req, res) => {
    const { username,email,password,role} = req.body;
  

    try {
        const newUser = new RegisterModel({
            username,
            email,
            password,
            role,
           
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});


//all data payment admin
app.get('/users', async (req, res) => {
    try {
        const user = await RegisterModel.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});

//serch ticket pnr 
app.post('/pdetails', async (req, res) => {
    const { pnr } = req.body;

    try {
        const result = await passengerModel.find({ id: pnr });

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No ticket found for the provided PNR' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});


// Endpoint to get all passenger records
app.get('/passengers', async (req, res) => {
    try {
        const passengers = await passengerModel.find();
        res.status(200).json(passengers);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});

// Function to generate a random PNR number
const generatePnr = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};



const tickets = [
    {
        pnr: '123456',
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        from: 'New York',
        to: 'Los Angeles',
        date: '2024-09-15',
        seatNo: 'A12',
        price: '$150'
    },
    {
        pnr: '789012',
        name: 'Jane Smith',
        age: 25,
        gender: 'Female',
        from: 'San Francisco',
        to: 'Chicago',
        date: '2024-09-16',
        seatNo: 'B34',
        price: '$200'
    }
];
app.post('/pdetails', (req, res) => {
    const { pnr } = req.body;
    
    // Filter tickets based on PNR
    const result = tickets.filter(ticket => ticket.pnr === pnr);

    if (result.length > 0) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'No ticket found for the provided PNR' });
    }
});

app.post('/download', (req, res) => {
    // console.log(req.body);
    const { name } = req.body;
    console.log(name);
    
    passengerModel.findOne(name)
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
})


// Endpoint to get the last inserted passenger
app.get('/last-passenger', (req, res) => {
    passengerModel.findOne().sort({ _id: -1 }) // Sort by _id descending to get the last inserted document
        .then(data => {
            if (data) {
                res.json(data);
            } else {
                res.status(404).json({ message: 'No passengers found' });
            }
        })
        .catch(err => {
            console.error("Error retrieving last passenger:", err);
            res.status(500).json({ message: 'Internal server error' });
        });
});





  app.get('/api/passanger/:id', async (req, res) => {
    const product = await passengerModel.findById(req.params.id);
    res.json(product);
});




  

app.listen(3001 , () => {
    console.log("Serve are running")
})