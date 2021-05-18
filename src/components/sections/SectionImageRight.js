import React from 'react';

function SectionImageRight ({title,img, children,id, content}) {
    return (
        <div className="container-fluid my-5" id={id}>
            <div className='row'>
                <div className='col'>
<h1 className='text-bold'> {title}</h1>
<p className='paragrapgh'>{content}</p>  
{children}             
</div>
                <div className='col '>
                    <img className='img-left' src={require('../../assets/edukacija1.jpg')} style={{height:'100%', width:'100%'}} />
                     </div>
                 
            </div>
            
        </div>
    );
};

export default SectionImageRight;