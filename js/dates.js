const date = new Date();
const currentYear = date.getFullYear();


export function PrintWorkTime() {
    const paragrafo = document.getElementById('aboutText');
    const anos = currentYear - 2017;
    paragrafo.append(anos);
}

export function FooterYear() {
    const textFooter = document.getElementById('footerYear');
    textFooter.append(currentYear);
}
