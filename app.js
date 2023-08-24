const humbergerIcon = document.getElementById('humberger-icon')
const closeIcon = document.getElementById('close-toggle')
const navList = document.querySelector('.nav-menu')
console.log(closeIcon)

humbergerIcon.addEventListener('click',function showList() {
    navList.classList.add('active');
    closeIcon.style.display = 'block'
})

closeIcon.addEventListener('click', function closeList(){
    navList.classList.remove("active");  // remove class from the element
    closeIcon.style.display = 'none'
})