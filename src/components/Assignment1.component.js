import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import Button from '@material-ui/core/Button';

export default function Assignment1(props) {

    const [state, setState] = useState({
        counter: 0,
        color: ''
    });

    useEffect(() => {
        $('#simple-tabpanel-0').css('background-color', 'white');
    }, []);

    const handleClick = () => {
        var generatedColor = generateHexaRandomColor()
        $('#simple-tabpanel-0').css('background-color', generatedColor);
        setState({ ...state, counter: state.counter + 1, color: generatedColor })
    }

    return (
        <div>
            <Button onClick={handleClick} id='btn-count' variant="contained" color="primary">
                Click <br />
                {state.color}
                {
                    <div id="counterDiv">{state.counter}</div>
                }
            </Button>
        </div>
    )
}
function generateHexaRandomColor() {
    let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))];
    }
    return color;
}