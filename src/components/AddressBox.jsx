import React, { useState } from 'react';
import "./StyleSheet.css"

function AddressBox({ setAddressValue }) {
    const [tempAddress, setTempAddress] = useState('');

    const handleInputChange = (event) => {
        setTempAddress(event.target.value);
    }

    const handleSearch = () => {
        setAddressValue(tempAddress); // Gửi giá trị tempAddress lên PromoInWhere
    }

    return (
        <>
            <div className="container">
                <div className="col-md-1"  >
                    <div className="container-address-box p-3 mb-5 rounded">
                        <div className="wrap-input">
                            <h5 id="af">Good Afternoon</h5>
                            <h1 id="where">Where should we deliver your food today?</h1>
                            <div>
                                <img id="location" src="./src/assets/icon-locate.png" alt="Location" />
                                <input 
                                    id="search-input" 
                                    placeholder="Nhập địa chỉ của bạn"
                                    type="text"
                                    value={tempAddress}
                                    onChange={handleInputChange}
                                />
                                <img id="des" src="./src/assets/icon-geo-button.svg" alt="Geo Button" />
                            </div>
                            <div>
                                <button type="button" className="btn btn-search" onClick={handleSearch}>Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddressBox;
