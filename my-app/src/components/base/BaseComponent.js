import React from 'react';
import Menu from './Menu';
import Main from './Main';
function BaseComponent() {
    return (
        <div>
            <Menu />
            <Main />
        </div>
    );
}

export default BaseComponent;