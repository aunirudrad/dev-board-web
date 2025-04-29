// button + task count

let elements = document.getElementsByClassName('task-btn');

// console.log(elements);

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    // console.log(element);
    element.addEventListener('click', function (event) {
        event.preventDefault();
        // console.log(element + 'clicked!');



        const convertedTaskCount = convertedInputByInnerText('task-count');
        const convertedTotalTaskCount = convertedInputByInnerText('total-task-count');

        const newTaskCount = convertedTaskCount - 1;
        const updatedTaskCount = convertedTotalTaskCount + 1;

        document.getElementById('task-count').innerText = newTaskCount;
        document.getElementById('total-task-count').innerText = updatedTaskCount;

        if (newTaskCount < 1) {
            alert('Congratulations!');
            alert('Board updated Sucessfully');
            element.disabled = true;
            element.style.opacity = 0.2;
        } else {
            alert('Board updated Sucessfully');
            element.disabled = true;
            element.style.opacity = 0.2;
        }



        activityLog(event);
    }
    )
}