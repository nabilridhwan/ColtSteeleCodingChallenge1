export default class FormHandler {
    constructor(steps) {
        this.steps = steps;
        this.currentStep = 0;
        this.hideNonAttending(this.currentStep)
    }

    incrementStep() {
        this.currentStep++;
        this.hideNonAttending(this.currentStep)
        console.log(this.currentStep)
    }

    decrementStep() {
        // Decrement the step
        this.currentStep--;
        this.hideNonAttending(this.currentStep)
        console.log(this.currentStep)
    }

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
}