const img = window.document.getElementsByClassName('mainpic')[0];
img.addEventListener('mouseenter', () => {
    img.classList.add('active');
});
img.addEventListener('mouseleave', () => {
    img.classList.remove('active');
});
console.log(img);