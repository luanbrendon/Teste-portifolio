const onoff = document.querySelector('.on-off');
const day = document.querySelector('.uil-brightness-low');
const dark = document.querySelector('uil-moon');
const bottom = document.querySelector('.bottom');

onoff.onclick = () => {
    document.body.classList.toggle('change');
    day.classList.toggle('cday');
    dark.classList.toggle('cdark');
    bottom.classList.toggle('dark');

}