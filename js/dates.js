const date = new Date();
const currentYear = date.getFullYear();


export function PrintWorkTime() {
    const paragrafo = document.querySelector('#aboutText');
    const anos = currentYear - 2017;
    paragrafo.append(anos);
}

export function FooterYear() {
    const textFooter = document.querySelector('#footerYear');
    textFooter.append(currentYear);
}
