const menu = document.querySelector('#menu')
const nav = document.querySelector('nav')
const ab = document.getElementById('#ab')
const ex = document.getElementById('#ex')
const co = document.getElementById('#co')

menu.addEventListener('click', () => {
  nav.classList.toggle('open')
})

ab.addEventListener('click', () => {
  location.href = './index_w.html#about_p'
})
ex.addEventListener('click', () => {
  location.href = './index_w.html#experience_p'
})
co.addEventListener('click', () => {
  location.href = './index_w.html#contact_p'
})
