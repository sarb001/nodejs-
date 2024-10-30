import express from 'express';
import jwt from 'jsonwebtoken' ;
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { UserModel } from './UserModes.js';
import bcrypt from 'bcrypt';

import zod from 'zod';

const app = express();
const PORT = 4000;

dotenv.config();
app.use(express.json());


// ---

// app.get('/' , (req,res)   => {
//     console.log('Inside Srver...');
//     return res.json({
//         msg : "On the Server"
//     })
// })



app.listen(PORT , () => {
    console.log('Server is Running on PORT ')
})




// Middleware Working --


    // function OldEnoughMiddleware(req,res,next){
    //     const oldage = req.query.age;
    //     console.log('age is -',oldage);
    //     if(oldage >= 14){
    //         next();
    //     }else{
    //         return res.status(411).json({
    //             msg : "Nope!!!!!"
    //         })
    //     }
    // }

    // app.get('/ride1' , OldEnoughMiddleware  ,(req,res) => {
    //     return res.json({
    //         msg : "Riding Successfully the First Ride1 "
    //     })
    // })

    // app.get('/ride2' , (req,res) => {
    //     return res.json({
    //         msg : "Riding Successfully the Second Ride22222 "
    //     })
    // })

    // app.listen(PORT,() => {
    //     console.log(` Server Running on  PORT `)
    // })


    // ------***  Count the Number of Requests that a server can make 
    // let requestcount = 0;

    //  function Countrequest(req,res,next){
    //     requestcount++;
    //     console.log('Count --',requestcount);
    //     next();
    //  }


    // Gobally Used Middleware 

    // app.use(function Countrequest(req,res,next){
    //         requestcount++;
    //         console.log('Count --',requestcount);
    //         next();
    // })


    // app.get('/ride'  ,(req,res) => {
    //     return res.json({
    //         msg : " Riding Successfully the Only Rideeeeeeee",
    //         requestcount
    //     })
    // })
    // app.get('/ride1'  ,(req,res) => {
    //     return res.json({
    //         msg : " Riding Successfully the First Rideeee ",
    //     })
    // })

    // app.listen(PORT,() => {
    //     console.log(` Server Running on  PORT yoo `)
    // })


// *********

















// -- Connecting  Db -


// Cluster Created
// Db name Entered 


// try {
//         const Db = mongoose.connect(process.env.DATABASE_URL , {
//             dbName : 'Connection'
//         }).then(con => {
//             console.log('Db name is -',con.connection.name)
//             console.log('HOst is -',con.connection.host)
//         })

// } catch (error) {
//         console.log('err -',error);
// }

// signup --->  create account , hash pass , 
// login --> check email|pass ->  verify pass , create token  


// app.post('/signup' , async(req,res) => {
//     try {
//         const Body = req.body;
//         console.log('Body is -',Body);
//                                                 // Applied Zod here  
//         const Schema = zod.object({
//             email    : zod.string().email(),
//             password : zod.string().min(8 , {message : " Must be more than 8 character "})
//         })

//         const Response = Schema.safeParse(Body);            // success true - parsed 
//         console.log('check valid -',Response);

//         if(!Response.success){
//             return res.status(411).json({
//                 msg : "Wrong Inputs"
//             })
//         }

//         const { data : {email , password } } = Response;
//         console.log('email | pass -',{email,password});

//         const Finduser = await UserModel.findOne({ email : email });
//         console.log('FinduSER -',Finduser);

//         if(Finduser){
//             return res.status(411).json({
//                 msg : "User Already Exist"
//             })
//         }

//         const hashpass = await bcrypt.hash(password,10);

//         const CreateUser = await UserModel.create({
//             email ,
//             password : hashpass
//         });
//         console.log('Created User -',CreateUser);
//         return res.status(200).json({
//             CreateUser,
//             msg : "User Created"
//         })


//     } catch (error) {
//         console.log('erro -',error);
//         return res.status(404).json({
//             msg : "Signup Error"
//         })
//     }

// })



// const jwtSecret = '1234';


// app.post('/login' , async(req,res)  => {
//     try {
   
//         const { email , password } = req.body;

//         if(!email || !password){
//             return res.status(411).json({
//                 msg : 'Invalid Credentails'
//             })
//         } 

//         const Finduser = await UserModel.findOne({ email : email }).select('+password');
//         console.log('FinduSER -',Finduser);

        
//         if(Finduser){
//             const Getpass = await bcrypt.compare(password,Finduser.password);
//             console.log('GetPass -',Getpass)

//             if(Getpass){
//                 const NewToken =  jwt.sign({email : email},jwtSecret);
//                 console.log('Created Token -',NewToken);

//                 return res.status(200).json({
//                 success : true,
//                 NewToken,
//                 msg : "Logged In"
//                 });
//             }

//         }else{
//             return res.status(411).json({
//                 msg : "User not Found"
//             })
//         }

//         } catch (error) {
//             return res.status(500)
//         }
// })




// app.listen(PORT,() => {
//     console.log(` Server Running on  PORT `)
// })


    // const Db = mongoose.connect(process.env.DATABASE_URL).then(conn => {
    //     console.log('DB Name is -',conn.connection.name)
    //     console.log('Connection is -',conn.connection.host)
    // });


// const ALL_USERS = [
//     {
//       username: "harkirat@gmail.com",
//       password: "123",
//       name: "harkirat singh",
//     },
//     {
//       username: "raman@gmail.com",
//       password: "123321",
//       name: "Raman singh",
//     },
//     {
//       username: "priya@gmail.com",
//       password: "123321",
//       name: "Priya kumari",
//     },
// ];


