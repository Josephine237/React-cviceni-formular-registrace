import React, { useState } from "react";

export const Registrace = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

    const [userName, setUserName] = useState('')
    // console.log('změna v poli')
    // console.log(text)
   
	const [country, setCountry] = useState('Česká republika')

	const [souhlas, setSouhlas] = useState()

	return ( 
		<form onSubmit={handleSubmit} >
            
			<label>
				Uživatelské jméno:
				<input value={userName} onChange={(event) => {setUserName(event.target.value)}} type="text" />
			</label>
            
			<button type="submit">Registrovat</button>
            {userName ? "" : <p>Uživatelské jméno je povinný údaj</p>}

			<label>
				Země původu:
			<select value={country} onChange={ (event) => {setCountry(event.target.value)}}>
				<option value="Chorvatsko">Chorvatsko</option>
				<option value="Česká republika">Česká republika</option>
				<option value="Polsko">Polsko</option>
				<option value="Slovenská republika">Slovenská republika</option>
			</select>
			<p>Vybraná země je <strong>{country}</strong></p>
			</label>
            

			<label>
				<input 
					type="checkbox"
					checked={souhlas}
					onChange={ (event) => {setSouhlas(event.target.value)}}
				/>
				Souhlasím s podmínkami
			</label>
            
		</form>
	);
    
};