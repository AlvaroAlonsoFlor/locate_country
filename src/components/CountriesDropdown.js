import React from 'react';

const CountriesDropdown = (props) => {

    const options = props.countries.map((country, index) => {
        return (
         <option value={index} key={country.numericCode}>{country.name}</option>
        );
    })

    return(
        <select onChange={''} defaultValue="default">
            <option disabled value="default">Choose a country</option>
            {options}
        </select>
    )
    
}

export default CountriesDropdown;