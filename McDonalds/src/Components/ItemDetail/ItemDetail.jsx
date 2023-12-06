import React from 'react'

const ItemDetail = ({item}) => {

  return (
    <div className='row'>
        <div className='col-md-4 iifset-md-4'>
        <img src={item.imagen} className='img-fluid' alt={item.imagen} />
        <h4>{item.modelo} </h4>
        <p>{item.marca}{item.descripcion}</p>
        <p> $ {item.precio} </p>

        </div>


    </div>
  )
}

export default ItemDetail