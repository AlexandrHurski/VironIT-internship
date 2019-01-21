import Component from './component'

export default function CloseComp () {
  Component.apply(this)
  this.tag = 'div'
  this.className = 'xbut'
}

CloseComp.prototype = Object.create(Component.prototype)
CloseComp.prototype.constructor = CloseComp

CloseComp.prototype.render = function (idToPlace) {
  let temp = document.createElement(this.tag)
  temp.classList.add(this.className)
  temp.innerText = 'X'
  temp.onclick = function () {
    this.parentElement.outerHTML = ''
  }
  return document.getElementById(idToPlace).appendChild(temp)
}
