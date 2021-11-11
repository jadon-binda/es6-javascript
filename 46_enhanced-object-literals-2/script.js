function saveFile(url, data) {
    $.ajax({ 
        url,
        data,
        method: 'POST'
    });
}

const url = 'http://fileupload.com';
const data = {color: 'green'};

console.log(saveFile(url, data));