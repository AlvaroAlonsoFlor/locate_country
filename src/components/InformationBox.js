import React from 'react';
import LocationImage from './LocationImage';
import OtherInfo from './OtherInfo';

const InformationBox = (props) => {
    return (
        <div>
            <LocationImage imageUrl={props.imageUrl}/>
            <OtherInfo country={props.currentCountry}/>
        </div>
        
    )
}

export default InformationBox;