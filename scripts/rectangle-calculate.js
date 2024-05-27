function rectangleAreaCalculate() {
  const rectangleWideInput = document.getElementById('rectangle-wide');
  const rectangleWideText = rectangleWideInput.value;
  const wide = parseFloat(rectangleWideText);
  
  const rectangleIisInput = document.getElementById('rectangle-i');
  const rectangleIisText = rectangleIisInput.value;
  const i = parseFloat(rectangleIisText);
  
  const area = wide * i;


  const rectangleOutput = document.getElementById('rectangle-area'); 
  rectangleOutput.innerText = area;
  
  

}