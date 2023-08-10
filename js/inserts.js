import { files } from "./files.js";
import { stopToggle } from "./clicks.js";

export let size = files.length;

export default function Insert() {
    for (let i = 0; i < size; i += 2) {

        if (size % 2 === 0) {
            InsertIsEven(i, true);
    
        } else {
            if (size - i >= 2) {
                InsertIsEven (i, true)
    
            } else {
                InsertIsEven (i, false)
            }
        }
    
    }
}


function InsertIsEven(i, isEven) {
    let j = i + 1;

    InsertVid(files[i].vidURL, 'vid' + i, 'divVid' + i, 'closeId' + i,);
    if (isEven === true) {
        InsertVid(files[j].vidURL, 'vid' + j, 'divVid' + j, 'closeId' + j,);
    }
    InsertDivLabel('label' + i, files[i].descriptType, files[i].descripTitle, files[i].descripClient, 'divVid' + i,);
    if (isEven === true) {
        InsertDivLabel('label' + j, files[j].descriptType, files[j].descripTitle, files[j].descripClient, 'divVid' + j,);
    };
    InsertImg(files[i].imgURL, 'thmb' + i, 'divImg' + i, 'thmb' + i, 'desc' + i,);
    InsertDiv('desc' + i, files[i].descriptType, files[i].descripTitle, files[i].descripClient, 'divImg' + i,);
    if (isEven === true) {
        InsertImg(files[j].imgURL, 'thmb' + j, 'divImg' + j, 'thmb' + j, 'desc' + j,);
        InsertDiv('desc' + j, files[j].descriptType, files[j].descripTitle, files[j].descripClient, 'divImg' + j,);
    };
}

// img
function InsertImg(imgUrl, imgId, divImgId, x, y) {
    let img = document.createElement("img");
    img.src = imgUrl;
    img.id = imgId;
    img.className = 'thumb';

    let div = document.createElement('div');
    div.id = divImgId;
    div.className = 'divImg';
    div.onmouseenter = () => { Escurecer(x, y); };
    div.onmouseleave = () => { Clarear(x, y); };

    let thumbSection = document.querySelector('#thumbContainer');
    thumbSection.appendChild(div);

    let divSelection = document.querySelector('#' +divImgId);
    divSelection.appendChild(img);
}


// videos
function InsertVid(vidUrl, vidId, divVidId, closeId) {
    let vid = document.createElement('video');
    vid.controls = true;
    vid.controlsList = "nodownload";
    vid.mute = false;
    vid.autoplay = false;
    vid.src = vidUrl;
    vid.id = vidId;
    vid.className = 'videos hide';

    let close = document.createElement('img');
    close.src = 'assets/close.png';
    close.id = closeId;
    close.className = 'closeBtn hide';

    let div = document.createElement('div');
    div.id = divVidId;
    div.className = 'divVid';

    let thumbSection = document.querySelector('#thumbContainer');
    thumbSection.appendChild(div);

    let divSelection = document.querySelector('#' +divVidId);
    divSelection.appendChild(vid);
    divSelection.appendChild(close);
}


// div
function InsertDiv(divId, divType, divTitle, divClient, divImg) {
    let div = document.createElement("div");
    div.className = 'description hide';
    div.id = divId;

    let type = document.createElement('h4');
    type.innerText = divType;
    let title = document.createElement('h5');
    title.innerText = divTitle;
    let client = document.createElement('h6');
    client.innerText = divClient;

    let divImgSection = document.querySelector('#' +divImg);
    divImgSection.appendChild(div);
    let divSelection = document.querySelector('#' +divId);
    divSelection.append(type);
    divSelection.append(title);
    divSelection.append(client);
}


// div label
function InsertDivLabel(labelId, divType, divTitle, divClient, divVidId) {
    let divVid = document.createElement("div");
    divVid.className = 'videoLabel hide';
    divVid.id = labelId;

    let type = document.createElement('h4');
    type.innerText = divType;
    let title = document.createElement('h5');
    title.innerText = divTitle;
    let client = document.createElement('h6');
    client.innerText = divClient;

    let divVidSelection = document.querySelector('#' +divVidId);
    divVidSelection.appendChild(divVid);
    let newDiv = document.querySelector('#' +labelId);
    newDiv.append(type);
    newDiv.append(title);
    newDiv.append(client);
}

function Escurecer(x, y) {
    if (stopToggle === false) {
        let thumb = document.querySelector('#' +x);
        let description = document.querySelector('#' +y);
        thumb.classList.add('thumb2');
        description.classList.remove('hide');
    }
}

function Clarear(x, y) {

    if (stopToggle === false) {
        let thumb = document.querySelector('#' +x);
        let description = document.querySelector('#' +y);
        thumb.classList.remove('thumb2');
        description.classList.add('hide');
    }
}
