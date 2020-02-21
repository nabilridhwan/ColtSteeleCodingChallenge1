import FormHandler from "./FormHandler"
import * as Element from "./ElementDeclaration"

// Order of divs by order
let steps = [Element.welcomeMessage, Element.step_0, Element.step_1, Element.step_2, Element.step_3]
let fh = new FormHandler(steps);

// Add button Listeners
Element.button_0next.addEventListener("click", _ => {
    fh.incrementStep()
})
Element.button_1next.addEventListener("click", _ => {
    fh.incrementStep()
})
Element.button_2next.addEventListener("click", _ => {
    fh.incrementStep()
})
Element.button_0prev.addEventListener("click", _ => {
    fh.decrementStep()
})
Element.button_1prev.addEventListener("click", _ => {
    fh.decrementStep()
})
Element.button_2prev.addEventListener("click", _ => {
    fh.decrementStep()
})
Element.welcomeMessage_next.addEventListener("click", _ => {
    fh.incrementStep()
})