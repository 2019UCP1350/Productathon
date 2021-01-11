import CreateDataContext from "./CreateDataContext";
import Api from "../api/api";

const AuthReducer=(state,action)=>
{
	switch(action.type)
	{
		case "add_error":
			return {...state,errorMessage:action.payload}
		case "signup":
			return {errorMessage:'',token:action.payload.token,username:action.payload.username,level:action.payload.level,email:action.payload.email}
		case "signout":
			return {errorMessage:'',token:null,level:0,username:'',email:''}
		case "update":
			return {...state,level:action.payload.level};
		default:
			return state;
	}
};

const signin=(dispatch)=>{
	return async ({email,password,history})=>{
		try{
			const response=await Api.post("/signin",{email,password});
			console.log(response.data);
			await localStorage.setItem("token",response.data.token);
			await localStorage.setItem("username",response.data.username);
			await localStorage.setItem("level",response.data.level);
			await localStorage.setItem("email",response.data.email);
			dispatch({type:"signup",payload:response.data});
			history.push("/");
		}catch(err){
			dispatch({type:"add_error",payload:"Something went wrong with Login In"});
		}
	};
};

const Osignin=(dispatch)=>{
	return async ({token,email,username,history})=>{
		try{
			const response=await Api.post("/Osignin",{email});
			await localStorage.setItem("token",token);
			await localStorage.setItem("username",username);
			await localStorage.setItem("level",response.data.level);
			await localStorage.setItem("email",email);
			dispatch({type:"signup",payload:{token,level:response.data.level,username,email}});
			history.push("/");
			//console.log("finished login");
		}catch(err){
			//console.log(err.message,"Osignin");
			dispatch({type:"add_error",payload:"Something went wrong with Login In"});
		}
	};
};

const signup=(dispatch)=>{
	return  async ({email,password,username,level,history})=>{
		try{
			const response=await Api.post("/signup",{email,password,username,level});
			await localStorage.setItem("token",response.data.token);
			await localStorage.setItem("username",response.data.username);
			await localStorage.setItem("level",response.data.level);
			await localStorage.setItem("email",response.data.email);
			dispatch({type:"signup",payload:response.data});
			history.push("/");
		}catch(err){
			dispatch({type:"add_error",payload:"Invalid email or passsword"});
		}
	};
};

const Osignup=(dispatch)=>{
	return  async ({email,username,level,token,history})=>{
		try{
			await Api.post("/Osignup",{email,username,level,password:token});
			await localStorage.setItem("token",token);
			await localStorage.setItem("username",username);
			await localStorage.setItem("level",level);
			await localStorage.setItem("email",email);
			dispatch({type:"signup",payload:{token,username,level,email}});
			history.push("/");
		}catch(err){
			dispatch({type:"add_error",payload:"Invalid email or passsword or Use you are aldready registered"});
		}
	};
};

const error=(dispatch)=>{
	return (err)=>{dispatch({type:"add_error",payload:"Something Went wrong with"+err})};
}

const update=(dispatch)=>{
	return async ({email,level})=>{
		try{
			await Api.post("/update",{email,level});
			dispatch({type:"update",payload:{level}});
			await localStorage.setItem("level",level);
			//console.log("updated");
		}catch(err){
			//console.log(err,"not updated");
			dispatch({type:"add_error",payload:"Something Went Wrong"});
		}
	}
}

const tryLocalLogin=(dispatch)=>{
	return async ()=>{
		const token=await localStorage.getItem("token");
		const username=await localStorage.getItem("username");
		const level=await localStorage.getItem("level");
		const email=await localStorage.getItem("email");
		if (token){
			dispatch({type:"signup",payload:{token,username,level,email}});
		}
	};
}

const signout=(dispatch)=> async(history)=>{
	await localStorage.clear();
	dispatch({type:"signout"});
	history.push("/");
};

export const {Context,Provider}=CreateDataContext(AuthReducer,{signup,signin,update,signout,error,tryLocalLogin,Osignup,Osignin},{token:null,errorMessage:'',username:'',level:0,email:''});