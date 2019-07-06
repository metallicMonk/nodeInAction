

function display(data, callback) {

    const randInt = Math.random() * (10 - 1) + 1;

    const err = randInt > 5 ? new Error("randInt > 5!") : null;

    
    setTimeout(function() {

        callback(err, data);
    }, 0);
}


console.log('1');

display('2', function(err, data) {

    if (err) console.log(err);
    console.log(data);
});

console.log('3');
