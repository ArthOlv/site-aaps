var drawerItem = document.querySelectorAll('.item-drawer')

function selectLink(){
    drawerItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

drawerItem.forEach((item)=>
    item.addEventListener('click',selectLink))


var btnExp = document.querySelector('#btn-exp')
var drawer = document.querySelector('.drawer')

btnExp.addEventListener('click', function(){
    drawer.classList.toggle('expandir')
})
function loadPage(page) {
    fetch(page)
    .then(response => {
        if (!response.ok) {
            throw new Error('Página não encontrada');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => {
        document.getElementById('content').innerHTML = `<p>${error.message}</p>`;
    });
}
window.onload = function() {
    loadPage('links/homepage.html');
};