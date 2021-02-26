
let btn = document.getElementById('btnCount');
btn.addEventListener('click', () => {
    let headings = document.getElementsByTagName('h3');
    let headingById = document.getElementById('heading');
    alert(`The number of H3 tags: ${headings.length} \n
    Text: ${headingById.innerText}`);
});