function printEvenPositionsElements(array) {

    let newArray=array.filter((el,i)=>i%2===0);
    console.log(newArray.join(' '));

}
printEvenPositionsElements(['20', '30', '40','50', '60']);