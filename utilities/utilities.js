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

    const dateTime = new Date;
    const time = dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

    p.classList.add('activity-style');

    p.innerHTML = `You have completed the ${text} at ${time}`;

    asideSection.appendChild(p);
}


// dynamic BG

function dynamicBG() {
    
    const hexaDigits = '0123456789ABCDEF';

    let color = '#';

    for (let c = 0; c < 6; c++) {
        
        let makeColor = hexaDigits[Math.floor(Math.random() * 16)];
        
        color = color + makeColor;

        // console.log(color);
        
    }
    return color;
}

