let dropIcon = document.getElementById('linksIcon'),
    links = document.getElementById('headerLinks'),
    kind = 'block';

dropIcon.addEventListener('click', () => {
    links.style.display = kind;
    if (kind == "block") {
        kind = "none";
        document.getElementById('iconAnim').style.width = '100%';
    }else {
        kind = "block";
        document.getElementById('iconAnim').style.width = '60%';
    }
});

let mainLinks = document.querySelectorAll('.m-link');

for (let i = 0; i < mainLinks.length; ++i) {
    let link = mainLinks[i];

    link.addEventListener('click', () => {
        links.style.display = 'none';
        document.getElementById('iconAnim').style.width = '60%';
    });
}