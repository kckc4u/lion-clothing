import React from 'react';

import './form-input.style.scss';

const FormInput = ({handleChange, label, ...otheAtributes}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otheAtributes} />
            {
                label && (<label className={`${otheAtributes.value.length ? 'shrink' : '' } form-input-label`}>{label}</label>)
            }
        </div>
    )
}

export default FormInput
