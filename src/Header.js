import React from 'react';

import './Header.css';

const header = props => {

    return <header>
        <p>header
            <button onClick={props.switch}>light {props.label}</button>
        </p>
    </header>;
};

export default header;