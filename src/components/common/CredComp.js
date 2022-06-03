import React  from "react";

const CredComp =() =>{


    const login = e => {
        e.preventDefault();
        axiosWithAuth().post("https://backrecipes.herokuapp.com/api/auth/register", credentials)
          .then(res => {
            console.log('bk: Login.js: login: res: ', res)
            localStorage.setItem('token', res.config.data)
            props.history.push('/protected')
          })
          .catch(err => {
            console.error(err.response)
          })
      };

    return (
        <div>Register
        <form onSubmit={login}>
          <label for='username'>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <label for='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={credentials.department}
            onChange={handleChange}
          />
          <label for='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <label for='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={credentials.role}
            onChange={handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    )


}


export default (CredComp);