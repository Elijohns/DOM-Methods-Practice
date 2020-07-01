const bodyElement = document.querySelector('body')
let mainElement = document.createElement('main')
bodyElement.append(mainElement)

let buttonElement = document.createElement('button')
bodyElement.append(buttonElement)
buttonElement.append('Fall Creek Falls')

let imageElement = document.createElement('img')
imageElement.className = 'image'
imageElement.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Fall_Creek_Falls.jpg/280px-Fall_Creek_Falls.jpg'
mainElement.append(imageElement)

let aElement = document.createElement('a')
aElement.href = 'https://en.wikipedia.org/wiki/Fall_Creek_Falls'
mainElement.append(aElement)
aElement.append('FALL CREEK FALLS')

buttonElement.addEventListener('click', function(){
    mainElement.remove()
})