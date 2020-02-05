import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Teams from './Teams';



ReactDOM.render(
    <div>
        <Teams team="TL"/>
        <Teams team='TS'/>
        
    </div>,
    document.querySelector("#container")
);


