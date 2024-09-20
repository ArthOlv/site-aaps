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