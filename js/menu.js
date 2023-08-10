
export default function Menu() {
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
