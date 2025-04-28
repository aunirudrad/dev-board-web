document.getElementById('clear-history-btn').addEventListener('click', function(event){
    event.preventDefault();

    const parent = document.getElementById('aside-section');

    const children = document.querySelectorAll(".activity-style");

    // console.log(children);

    for (let j = 0; j < children.length; ++j) {
        const child = children[j];
        
        child.remove();

        // console.log(child);
    }
})