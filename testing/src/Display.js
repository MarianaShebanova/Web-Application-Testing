import React  from 'react';

function Display(props) {
    return (
        <div className="Display">
            <h2>Balls</h2>
            <div>{props.balls}</div>
            <h2> Strikes</h2>
            <div>{props.strikes}</div>
        </div>
    );
}

export default Display;
