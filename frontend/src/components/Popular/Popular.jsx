import react from 'react'
import './Popular.css'
import data_product from '../assests/data'

const Popular = () => {
return (
    <div className='popular'>
        <h1>POPULAR IN IPHONE</h1>
        <hr />
        <div className='popular-item'>
            {data_product.map((item)=>{
                return <item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
            })}

        </div>

    </div>
)
}

export default Popular