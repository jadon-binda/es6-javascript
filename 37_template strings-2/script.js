// PHP Code
// $data ='{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'$.username.'",'"}';

const device_id = 4;
const guid = 5;
const username = 'Jadon';

// Conversion of PHP Code to JavaScript Code
/*
const data = '{"device_id":"' + device_id + '","guid":"' + guid + '","username":"' + username + '","}';
console.log(data);
*/

// Using Template Strings to simplify the code
const data = `{ "device_id": "${device_id}", "guid": "${guid}", "username": "${username}" }`;
console.log(data);