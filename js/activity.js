// button + task count

let elements = document.getElementsByClassName('task-btn');

// console.log(elements);

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    
    // console.log(element);
    element.addEventListener('click', function(event){
        event.preventDefault();
        // console.log(element + 'clicked!');
        const taskCount = document.getElementById('task-count').innerText;
        const convertedTaskCount = parseInt(taskCount);
        
        const newTaskCount = convertedTaskCount - 1;
        
        alert('Board updated Sucessfully');

        document.getElementById('task-count').innerText = newTaskCount;
        
        element.disabled = true;
        element.style.opacity = 0.2;
        
        
    }
)
}