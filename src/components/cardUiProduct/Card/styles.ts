import styled from 'styled-components'

export const Div = styled.div`
/* Estilos gerais */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

/* Estilos para todos os dispositivos */
.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
transition: 0.5s all;
}

.product-card:hover{
  transition: 0.5s all;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.0);
}

.product-image {
  width: 100%;
  height: 300px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.hr{
  border: 1px solid #ccc;
  margin-top: 5px;
  margin-bottom: 5px;
}

.product-info {
  padding: 10px;
  background-color: #f8f8f8;
}

.product-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
}

.product-rating {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.rating-count {
  margin-left: 10px;
  font-size: 1.2rem;
  color: #666;
}

.stars {
  color: #ffd700;
  font-size: 1.2rem;
}

.product-price {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 10px;
}

.product-price-old{
  text-decoration: line-through;
}

.product-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
}

.buy-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

.favorite-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

.favorite-button i {
  margin-right: 10px;
  color: #ff69b4;
}

.favorite-button:hover i {
  color: #dc3545;
}

@media (hover: hover) {
  .buy-button:hover {
    background-color: #0069d9;
  }

  .favorite-button:hover i {
    color: #dc3545;
  }
}

/* Estilos para telas pequenas (até 767px) */
@media (max-width: 767px) {
  .product-card {
    flex-direction: column;
  }

  .product-image {
    height: auto;
  }

  .product-buttons {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }

  .buy-button {
    width: 100%;
    margin-bottom: 10px;
  }
}
`
