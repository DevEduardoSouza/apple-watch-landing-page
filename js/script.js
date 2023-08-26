const html = {
    getElemente(element){
        return document.querySelector(element);
    },
}

const btnMobile = html.getElemente('.btn-mobile');
const menu = html.getElemente('header .menu  ul');

btnMobile.addEventListener('click', ()=>{
    menu.classList.toggle('hide');
});