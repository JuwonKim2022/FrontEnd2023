import React from 'react';

export default function Avartar({image, isNew}) {
  return (
    <div className='avatar'>
      <img 
        className='photo' 
        src={image} 
        alt="sakura" />
        {isNew && <span className='newTag'>new</span>}
    </div>
  );
}

