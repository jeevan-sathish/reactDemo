import React, { useEffect, useState } from 'react';

const Paggi = () => {
    const [pos, setPos] = useState(0);
    const set = [1, 2, 3, 4, 5, 6];
    const style1 = {
        width: "50%",
        height: "200px",
        border: "solid black 5px",
        display: "flex",
        flexDirection: "row",
        gap: "10px"
    };
    const style2 = {
        width: "120px",
        height: "200px",
        border: "solid black 2px",
        backgroundColor: "red"
    };

    const moveBack = () => {
        if (pos > 0) {
            setPos(pos - 1);
        }
    };

    const moveFront = () => {
        if (pos < set.length - 1) {
            setPos(pos + 1);
        }
    };

    useEffect(() => {
        const boxes = document.getElementsByClassName('box');
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = 'red';
        }
        const bx = boxes[pos];
        if (bx) {
            bx.style.backgroundColor = 'green';
        }
    }, [pos]);

    return (
        <>
            <div className='cont' style={style1}>
                {set.map((i, a) => {
                    return <div className='box' key={i} style={style2}>{a}</div>;
                })}
            </div>
            <button onClick={moveBack}>prev</button>
            <button onClick={moveFront}>next</button>
        </>
    );
}

export default Paggi;
