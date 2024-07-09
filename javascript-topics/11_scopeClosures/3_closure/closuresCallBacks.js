function handleClick() {
    let count = 0;
    
    return function() {
        count++;
        console.log(`Button clicked ${count} times`);
    };
}

const clickHandler = handleClick();

document.getElementById('myButton').addEventListener('click', clickHandler);
