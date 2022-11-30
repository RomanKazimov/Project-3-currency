let fromInp = document.querySelector('#fromInp');
let toInp = document.querySelector('#toInp');
let left = document.querySelectorAll('.left div label')
let right = document.querySelectorAll('.right div label')
let f = 'AZN'
let t = 'USD'
fromInp.value = 100

left.forEach((item)=>{
    item.addEventListener('click', function(ev){
    f = ev.target.innerText
    console.log(f)
    transaction()
    
    })
    })
    right.forEach((item)=>{
        item.addEventListener('click', function(ev){
        t = ev.target.innerText
        console.log(t)
        transaction()
        
            })
        })
       

const transaction = async () =>{
    const response = await fetch(`https://api.exchangerate.host/latest?base=${f}&symbols=${t}`);
    const data = await response.json()
    toInp.value = parseFloat(fromInp.value) * parseFloat(data.rates[t]).toFixed(2)
    // fromInp.value = toInp  * data.rates[value1]
    // console.log(data.rates[value2])
    // console.log(toInp.value)
    }
    transaction()
    const transaction2 = async () =>{
        const response = await fetch(`https://api.exchangerate.host/latest?base=${f}&symbols=${t}`);
        const data = await response.json()
        fromInp.value = parseFloat(toInp.value) * parseFloat(data.rates[t]).toFixed(2)
        // fromInp.value = toInp  * data.rates[value1]
        // console.log(data.rates[value2])
        // console.log(toInp.value)
        }
toInp.addEventListener('input', function(){
    transaction2()
    })

    fromInp.addEventListener('input', function(){
    transaction()
    })








