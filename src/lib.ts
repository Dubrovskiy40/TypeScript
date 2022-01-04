export function renderBlock (elementId: string, html: string) : void {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}