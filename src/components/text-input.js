import React from 'react';

export const TextInput = ({
    id,
    label,
    config,
    value,
    onChange
}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                name={id}
                value={value}
                onChange={onChange}
                maxLength={config.maxLength || 524288}
                placeholder={config.placeholder}
            />
        </div>
    )
};
