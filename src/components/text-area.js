import React from 'react';

export const TextArea = ({
    id,
    label,
    config,
    value,
    onChange
}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea
                type="text"
                name={id}
                onChange={onChange}
                rows={config.rows}
                cols={config.cols}
                value={value}
            />
        </div>
    )
};
