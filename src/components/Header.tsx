import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypeSelector'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserActionTypes } from 'types/user'
import "./productItem.css"

export const Header: React.FC = () => {

  const navigate = useNavigate()
  const {loading, user, error} = useTypedSelector(state => state.user)
  const {FetchUserData} = useActions()
  const dispatch = useDispatch()

  useEffect(() => {
    FetchUserData()
  }, [])


  const goHome = () => {
    navigate('/')
  }

  const goLogin = () => {
    navigate('/login')
  }

  const goLogout = () => {
    dispatch({type: UserActionTypes.FETCH_USER_LOGOUT})
    localStorage.removeItem("token")
    
  }

  return (
    <div>
        <span onClick={() => goHome()} className='dixi_font'>DIXI</span>
        {!user.username?
         <span onClick={() => goLogin()} className='login'><button type="button" className="btn btn-outline-primary">Login</button></span>:
         <span onClick={() => goLogout()} className='login'><button type="button" className="btn btn-outline-primary">Logout</button></span>}
        
        <span className='user-name'>{user.username}</span>
    </div>
  )
}
