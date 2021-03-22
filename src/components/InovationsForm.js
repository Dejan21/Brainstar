import React from 'react';
import {IoArrowForward} from 'react-icons/io5';

function InovationsForm ({handleClose, handleSubmit})  {
    return (
        <form onSubmit={handleSubmit}>
            <div className='Form'>
                <label htmlFor='name'>Име и Презиме(Задолжително)</label>
                <input
                type='text'
                id='name'
                placeholder="Внесете Име и Презиме" 
                required />
                <br>
                </br>
                <label hmtlFor='Email'>Emal(задожително)</label>
                <input 
                type='text'
                id='name'
                placeholder="Внесете Емаил"
                required />
            </div>

            <div className='form'>
                <button onClick={handleClose}>ИСКЛУЧИ СЕ</button>
                <button>
                <IoArrowForward /> ИСПРАТИ ФОРМА
                </button>
                
            </div>

        </form>
    )
}

export default InovationsForm;