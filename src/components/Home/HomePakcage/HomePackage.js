import React from 'react';

const HomePackage = (props) => {
    const {package_name}=props.tourPackage;
    return (
        <div>
            <h3>{package_name}</h3>
        </div>
    );
};

export default HomePackage;