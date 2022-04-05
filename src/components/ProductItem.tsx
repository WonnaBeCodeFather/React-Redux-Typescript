import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IItems } from 'types/productList';
import "./productItem.css"




interface BaseProps {
  props: IItems
}


export const ProductItem: React.FC<BaseProps> = ({props}) => {

const navigate = useNavigate()


const go_productDetail = (id: string) => {
  navigate(`/product/${id}`)
}

  return (
    
      <div className='item'>
    <div className="card" style={{width: "18rem"}}>
  <img src="/img/qq.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Gender - {props.gender}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Factory - {props.factory}</li>
    <li className="list-group-item">Season - {props.season}</li>
    {
    !props.price.discount?
      <li className="list-group-item">{`Price - ${props.price.price} грн.`}</li>:
     <div>
       <li className="list-group-item"><s>{`Price - ${props.price.price} грн.`}</s></li>
       <li style={{color:"red"}} className="list-group-item">New Price - {props.price.new_price} грн.</li>
       <li style={{color:"red"}} className="list-group-item">Discount - {props.price.discount}%</li>
     </div>
     }
  </ul>
  <div className="card-body">
    <button type="button" onClick={() => go_productDetail(String(props.id))} className="btn btn-outline-secondary">Detail</button>
  </div>
</div>
</div>
  )
}
