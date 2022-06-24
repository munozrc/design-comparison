import './styles.css'

const container = document.querySelector('#container') as HTMLDivElement

let width: number
let offsetLeft: number
let isDown: boolean = false

container.addEventListener('mousedown', (e) => {
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

window.addEventListener('resize', init)

function updateDragger (e: MouseEvent) {
  if (isDown && e.pageX >= offsetLeft && e.pageX <= (offsetLeft + width)) {
    const value = (e.pageX - offsetLeft - 3) / width * 100
    container.style.setProperty('--percent', value + '%')
  }
}

function init () {
  const design = document.querySelector('#design') as HTMLImageElement
  const solution = document.querySelector('#solution') as HTMLIFrameElement

  const { width, height, naturalWidth, naturalHeight } = design
  const scaleX = width / naturalWidth
  const scaleY = height / naturalHeight

  solution.style.transform = `scale(${scaleX}, ${scaleY})`
  solution.style.width = naturalWidth + 'px'
  solution.style.height = naturalHeight + 'px'
}

init()
