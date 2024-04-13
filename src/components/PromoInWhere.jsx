import React, { useState } from 'react';
import AddressBox from './AddressBox';
import './StyleSheet.css';

function PromoInWhere() {
    const [addressValue, setAddressValue] = useState('Chưa có vị trí...');

    return (
        <>
            <div className="container-sm">
                <AddressBox setAddressValue={setAddressValue} />
                <h2>Ưu đãi GrabFood tại  
                <span className='addr'>   {addressValue}</span></h2>
            </div>
        </>
    );
}

export default PromoInWhere;
