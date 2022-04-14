import React, { useState } from "react";

export const Registrace = () => {
	
    const [userName, setUserName] = useState('')
    // console.log('změna v poli')
    // console.log(text)
   
	const [country, setCountry] = useState('Česká republika')
	const [termsAccepted, setTermsAccepted] = useState()

	console.log(`Registrován nový uživatel ${userName} ze země ${country}`);

	const handleSubmit = (event) => {
		event.preventDefault();
	};

// 	return ( 
// 		<form onSubmit={handleSubmit} >
            
// 			<label>
// 				Uživatelské jméno:
// 				<input value={userName} onChange={(event) => {setUserName(event.target.value)}} type="text" />
// 			</label>
            
// 			<button type="submit">Registrovat</button>
//             {userName ? "" : <p>Uživatelské jméno je povinný údaj</p>}

// 			<label>
// 				Země původu:
// 			<select value={country} onChange={ (event) => {setCountry(event.target.value)}}>
// 				<option value="Chorvatsko">Chorvatsko</option>
// 				<option value="Česká republika">Česká republika</option>
// 				<option value="Polsko">Polsko</option>
// 				<option value="Slovenská republika">Slovenská republika</option>
// 			</select>
// 			<p>Vybraná země je <strong>{country}</strong></p>
// 			</label>
            
// 			<div className="form__checkboxArea">
// 			<label>
// 				<input 
// 					className="checkbox"
// 					type="checkbox"
// 					checked={souhlas}
// 					onChange={ (event) => {setSouhlas(event.target.value)}}
// 				/>
// 				Souhlasím s podmínkami
// 			</label>
// 			</div>

//     </form>
            
		
// 	);
    
// };

return (
    <form className="form" onSubmit={handleSubmit}>
      {userName !== '' ? (
        ''
      ) : (
        <div className="form__message">Uživatelské jméno je povinný údaj</div>
      )}
      <label>
        Uživatelské jméno:
        <input
          className="form__input"
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
        />
      </label>

      <label>
        Země původu:
        <select
          className="form__select"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
          value={country}
        >
          <option value="Česká republika">Česká republika</option>
          <option value="Chorvatsko">Chorvatsko</option>
          <option value="Polsko">Polsko</option>
          <option value="Slovenská republika">Slovenská republika</option>
        </select>
      </label>

      <div className="form__checkboxArea">
        <label>
          <input
            className="form__checkbox"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={(event) => {
              setTermsAccepted(event.target.checked);
            }}
          />
          Souhlasím s obchodními podmínkami
        </label>
      </div>

      <button
        className="form__button"
        type="submit"
        disabled={userName === '' || !termsAccepted}
      >
        Registrovat
      </button>
    </form>
  );
};