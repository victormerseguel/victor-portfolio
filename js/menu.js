
export default function Menu() {
    let workBtn = document.querySelector('#jobsBtn');
    let aboutBtn = document.querySelector('#aboutBtn');
    let contactsBtn = document.querySelector('#contactsBtn');
    let work = document.querySelector('#thumbContainer');
    let about = document.querySelector('#about');
    let contacts = document.querySelector('#contacts');

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
