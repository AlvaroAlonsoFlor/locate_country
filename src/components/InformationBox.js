import React from 'react';
import LocationImage from './LocationImage';
import OtherInfo from './OtherInfo';
import './info-box.css'

const InformationBox = (props) => {
    return (
        <div className='info-box'>
            <LocationImage imageUrl={props.imageUrl}/>
            <OtherInfo country={props.currentCountry}/>
        </div>
        
    )
}

export default InformationBox;