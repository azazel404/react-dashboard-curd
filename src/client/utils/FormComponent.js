import React from 'react';
import classnames from 'classnames';


//FUNCTIONAL COMPONENT FORM LOGIN AUTH DAN FORM LAINNYA
export const TextFieldForm = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    return (
        <div className="form-group">
        <label>{label}</label>
            <input
                type={type}
                className={classnames('form-control', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};


//FUNCTIONAL COMPONENT FORM LOGIN AUTH DAN FORM LAINNYA
export const textAreaForm = ({
    name,
    placeholder,
    value,
    error,
    info,
    onChange
}) => {
    return (
        <div className="form-group">
            <textarea
                className={classnames('form-control', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};


//FUNCTIONAL COMPONENT FORM LOGIN AUTH DAN FORM LAINNYA
export const InputGroup = ({
    name,
    placeholder,
    value,
    error,
    icon,
    type,
    onChange
}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className={icon} />
                </span>
            </div>
            <input
                className={classnames('form-control', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

//FUNCTIONAL COMPONENT FORM LOGIN AUTH DAN FORM LAINNYA
export const SelectForm = ({ name, error, info, onChange, options }) => {
   
    return (
        <div className="form-group">
            <select
                className={classnames('form-control', {
                    'is-invalid': error
                })}
                name={name}
                onChange={onChange}
            >
            <option>Select Genre</option>
                {options}
            </select>
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
