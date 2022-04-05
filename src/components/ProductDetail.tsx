import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypeSelector'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from './Header'




export const ProductDetail: React.FC= () => {

    const {id} = useParams()
    const {product, loading, error} = useTypedSelector(state => state.productDetail)
    const {user} = useTypedSelector(state => state.user)
    const {fetchProductDetail} = useActions()
    const navigate = useNavigate()


    useEffect(() => {
      fetchProductDetail(id)
    }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }  

  if (error) {
    return <div style={{margin: "25%"}}>
      <h1>{error}</h1>
      <button type="button" onClick={() => navigate('/')} className="btn btn-danger">На главную </button>
    </div>
  }

  return (
    <div>
      <Header/>
        <div className="card mb-1" style={{backgroundColor: "transparent", border: "None"}}>
    <img style={{height: "500px", width: "500px"}} src="/img/qq.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Title - {product.title}</h5>
    <p className="card-text">Factory - {product.factory}</p>
    <p className="card-text">Gender - {product.gender}</p>
    {!product.price.discount? <p className="card-text">Price - {product.price.price}грн.</p>: <s><p className="card-text">Price - {product.price.price}грн.</p></s>}
    {product.price.discount? <p style={{color: "red"}} className="card-text">New Price - {product.price.new_price}грн.</p>: <></>}
    {product.price.discount? <p style={{color: "red"}} className="card-text">Discount - {product.price.discount}%</p>: <></>}
    <p className="card-text">Season - {product.season}</p>
    <p className="card-text">Comments:</p>
    {!product.review.length? <div style={{marginLeft: "7%"}}>Комментарии отсутвуют</div>: <></>}
    {product.review.map((w, i) => 
        <div className="card text-dark bg-light mb-3" style={{maxWidth: "18rem", marginLeft: "5%"}}>
        <div className="card-header">{w.username}</div>
        <div className="card-body">
          <p className="card-text">{w.text}</p>
        </div>
      </div>
    )}
  </div>
 {user.username? 
 
  <div>
    <br />
    <div>Оставьте Комментарии</div>
  <div style={{width: "50%"}} className="form-floating mb-1">
  <input  className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label >Username</label>
</div>
<div style={{width: "50%"}} className="form-floating">
  <input className="form-control" id="floatingPassword" placeholder="Password"/>
  <label >Text</label>
  </div>
  <button style={{marginTop: "1%", marginLeft: "41.7%"}} type="button" className="btn btn-outline-primary">Отправить</button>
</div>:
<></>}
</div>
    </div>
  )
}
