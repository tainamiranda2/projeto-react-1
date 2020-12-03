import React from 'react';
import "./Card.css";

const PromotionCard = ({promotion}) =>(
<div className="promotion-card">

 <img alt={promotion.title}
 className="promotion-card__image"
  src={promotion.imageUrl}/> 
  
 <div className="promotion-card__info">  

<h1 className="promotion-card__title">
    {promotion.title}
</h1>

<span className="promotion-card__price">R${promotion.price}</span>

<footer className="promotion-card__footer">

    {promotion.coments.length > 0 && (
        <div className="promotion-card__coments">"{promotion.coments[0].coment}"</div>
    )}
    <div className="promotion-card__coments-count">
        
 {promotion.coments.length > 1 ? 'comentarios': 'comentario'}
        
        </div>
    <a 
    href={promotion.url}
     target="_blank"
     rel="noopener noreferrer"
      className="promotion-card__link">
        Ir para o site
    </a>
</footer>

 </div>
</div>

);

export default PromotionCard;