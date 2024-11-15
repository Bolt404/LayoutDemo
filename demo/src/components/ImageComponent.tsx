import React from 'react'; 

function ImageComponent( imgSrc ) {
  return (
    <div>
      <img src={imgSrc} alt="En hund" width="400" height="300" />
    </div>
  );
}

export default ImageComponent;