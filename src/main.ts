import './styles.css'

const container: HTMLDivElement | null = document.querySelector('#container')

let width: number
let offsetLeft: number
let isDown: boolean = false

container?.addEventListener('mousedown', (e) => {
  width = container.offsetWidth
  offsetLeft = container.offsetLeft
  isDown = true
  updateDragger(e)
})

document.addEventListener('mouseup', () => {
  isDown = false
})

document.addEventListener('mousemove', (e) => {
  updateDragger(e)
})

function updateDragger (e: MouseEvent) {
  if (isDown && e.pageX >= offsetLeft && e.pageX <= (offsetLeft + width)) {
    const value = e.pageX - offsetLeft - 3
    container?.style.setProperty('--percent', value + 'px')
  }
}
