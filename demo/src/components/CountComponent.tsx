import React from 'react';

function CountComponent() {
  let count = 0; 

  function handleClick() {
    count = count + 1;
    document.getElementById('count-input').value = count; // opdaterer input feltet
  }

  return (
    <div>
      <label>
        Vores tæller: 
        <input id="count-input" type="text" defaultValue="0" readOnly />
      </label>
      <button onClick={handleClick}>Tæl op</button>
    </div>
  );
}

export default CountComponent;
