import React, { useEffect, useMemo } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { Header } from './Header';
import { ProductItem } from './ProductItem';
import "./productItem.css"
import { IItems } from "../types/productList"

export const ProductList: React.FC = () => {
    const {error, loading, product} = useTypedSelector(state => state.productList)
    const {fetchProducts} = useActions()
    const totalPage = useMemo(() => Math.ceil(product.total / 8), [product.total]) 


useEffect(() => {
    fetchProducts()
}, [])

if (loading) {
    return <h1>Loading</h1>
} if (error) {
    return <h1>{error}</h1>
}

const handleChangePage = (page: number) => {
    fetchProducts(page)
}



const renderPag = () => {
    const Nodes = []

    for(let page = 1; page <= totalPage; page++) {
        Nodes.push(
            <button
                key={page}
                type="button" 
                onClick={() => handleChangePage(page)}
                className={`btn ${product.page === page? 'btn-primary': 'btn-outline-secondary'}`}
            >
                {page}
            </button>
        )
    } 
    return Nodes
}


  return (
    <div><Header/>
        <div className='product-list'>{
        product.items?.map( (prod: IItems) =>
       <ProductItem key={prod.id} props={prod}/>)}</div>
       <div className='pag'>{renderPag()}</div>
       <div className="btn-group me-2" role="group" aria-label="First group">

  </div>
       </div>
    
  )
}
