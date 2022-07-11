import React from 'react';

const Formcomp = () =>{

    const submitf =(e)=>{
        try{
            if(e !== undefined){
                props.handleSubmit(e);
            }
        }
    
    catch(e){
        console.log(e);
    }
}


    return (
        <form onSubmit={(e) =>{
            if(submitf(e) === undefined || submitf(e) === null){
              
              e.preventDefault();
              props.handleSubmit(e);
            }else{
              e.preventDefault();
              submitf(e)
            }
          }}>
            <label htmlFor='username'>
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username  || '' || undefined}
              onChange={inputChange}
            />
            <label htmlFor='password'>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={ password || '' || undefined}
              onChange={inputChange}
            />
            <label htmlFor='department'>
                Department
            </label>
            <input 
              type="text"
              name="department"
              value={department || '' || undefined}
              onChange={inputChange}
            />
            <label htmlFor='role'>
                Role
            </label>
            <input 
              type="text"
              name="role"
              value={ role ||'' || undefined}
              onChange={inputChange|| undefined}
            />
            <Link to={`/login/`}><button type="submit">Register</button></Link>
          </form>
    );
}

export default Formcomp

