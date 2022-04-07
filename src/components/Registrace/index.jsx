import React, { useState } from "react";

export const Registrace = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

    const [userName, setUserName] = useState('')
    // console.log('změna v poli')
    // console.log(text)
   

	return ( 
		<form onSubmit={handleSubmit} >
            
			<label>
				Uživatelské jméno:
				<input value={userName} onChange={(event) => {setUserName(event.target.value)}} type="text" />
			</label>
            
			<button type="submit">Registrovat</button>
            {userName ? "" : <p>Uživatelské jméno je povinný údaj</p>}
            
            
		</form>
	);
    
};