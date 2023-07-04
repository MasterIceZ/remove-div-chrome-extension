console.info('chrome-ext template-vanilla-ts content script')
console.info('เกียน')
const elements = document.querySelectorAll('div.loading-spinner')

console.log(elements)
for (const element of elements) {
  // element.appendChild(document.createTextNode('Hello from content script'))
  element.remove()
}

export {}
