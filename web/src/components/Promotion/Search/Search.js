import React, { useEffect, useState } from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './search.css'
const PromotionSearch  = () => {
    const params = {};
    if(search){
      params.title= search;
      
    }

    const [promotions, setPromotions] = useState([])

    const [search, setSearch] = useState('');

    useEffect(() => {
      axios.get('http://localhost:5000/promotion?_embed=coments')
      .then((response) => {
        setPromotions(response.data)
    });

}, [search]);

return (
    <div className="promotion-search">
<header className="promotion-search__hearder">
<h1>Promo show</h1>
<Link to="/create">Nova promoção</Link>
</header> 
<input 
type="search"
 className="promotion-search__input"
 placeholder="Buscar"
 value={search}
 onChange={(ev)=> setSearch(ev.target.value)}
/>

    {promotions.map((promotion) => (
  <PromotionCard promotion={promotion}/>
    ))}   
  </div>
);
    };

    export default PromotionSearch;