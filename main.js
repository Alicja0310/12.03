// const btn = document.getElementsByClassName('btn')
// console.log(btn)

// const par1 = document.getElementsByClassName('par1')
// const sth = Array.from(par1)
// console.log(sth)
// console.log(typeof par1)
//     for (let i = 0; i < par1.length; i++){
//         console.log(par1[i].classList)
//         par1[i].classList.add('pokemon')
//         par1[i].classList.remove('xd')
// }

// const par2 = document.getElementsByClassName('par2')
// const sth2 = Array.from(par2)
// console.log(sth2)
// console.log(typeof par2)
//     for (let i = 0; i < par2.length; i++){
//         console.log(par2[i])
//         par2[i].style.color = 'orange'
// }

// const parID = document.getElementById('parid1')
// console.log(parID)
// parID.style.backgroundColor = 'pink'

// parID.innerText = '<button>sdfgvgfhf</button>'

// const type = document.querySelector('input[type="button"]')
// console.log(type)
// const allType = document.querySelectorAll('input[type="button"]')
// console.log(allType)
// const allTypeArray = Array.from(allType)
// console.log(allTypeArray)

// allTypeArray.forEach(item => {
//     item.value = 'hotpink'
// })

// const tagA = document.getElementById('tagA')

// tagA.setAttribute('href', 'https://github.com/')

// const paragraf = document.createElement('p')
// paragraf.setAttribute('class', 'pokemon')
// paragraf.innerText = "niedługo do domu"
// const app = document.getElementById('app')
// app.appendChild(paragraf)

// const span = document.createElement('span')
// span.setAttribute('class', 'pokemon')
// span.innerText = "wpisz co chcesz"
const app = document.getElementById('app')
// app.appendChild(span)

const newDiv = document.createElement('div')

newDiv.setAttribute('class', 'center')
const span = document.createElement('span')
span.innerText = "magia"
newDiv.appendChild(span)
app.appendChild(newDiv)

