import { files } from "./files.js";

const container = document.querySelector("#thumbContainer");
files.forEach((file, i) => {
  file.id = i;
});

export let size = files.length;
let innetText = "";
let divs = [];
let videoOn = false;

export function Insert() {
  files.forEach((file, i) => {
    innetText =
      innetText +
      `<div id="divImg${file.id}" class"div-img" style="position: relative">
        <img src="../${file.imgURL}" class="thumb">
        <div class="description hide" id="desc${file.id}">
            <h4>${file.descriptType}</h4>
            <h5>${file.descripTitle}</h5>
            <h6>${file.descripClient}</h6>
        </div>
    </div>
  `;
    container.innerHTML = innetText;
    // divs.push(`divImg${i}`);
  });

  files.forEach((file, i) => {
    divs[i] = document.querySelector(`#divImg${i}`);
    divs[i].addEventListener("mouseenter", () => {
      document.querySelector(`#desc${i}`).classList.remove("hide");
    });
    divs[i].addEventListener("mouseleave", () => {
      document.querySelector(`#desc${i}`).classList.add("hide");
    });
    divs[i].addEventListener("click", (e) => videoShow(e.currentTarget));
  });
}

const divVideo = document.querySelector(".divVid");
const video = document.querySelector(".divVid video");
const videoLabel = document.querySelector(".videoLabel");
const videoH4 = document.querySelector(".videoLabel h4");
const videoH5 = document.querySelector(".videoLabel h5");
const videoH6 = document.querySelector(".videoLabel h6");

const videoShow = (e) => {
  videoOn = true;

  files.forEach((file, i) => {
    e.id === "divImg" + i
      ? (divVideo.classList.remove("hide"),
        video.setAttribute("src", file.vidURL),
        video.play(),
        (videoH4.innerHTML = file.descriptType),
        (videoH5.innerHTML = file.descripTitle),
        (videoH6.innerHTML = file.descripClient),
        (document.documentElement.style.overflow = "hidden"))
      : null;
  });
};

// const close = () => {
video.addEventListener("click", (e) => {
  e.stopPropagation();
});
videoLabel.addEventListener("click", (e) => {
  e.stopPropagation();
});
divVideo.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  divVideo.classList.add("hide");
  document.documentElement.style.overflow = "auto";
});
// };
