export default function Menu() {
  let workBtn = document.querySelector("#jobsBtn");
  let aboutBtn = document.querySelector("#aboutBtn");
  let contactsBtn = document.querySelector("#contactsBtn");
  let work = document.querySelector("#thumbContainer");
  let about = document.querySelector("#about");
  let contacts = document.querySelector("#contacts");

  const btns = [workBtn, aboutBtn, contactsBtn];
  const sections = [work, about, contacts];

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btns.forEach((btn, i) => {
        btn.id === e.target.id
          ? (btn.classList.add("currentMenu"),
            sections[i].classList.remove("hide"))
          : (btn.classList.remove("currentMenu"),
            sections[i].classList.add("hide"));
      });
    });
  });
}
