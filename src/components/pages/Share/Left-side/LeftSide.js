import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categorise,SetCategorise]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/news-categorise')
        .then(res => res.json())
        .then(data => SetCategorise(data))
        
    },[])
    return (
        <div>
            <h2>All Categorise : {categorise.length}</h2>
           <div>
           {
                categorise.map(category => <p key={category.id}>
                    <Link>{category.name}</Link>
                </p>
                )
            }
           </div>
        </div>
    );
};

export default LeftSide;