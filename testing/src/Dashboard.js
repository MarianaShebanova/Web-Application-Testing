import React from 'react';

export const addFoul = strikes => {
    let res = 0;
    if (strikes === 0) {
        res = 1;
    } else if (strikes === 1) {
        res = 2;
    } else if (strikes === 2){
        res = 2;
    }
    return res;
};

export const addOne = item => {
    return item + 1;
};

function Dashboard(props) {
    function resetAdd() {
        props.setBall(0);
        props.setStrike(0);
    }

    return (
    <div>
       <button onClick={() => props.setStrike(addOne(props.strikes))}>
           Strike
       </button>
        <button onClick={() => props.setBall(addOne(props.balls))}>
           Ball
       </button>
        <button onClick={() => props.setStrike(addFoul(props.strikes))}>
            Foul
       </button>
            <button onClick={resetAdd}>
            Hit
       </button>
    </div>
    );
}

export default Dashboard;
