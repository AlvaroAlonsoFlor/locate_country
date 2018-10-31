import React from 'react';

const CountriesDropdown = (props) => {

    const options = props.countries.map((country, index) => {
        return (
         <option value={index} key={country.numericCode}>{country.name}</option>
        );
    })

    function handleChange(event) {
        props.onChangeCountry(event.target.value);
    }

    return(
        <select onChange={handleChange} defaultValue="default">
            <option disabled value="default">Choose a country</option>
            {options}
        </select>
    )
    
}

export default CountriesDropdown;