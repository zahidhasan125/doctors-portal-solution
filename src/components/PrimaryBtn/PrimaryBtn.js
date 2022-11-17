import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button className="btn bg-gradient-to-r from-secondary to-primary border-0 text-base-100">{children}</button>
    );
};

export default PrimaryBtn;