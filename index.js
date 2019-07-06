


function showMessage(message, callback) {

    console.log(message);
    
    setTimeout(callback, 2000);
}


console.log('1');


showMessage('2', function() {

    console.log('callback');
});


console.log('3');
