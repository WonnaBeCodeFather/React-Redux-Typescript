
import { useTypedSelector } from 'hooks/useTypeSelector';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FetchToken } from './api/loginapi';


const formData = new FormData();
formData.append("username", "user")
formData.append("password", "user")



export const Login: React.FC = () => {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [isError, setIsError] = useState(false)
const {error, user, loading} = useTypedSelector(state => state.user)


const navigate = useNavigate()


const getLoginToken = async (e: React.SyntheticEvent) => {
  try {
    e.preventDefault();
    formData.append("username", username)
    formData.append("password", password)

    const response = await FetchToken(formData)
    localStorage.setItem("token", response.data.access_token)
    setIsError(false)
    navigate('/')
  } catch (error) {
    setIsError(true)
  }
}


  return (
    <div style={{margin: "20% 30%"}}>
      <form>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input onChange={(e) => setUsername(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text">{isError?
    <span style={{color: "red"}}>Wrong username or password</span>: 
    "We'll never share your email with anyone else."}</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3 form-check">
  <button onClick={(e) => getLoginToken(e)} style={{margin: "0px 40 %"}} type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}