// const secretkey = '1234' 

// app.post('/signin' , (req,res) => {
//      const  username = req.body.username;
//      console.log('username -',username);
//      const  password = req.body.password;
//      console.log('password -',password);

//      if(username && password){
//         const Token  = jwt.sign({username : username } , secretkey);
//         console.log('token is -',Token);
//         if(!Token){
//             return res.status(401).json({
//                 msg : "Not Authorized"
//             })
//         }else{  
//             return res.json({
//                 Token
//             });
//         }
//      }else{
//         return res.status(403).json({
//             msg : " Invalid User Credentails "
//         })
//      }

// });


//  function getusers(name){
//    return ALL_USERS.filter(data => {
//         if(data.username === name){
//             return false;
//         }else{
//             return true;
//         }
//     })
//  }

// app.get('/getdata' , (req,res) => {

//     const token = req.headers.authorization;
//     console.log(' auth token is -',token);

//     try {
//         const checkToken = jwt.verify(token,secretkey);
//         console.log('chectoken -',checkToken);

//        const users =  getusers(checkToken.username);
//        console.log('users -',users);

//         return res.json({
//           users,
//           msg : "Token Matched"
//         });

//     } catch (error) {   
//         console.log(error);
//         return res.status(403).json({
//             msg : "Invalid Token"
//         })
//     }

// })


// let users = [{
//     name : 'Amandeep',
//     kidneys : [{
//         healthy : true
//     }]
// }]
// app.use(express.json());


// Middlewares -



// function checkInputValidation(req,res,next){
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if(username != 'admin' || password != 'admin'){
//         return res.status(411).json({
//          msg : "Wrong Inputs"
//       })
//     }
//     console.log('valid 1-')
//     next();
// }



// function checkQuery(req,res,next){
//     const QueryId = req.query.kidney;

//     if(QueryId != 2){
//         return res.status(411).json({
//             msg : 'Wrong Quantity..'
//         })
//     }
//     console.log('valid 2-')
//     next();
// }


// 

// app.get('/checking' , checkInputValidation , checkQuery , (req,res) => {

//     console.log('completed all middlewares -')

//     const kidneys = req.body.kidneys;
//     console.log('total kid -',kidneys);

//     const response = schema.safeParse(kidneys);         // using zod
//     if(!response.success){  
//         res.status(411).json({
//             msg : " Input is Wrong "
//         })
//     }else{
//         res.send({
//             msg : "Completed.."
//         })
//     }
// })/



// -----


// const Schema = zod.object({
//     email    : zod.string().email(),
//     password : zod.string().min(8)
// })



// app.get('/checking' , (req,res) => {

//     const Body = req.body;
//     console.log('Body  -',Body);

//     const Response = Schema.safeParse(Body);        // Parsing whole body having obj
//     console.log('Resp -',Response); 

//     if(!Response.success){
//         return res.status(411).json({
//             msg : "Wrong Inputs"
//         })
//     }

//     res.status(200).json({
//         msg :' Obj Done'
//     })

// })




// app.get('/',(req,res) => {
//     let Totalkidneys = users[0].kidneys;
//     let HealthyKidneys = 0;
    
//     for (let i = 0; i < Totalkidneys.length; i++) {     
//         if(Totalkidneys[i].healthy){
//             HealthyKidneys = HealthyKidneys + 1;
//         }
//     }

//     let UnHealthyKidneys = Totalkidneys.length - HealthyKidneys;
//     console.log(' UnHealthykid -',UnHealthyKidneys);

//     res.json({
//         Totalkidneys,
//         HealthyKidneys,
//         UnHealthyKidneys,
//     })
// });


// app.post('/post' , (req,res) => {
//     const isHealthy = req.body.isHealthy;
//     console.log('ishealthy -',isHealthy);
//     users[0].kidneys.push({
//         healthy : isHealthy
//     });
    
//     res.json({
//         msg : 'Done'
//     })
// })


// app.put('/edit' , (req,res) => {
//     let Totalkidneys = users[0].kidneys;
//     for (let i = 0; i < Totalkidneys.length; i++) {
//         users[0].kidneys[i].healthy = false;
//     }
//     res.json({
//         msg : "Edited"
//     })

// })


// app.delete('/delete' , (req,res) => {
//     let Totalkidneys = users[0].kidneys;
//     users[0].kidneys  = ""

//     res.json({
//         msg : "Deleted"
//     })
// })


// Normal Input validation

// app.get('/checkup' , (req,res)  => {
//     const username = req.headers.username;
//     const password = req.headers.password;

//     const QueryId = req.query.kidney;
//     console.log('Queryid -',QueryId);

//     if(username != 'admin' || password != 'admin'){
//             return res.status(411).json({
//                 msg : "Wrong Inputs"
//             })
//     }
    
//     if(QueryId != 2){
//         return res.status(411).json({
//             msg : 'Wrong Quantity..'
//         })
//     }

//   res.send("Health is Gooooodd !!");
// })



















// app.get('/checking',(req,res) => {
//     res.send(' Checking now  ')
// })

// app.post('/posting' , (req,res) => {
//     console.log('Posting -',req.body);

//     console.log('Query is -',req.query);        
//     res.json({
//         msg : " Posting Data "
//     })
// })

// app.listen(4000 , () => {
//     console.log('PORT id Running ')
// })
