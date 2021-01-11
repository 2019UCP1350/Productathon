const express=require('express');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const User=mongoose.model("User");

const router=express.Router();

router.post('/signup',async (req,res)=>{ 
    try{
		const user=new User({email:req.body.email,password:req.body.password,level:req.body.level,username:req.body.username});
		await user.save();
		const token=jwt.sign({userId:user._id},"MY_SecretString"); 
		res.send({token,level:req.body.level,username:req.body.username,emial:user.email});
	}catch(err){
		return res.status(422).send(err.message); 
	}
});

router.post('/Osignup',async (req,res)=>{ 
    try{
		const user=new User({email:req.body.email,password:req.body.password,level:req.body.level,username:req.body.username});
		await user.save();
		res.send({level:req.body.level,username:req.body.username,email:user.email});
	}catch(err){
		return res.status(422).send(err.message); 
	}
});

router.post('/signin',async (req,res)=>{
	const {email,password}=req.body;
	if (!email || !password )
		return res.status(422).send({error: 'Must provide an email or password '});
	const user=await User.findOne({email});
	if (!user)
		return res.status(422).send({error:"Invalid email or password"});
	try{
		await user.comparePassword(password);
		const token=jwt.sign({ userId:user._id},"MY_SecretString");
		res.send({token,level:user.level,username:user.username,email:user.email});
	}catch(err){
		return res.status(422).send({error:"Invalid email or password"});
    }
});

router.post('/Osignin',async (req,res)=>{
	const {email}=req.body;
	if (!email)
		return res.status(422).send({error: 'Must provide an email '});
	const user=await User.findOne({email});
	if (!user)
		return res.status(422).send({error:"Invalid email or password"});
	try{
		res.send({level:user.level,username:user.username,email:user.email});
	}catch(err){
		return res.status(422).send({error:"Invalid email or password"});
    }
});

router.post("/update",async (req,res)=>{
	const {email,level}=req.body;
	User.updateOne({email:email},{level:level},(error,result)=>{
		if (error){
			console.log(error);
			return res.status(422).send({error:"Something went Wrong"});
		}
		return res.send({level:result.level});
	});
});

module.exports=router;