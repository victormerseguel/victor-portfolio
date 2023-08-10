import { size } from "./inserts.js";


export let stopToggle = false;

export function Click() {
    for (let i = 0; i < size; i++) {

        let thumb = document.querySelector('#divImg' + i);
        let video = document.querySelector('#vid' + i);
        let closeBtn = document.querySelector('#closeId' + i);
        let labelVideo = document.querySelector('#label' + i);
        let footer = document.querySelector('.footer');


        thumb.addEventListener('click', () => {
            if (video.classList.contains('hide') && stopToggle === false) {

                for (let i = 0; i < size; i++) {
                    let video2 = document.querySelector('#vid' + i);
                    let closeBtn2 = document.querySelector('#closeId' + i)
                    let labelVideo2 = document.querySelector('#label' + i);


                    if (video2.classList.contains('hide')) {

                    } else {
                        video2.pause();
                        video2.currentTime = 0;
                        video2.classList.add('hide');
                        closeBtn2.classList.add('hide');
                        labelVideo2.classList.add('hide');

                    }

                    ClarearDiv('desc' + i);
                }
                video.classList.remove('hide');
                closeBtn.classList.remove('hide');
                labelVideo.classList.remove('hide');
                video.scrollIntoView({ behavior: "smooth", block: "center" });
                document.documentElement.style.overflow = 'hidden';
                document.body.scroll = "no"; // IE
                video.play();
                for (let i = 0; i < size; i++) {
                    let thumb2 = document.querySelector('#thmb' + i);
                    thumb2.classList.add('thumb2');
                }
            }
            footer.classList.add('hide');
            stopToggle = true;
        })
    }

    for (let i = 0; i < size; i++) {
        let thumb = document.querySelector('#divImg' + i);
        let video = document.querySelector('#vid' + i);
        let closeBtn = document.querySelector('#closeId' + i);
        let labelVideo = document.querySelector('#label' + i);
        let footer = document.querySelector('.footer');

        closeBtn.addEventListener('click', () => {
            video.pause();
            video.currentTime = 0;
            video.classList.add('hide');
            document.documentElement.style.overflow = 'auto';
            document.body.scroll = "yes"; // IE
            for (let l = 0; l < size; l++) {
                let thumb2 = document.querySelector('#thmb' + l);
                thumb2.classList.remove('thumb2');
                closeBtn.classList.add('hide');
                labelVideo.classList.add('hide');
            }
            footer.classList.remove('hide');
            stopToggle = false;

        })
    }

    function ClarearDiv(y) {
        let description = document.querySelector('#' + y);
        description.classList.add('hide');
    }
}