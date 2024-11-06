import React from 'react';
import './Offers.css';
import exclusive from '../assets/exclusive.png'


const Offers = () => {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY BEST SELLERS PRODUCTS</p>
                <button>check now</button>

            </div>
            <div className='offers-right'>
                <img src ={exclusive} alt="" />


            </div>
            
        </div>
    )
}

export default Offers;