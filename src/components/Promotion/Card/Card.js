import React from 'react';
import "./Card.css";

const PromotionCard = ({promotion}) =>(
<div className="promotion-card">

 <img src={promotion.imageUrl} className="promotion-card__image"/> 
  
 <div className="promotion-card__info">  

<h1 className="promotion-card__title">{promotion.title}</h1>

<span className="promotion-card__price">R${promotion.price}</span>

<footer className="promotion-card__footer">

    {promotion.coments.length > 0 && (
        <div className="promotion-card__coments">"{promotion.coments[0].coments}"</div>
    )}
    <div className="promotion-card__comentents-count">
        
        {promotion.coments.length > 1 ? 'comentarios': 'comentario'}
        
        </div>
    <a href={promotion.url} target="_blank" className="promotion-card__link">
        Ir para o site
    </a>
</footer>

 </div>
</div>

);

export default PromotionCard;