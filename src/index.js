const block2 = document.querySelector('.row-block-2')
// Создадим функцию для создания элементов, т.к. это уменьшит код
const createEl = (tag, text, attrs = {}) => {
    const el = document.createElement(tag)
    el.textContent = text
    Object.keys(attrs).forEach((key) => {
      el.setAttribute(key, attrs[key])
    })
    return el
}
const personCont = [];
// Создадим функцию, которая юудет сортировать
const sort = ((Arr) => {
    personCont.push(Arr.sort((arr1, arr2) => arr1.dob.age > arr2.dob.age ? 1 : -1));
});

fetch(`https://randomuser.me/api/?results=8`)
    .then(response => response.json())
    .then(team => sort(team.results))
    .then( () => {
        // теперь создадим блок с аватарками команды
        personCont[0].forEach((person)=>{
            const cont = createEl('div', null, {class: 'col-12 col-md-6 col-lg-3 col cont'} )
            const divCont = createEl('div', null, {class: 'block-2-col'})
            const contImg = createEl('div', null, {class: 'photo avatar'})
            const img = createEl('img', null, {src: person.picture.large, class: 'foto avatar-img'})
            const text = createEl('p', person.name.first)
            block2.appendChild(cont)
            contImg.appendChild(img)
            divCont.appendChild(contImg)
            divCont.appendChild(text)
            cont.appendChild(divCont)
        })
    })
   
    