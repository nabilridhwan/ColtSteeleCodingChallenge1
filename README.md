# Coding Challenge #1
This is my submission for the Coding Challenge #1 by Colt Steele. Here is a rundown of what is happening:

### State of the forms
State of forms (what's its current step) are handled by a class called FormHandler. I think a class is the best because it can hold states and you create one instance to hold the state of that specific instance.

### Increment and Decrement states
So in the form, there is obviously a state to keep track of which step the user is currently at, the `FormHandler` class keeps this simple having a decrement and increment methods to attatch as a callback to an EventListener.

```js
// Increment and Decrement methods in the class.
incrementStep() {
    this.currentStep++;
    this.hideNonAttending(this.currentStep)
}

decrementStep() {
    // Decrement the step
    this.currentStep--;
    this.hideNonAttending(this.currentStep)
}
```

### Hiding Divs that the user is not currently on
So to hide the divs that the user is not currently on (user is on step 2, hide step 1 and 3), the method below filters which steps the user is not on and hide them and also explicitly make the current step's div `hidden` to `false`.
```js
// What this method does: Hides every other divs except for the current step's div
hideNonAttending(currentStep) {
    // Unhide the current step div first
    this.steps[currentStep].hidden = false;
    // Filter the divs that are not in the current step
    let hideSteps = Object.keys(this.steps).filter(step => step != currentStep);
    hideSteps.forEach(steps => {
        // Hide them!
        let hideDiv = this.steps[steps]
        hideDiv.hidden = true;
    })

}
```