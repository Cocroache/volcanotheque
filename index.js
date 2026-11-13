import express from "express"

const app = express();
const port = 3000

app.get ("/",(req,res)  => {
res.send("Oui c'est bien icic que tourne sa darone")
})

app.listen(port, () =>{
    console.log(`Sa mère tourne sur ${port}`);
    
})