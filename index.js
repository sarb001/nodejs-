import express from 'express';

const app = express();
const PORT = 4000;

let users = [{
    name : 'Amandeep',
    kidneys : [{
        healthy : true
    }]
}]
app.use(express.json());

// Middlewares -

function checkInputValidation(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != 'admin' || password != 'admin'){
        return res.status(411).json({
         msg : "Wrong Inputs"
      })
    }
    console.log('valid 1-')
    next();
}

function checkQuery(req,res,next){
    const QueryId = req.query.kidney;

    if(QueryId != 2){
        return res.status(411).json({
            msg : 'Wrong Quantity..'
        })
    }
    console.log('valid 2-')
    next();
}

app.get('/checking' , checkInputValidation , checkQuery , (req,res) => {

    console.log('completed all middlewares -')

    return res.json({
        msg : "At the End"
    })
    
})




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





app.listen(PORT,() => {
    console.log(` Server Running on  PORT `)
})
















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
