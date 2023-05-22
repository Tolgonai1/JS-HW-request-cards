
// 1-сделать такой же запрос как на уроке но на массив из объектов с людьми
// и вывести это всё на страницу через ДОМ элементы

const request = new XMLHttpRequest()
request.open('GET','data.json')
request.setRequestHeader('Content-type','application/json')
request.send()
request.addEventListener('load',() =>{
    const peoples = JSON.parse(request.response)
    peoples.map(person =>{
        const div = document.createElement('div')
        document.querySelector('.wrapper').append(div)
        div.innerHTML = `
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXjYfou58DzQmbhstbtO7hZEYTfroOmEqrLtp4zTC5g&s" alt="user">
            <h2>Name: ${person.name}</h2>
            <span>Age: ${person.age}</span>
        `
    })
})