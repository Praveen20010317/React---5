import React from 'react'

function destructuring() {
    return (
        <div>
            
        </div>
    )
}
export function getUserIpDetails(userDetails)  {
    const a = [];
    a[0] = userDetails.userName;
    a[1] = userDetails.userIp;
    console.log(a[1])
    if(typeof a[1] === 'undefined') {
        a[1] = '0.0.0.0';
        console.log(a)
        return a
    }else {
        return a
    }   
}
export function getTopThree(arr)  {
    const p = [];
    for(var i=0; i<3; i++) {
        console.log(arr.length)
        if(arr.length > i) {
            p[i] = arr[i];
        }else {
            p[i] = null;
        }
    }
    return p;
}
export default destructuring;