function moneyConverter(valNum) {
    num = valNum/1000
    loc = num.toLocaleString("en-US");
    console.log(loc)
    document.getElementById("newmoney").innerHTML=loc;
  }
function moneyConverter2(valNum) {
    num = valNum*1000
    loc = num.toLocaleString("en-US");
    document.getElementById("oldmoney").innerHTML=loc;
}

function commaMon(valN){
  x=valN.toLocaleString('en-US')
  console.log(x)
}

  let btnConvet = document.querySelector('#con');
  let input = document.querySelector('#oldd');
  let output = document.querySelector('h2');
  btnConvet.addEventListener('click', () => {
      output.innerText = numberToWords.toWords(input.value),"Leones";
  }
  )




  
