function parallelogramCalculateArea(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);

    const area = base * height;

    const parallelogramOutput = document.getElementById('parallelogram-area');
    parallelogramOutput.innerText = area;

}