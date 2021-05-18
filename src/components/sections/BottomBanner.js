import React from 'react';

  function BottomBanner ({title,children,content}) {
    return (
        <div className="BottomBanner text-center">
            <h1 className='text-bold'>{title}</h1>
            <p>{content}</p>
            {children}
        </div>
    );
};

export default BottomBanner;