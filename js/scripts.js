import { files } from "./files.js";

let size = files.length;
let thumbContainer = document.getElementById('thumbContainer');


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

    let thumbSection = document.getElementById('thumbContainer');
    thumbSection.appendChild(div);

    let divSelection = document.getElementById(divImgId);
    divSelection.appendChild(img);
}


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

    let thumbSection = document.getElementById('thumbContainer');
    thumbSection.appendChild(div);

    let divSelection = document.getElementById(divVidId);
    divSelection.appendChild(vid);
    divSelection.appendChild(close);
}

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

    let divImgSection = document.getElementById(divImg);
    divImgSection.appendChild(div);
    let divSelection = document.getElementById(divId);
    divSelection.append(type);
    divSelection.append(title);
    divSelection.append(client);
}

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

    let divVidSelection = document.getElementById(divVidId);
    divVidSelection.appendChild(divVid);
    let newDiv = document.getElementById(labelId);
    newDiv.append(type);
    newDiv.append(title);
    newDiv.append(client);


}

// INSERT

function Insert(i, j, isEven) {
    InsertVid(
        files[i].vidURL,
        'vid' + i,
        'divVid' + i,
        'closeId' + i,
    );
    if (isEven === true) {
        InsertVid(
            files[j].vidURL,
            'vid' + j,
            'divVid' + j,
            'closeId' + j,
        );
    }
    InsertDivLabel(
        'label' + i,
        files[i].descriptType,
        files[i].descripTitle,
        files[i].descripClient,
        'divVid' + i,
    );
    if (isEven === true) {
        InsertDivLabel(
            'label' + j,
            files[j].descriptType,
            files[j].descripTitle,
            files[j].descripClient,
            'divVid' + j,
        );
    };
    InsertImg(
        files[i].imgURL,
        'thmb' + i,
        'divImg' + i,
        'thmb' + i,
        'desc' + i,
    );
    InsertDiv(
        'desc' + i,
        files[i].descriptType,
        files[i].descripTitle,
        files[i].descripClient,
        'divImg' + i,
    );
    if (isEven === true) {
        InsertImg(
            files[j].imgURL,
            'thmb' + j,
            'divImg' + j,
            'thmb' + j,
            'desc' + j,
        );
        InsertDiv(
            'desc' + j,
            files[j].descriptType,
            files[j].descripTitle,
            files[j].descripClient,
            'divImg' + j,
        );
    };
}



for (let i = 0; i < size; i += 2) {

    let j = i + 1;

    if (size % 2 === 0) {
        Insert(i, j, true);

    } else {
        if (size - i >= 2) {
            Insert (i, j, true)

        } else {
            Insert (i, j, false)
        }
    }

}

// CLICK

let stopToggle = false;


for (let i = 0; i < size; i++) {

    let thumb = document.getElementById('divImg' + i);
    let video = document.querySelector('#vid' + i);
    let closeBtn = document.getElementById('closeId' + i);
    let labelVideo = document.getElementById('label' + i);
    let footer = document.querySelector('.footer');


    thumb.addEventListener('click', () => {
        if (video.classList.contains('hide') && stopToggle === false) {

            for (let j = 0; j < size; j++) {
                let video2 = document.querySelector('#vid' + j);
                let closeBtn2 = document.getElementById('closeId' + j)
                let labelVideo2 = document.getElementById('label' + j);


                if (video2.classList.contains('hide')) {

                } else {
                    video2.pause();
                    video2.currentTime = 0;
                    video2.classList.add('hide');
                    closeBtn2.classList.add('hide');
                    labelVideo2.classList.add('hide');

                }

                ClarearDiv('desc' + j);
            }
            video.classList.remove('hide');
            closeBtn.classList.remove('hide');
            labelVideo.classList.remove('hide');
            video.scrollIntoView({ behavior: "smooth", block: "center" });
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no"; // IE
            video.play();
            for (let k = 0; k < size; k++) {
                let thumb2 = document.getElementById('thmb' + k);
                thumb2.classList.add('thumb2');
            }
        }
        footer.classList.add('hide');
        stopToggle = true;
    })
}

for (let i = 0; i < size; i++) {
    let thumb = document.getElementById('divImg' + i);
    let video = document.querySelector('#vid' + i);
    let closeBtn = document.getElementById('closeId' + i);
    let labelVideo = document.getElementById('label' + i);
    let footer = document.querySelector('.footer');

    closeBtn.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        video.classList.add('hide');
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes"; // IE
        for (let l = 0; l < size; l++) {
            let thumb2 = document.getElementById('thmb' + l);
            thumb2.classList.remove('thumb2');
            closeBtn.classList.add('hide');
            labelVideo.classList.add('hide');
        }
        footer.classList.remove('hide');
        stopToggle = false;

    })
}

function Escurecer(x, y) {
    if (stopToggle === false) {
        let thumb = document.getElementById(x);
        let description = document.getElementById(y);
        thumb.classList.add('thumb2');
        description.classList.remove('hide');
    }
}

function Clarear(x, y) {

    if (stopToggle === false) {
        let thumb = document.getElementById(x);
        let description = document.getElementById(y);
        thumb.classList.remove('thumb2');
        description.classList.add('hide');
    }
}

function ClarearDiv(y) {
    let description = document.getElementById(y);
    description.classList.add('hide');
}


function Menu() {
    let workBtn = document.getElementById('jobsBtn');
    let aboutBtn = document.getElementById('aboutBtn');
    let contactsBtn = document.getElementById('contactsBtn');
    let work = document.getElementById('thumbContainer');
    let about = document.getElementById('about');
    let contacts = document.getElementById('contacts');

    workBtn.addEventListener('click', () => {
        work.classList.remove('hide');
        about.classList.add('hide');
        contacts.classList.add('hide');

        workBtn.classList.add('currentMenu');
        aboutBtn.classList.remove('currentMenu');
        contactsBtn.classList.remove('currentMenu');
    });

    aboutBtn.addEventListener('click', () => {
        work.classList.add('hide');
        about.classList.remove('hide');
        contacts.classList.add('hide');

        workBtn.classList.remove('currentMenu');
        aboutBtn.classList.add('currentMenu');
        contactsBtn.classList.remove('currentMenu');
    });

    contactsBtn.addEventListener('click', () => {
        work.classList.add('hide');
        about.classList.add('hide');
        contacts.classList.remove('hide');

        workBtn.classList.remove('currentMenu');
        aboutBtn.classList.remove('currentMenu');
        contactsBtn.classList.add('currentMenu');
    });


}

Menu();

const date = new Date();
const currentYear = date.getFullYear();


function PrintWorkTime() {
    const paragrafo = document.getElementById('aboutText');
    const anos = currentYear - 2017;
    paragrafo.append(anos);
}
PrintWorkTime();

function FooterYear() {
    const textFooter = document.getElementById('footerYear');
    textFooter.append(currentYear);
}
FooterYear();