function ellipseCalculateArea() {
    const ellipseFirstInput = document.getElementById('ellipse1-input');
    const ellipseFirstText = ellipseFirstInput.value;
    const firstInput = parseFloat(ellipseFirstText);

    const ellipseSecondInput = document.getElementById('ellipse2-input');
    const ellipseSecondText = ellipseSecondInput.value;
    const secondInput = parseFloat(ellipseSecondText);

    const area = 3.14159 * (firstInput * secondInput);

    const ellipseOutput = document.getElementById('ellipse-area');
    ellipseOutput.innerText = area;
}