// function for getinputbyinnertext

function getInputByInnerText(id) {
    const innerTextByID = document.getElementById(id).innerText;

    return innerTextByID;
}

function convertedInputByInnerText(id) {
    const getText = getInputByInnerText(id);

    const convertedText = parseInt(getText);

    return convertedText;
}

// function for activity log

function activityLog(eventName) {
    const firstParent = eventName.target.parentNode;

    const grandParentNode = firstParent.parentNode;


    const text = grandParentNode.childNodes[3].innerText;


    const asideSection = document.getElementById('aside-section');

    const p = document.createElement('p');

    const date = new Date;
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

    p.classList.add('activity-style');

    p.innerHTML = `You have completed the ${text} at ${time}`;

    asideSection.appendChild(p);
}

