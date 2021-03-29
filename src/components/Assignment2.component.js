import React, { useEffect } from 'react';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Assignment2(props) {

    //comment1
    useEffect(() => {
        $('#output').text(maxSumOfSubArray(getInputArrayAndCount().inputArray, getInputArrayAndCount().count))

    }, []);

    function handleClick() {
        $('#output').text(maxSumOfSubArray(getInputArrayAndCount().inputArray, getInputArrayAndCount().count))
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField id="inputArray" label="Enter Input Array" placeholder="ex: 1,2,5,2,8,1,5" defaultValue='1,2,5,2,8,1,5' /><br />
                <TextField id="count" label="Enter Count" placeholder="ex: 2" defaultValue='2' /><br /><br />
                <Button onClick={handleClick} variant="contained" color="primary">
                    Click
                </Button>
                <br />
                <br />
                <label id='output'></label>
            </form>
        </div>
    )
}
function maxSumOfSubArray(inputArray, count) {
    let maxSum = 0;
    for (let i = 0; i < count; i++) {
        maxSum += Number(inputArray[i]);
    }
    let tempSum = maxSum;
    for (let i = count; i < inputArray.length; i++) {
        tempSum = tempSum + Number(inputArray[i]) - Number(inputArray[i - count]);
        maxSum = Math.max(tempSum, maxSum);

    }
    return `maximum sum of subarray :  ${maxSum}`;
}
function getInputArrayAndCount() {
    return {
        inputArray: $('#inputArray').val().split(','),
        count: Number($('#count').val()),
    }
}