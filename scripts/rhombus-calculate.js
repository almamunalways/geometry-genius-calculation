function rhombusCalculateArea(){
    const rhombusLength1Input = document.getElementById('rhombus1-length');
    const rhombusLength1Text = rhombusLength1Input.value;
    const firstLength = parseFloat(rhombusLength1Text);
    console.log(firstLength);

    const rhombusLength2Input = document.getElementById('rhombus2-length');
    const rhombusLength2Text = rhombusLength2Input.value;
    const secondLength = parseFloat(rhombusLength2Text);
    console.log(secondLength);

    const area = 0.5 * (firstLength * secondLength);

    const rhombusOutput = document.getElementById('rhombus-area');
    rhombusOutput.innerText = area;
}