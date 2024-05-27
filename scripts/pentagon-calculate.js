function pentagonAreaCalculate(){
    const pentagon1Input = document.getElementById('pentagon1-input');
    const pentagon1Text = pentagon1Input.value;
    const pentagonFirst = parseFloat(pentagon1Text);

    const pentagon2Input = document.getElementById('pentagon2-input');
    const pentagon2Text = pentagon2Input.value;
    const pentagonSecond = parseFloat(pentagon2Text);

    const area = 0.5 * (pentagonFirst * pentagonSecond);

    const pentagonOutput = document.getElementById('pentagon-area');
    pentagonOutput.innerText = area;
}