import React from 'react';

function SectionImageLeft ({title,img, children,id, content}) {
    return (
        <div className="container-fluid my-5" id={id}>
            <div className='row'>

            <div className='col-lg-7 col-md-12 col-sm-12 col-12' >
                    <img className='img-left' src={require(`../assets/${img}.jpg`).default} style={{height:'100%', width:'100%'}} />
                     </div>
                
                <div className='col-lg-7 col-md-12 col-sm-12 col-12 align-self-center text text-linetrough'>
                <span className="pill text-bold mt-md-2 mt-sm-2 mt-2">SOLD OUT</span>
<h1 className='text-bold'> {title}</h1>
<p className='paragrapgh'>{content}</p>  
{children}             
</div>
                
                 
            </div>
            
        </div>
    );
};

export default SectionImageLeft;