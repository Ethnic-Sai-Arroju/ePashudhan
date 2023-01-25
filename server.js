const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


mongoose.connect("mongodb+srv://admin:admin123@cluster0.jkxv5nr.mongodb.net/?retryWrites=true&w=majority").catch((err) => console.log(err));


const mySchema = mongoose.Schema({
    name:String,
    address:String,
    district:String,
    state:String,
    email:String,
    password:String
})

const Post = mongoose.model("Post",mySchema);


app.get("/",(req,res) => {
    res.send("Express is running") 
})

app.post("/signup",(req,res) =>{
    Post.create({
        name:req.body.name,
        address:req.body.address,
        district:req.body.district,
        state:req.body.state,
        email:req.body.email,
        password:req.body.password
    })

    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
})

app.listen(3001, function() {
    console.log("Server is Running");
})