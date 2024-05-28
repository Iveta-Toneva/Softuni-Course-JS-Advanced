function solve() {


    let textElement = document.getElementById('text');
    let namingElement = document.getElementById('naming-convention');
    let resultElement = document.getElementById('result');

    let text = textElement.value;
    text=text.toLowerCase().split(' ');
    let array = text.map(el => el[0].toUpperCase() + el.substring(1));
    array=array.join('');
  
    switch (namingElement.value) {
      case 'Camel Case':
        resultElement.textContent = array[0].toLowerCase() + array.substring(1);
        break;
      case 'Pascal Case': resultElement.textContent = array; break;
      default: resultElement.textContent = 'Error!'; break;
  }

}

