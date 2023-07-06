const elements = document.querySelectorAll('div.loading-spinner')

console.log(elements)
for (const element of elements) {
  element.remove()
}

export {}
