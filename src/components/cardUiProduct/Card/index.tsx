import { useEffect } from 'react'
import { Div } from './styles'

interface cardProps {
  name: string
  github: string
  local: string
  instagram: string
}

export default function Card(props: cardProps) {
  return (
    <>
      <Div>
        <div className="product-card">
          <div className="product-image">
            <img
              src={
                props.local == ''
                  ? 'https://via.placeholder.com/150'
                  : props.local
              }
              alt="Imagem do Produto"
            />
          </div>
          <div className="hr"></div>
          <div className="product-info">
            <h2 className="product-name">{props.github}</h2>
            <div className="product-rating">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <span className="rating-count">(4.0)</span>
            </div>
            <p className="product-price">R$ {props.name}</p>
          </div>
          <div className="product-buttons">
            <button className="buy-button">Adquirir</button>
            <button className="favorite-button">
              <i className="far fa-heart"></i>Favoritar
            </button>
          </div>
        </div>
      </Div>
    </>
  )
}
