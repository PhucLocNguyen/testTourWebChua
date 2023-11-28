function CalTotal(event){
    event.preventDefault();
   var constValue = document.querySelector("#formSection .floatingBox .show").getAttribute("data");
   var output = constValue* event.target[1].value;
   document.querySelector("#total").innerHTML=`<p class="text-center" id="total">Total Amount : ${output}$</p>`;
}

function getConstValue(event){
    var constValue=event.target.value;
    switch(constValue){
        case "1": realValue =150;
        break;
        case "2": realValue = 250;
        break;
    }
    document.querySelector("#formSection .floatingBox").innerHTML = `<p class ="show" data ="${realValue}">${realValue}$/Person</p>  `;
}
