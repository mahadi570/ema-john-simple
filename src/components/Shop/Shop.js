import React, { useState } from 'react';
import fakeData from '../../fakeData'

const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products] = useState(first10);
    return (
        
            <div>
                <h1>This is mine Website</h1>
                <h2>{products.length}</h2>
        <ul>
            {
            products.map(pd => <li>{pd.name}</li>)
            }
            
        </ul>
            </div>
    );
};

export default Shop;