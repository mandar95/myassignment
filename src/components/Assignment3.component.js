import React, { useEffect } from 'react';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Assignment3() {

    useEffect(() => {
        $('#output').text(SplitArrayIntoMultipleSubArray(getInputArrayAndChunkSize().inputArray, getInputArrayAndChunkSize().splitSize))
    }, []);

    function handleClick() {
        $('#output').removeClass('warning').text(SplitArrayIntoMultipleSubArray(getInputArrayAndChunkSize().inputArray, getInputArrayAndChunkSize().splitSize))
    }
    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField id="inputArray" label="Enter Input Array" placeholder="ex: 1,2,3,4" defaultValue='1,2,3,4' /><br />
                <TextField id="splitSize" label="Enter Split Size" placeholder="ex: 2" defaultValue='2' /><br /><br />
                <Button onClick={handleClick} variant="contained" color="primary">
                    Click
                </Button>
                <br />
                <br />
                <label id='output' className=''></label>
            </form>
        </div >
    )
}

function SplitArrayIntoMultipleSubArray(inputArray, splitSize) {
    if (splitSize < inputArray.length) {
        let cloneArray = [...inputArray];
        let splitArray = [];
        let output = '';

        for (let i = 0; i < cloneArray.length;) {
            var chunk = cloneArray.splice(0, splitSize);
            splitArray.push(chunk);
            output += `[${chunk}]`;
        }
        return `chunk array : ${output}`;
    }
    else {
        $('#output').addClass('warning').text('please enter chunksize less than input array length')
    }


}

function getInputArrayAndChunkSize() {
    return {
        inputArray: $('#inputArray').val().split(','),
        splitSize: Number($('#splitSize').val()),
    }
}