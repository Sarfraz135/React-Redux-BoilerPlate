const INITIAL_STATE ={
    username : "Sarfraz",
    email:"sarfrazeducation2019@gmail.com",
   
}

export default (state = INITIAL_STATE,action ) =>{
    console.log("auth_action =>",action)
    return state;
}