//! GET INNER TEXT FUNCTIO :

function getInnerText(id){
    const innerTexts = document.getElementById(id)
    const innerTextsValue = innerTexts.innerText
    return innerTextsValue
}

//! Coped Function here :



//! Heart Count feature : 
document.getElementById('car_container').addEventListener('click',function(e){
    if(e.target.className.includes('heart_icon')){

    let heartCountValue  = getInnerText('hear_count')
   let heartCountNum = Number(heartCountValue)
   let newHeartCountValue = heartCountNum+=1;

     document.getElementById('hear_count').innerText = newHeartCountValue
    }

    else if(e.target.className.includes('call_btn')){
        const callBtn = e.target
        const parentNodeFind= callBtn.parentNode
        const tiTle = parentNodeFind.parentNode.children[1].children[0].innerText
        const subTitle = parentNodeFind.parentNode.children[1].children[1].innerText
        const numbers = parentNodeFind.parentNode.children[2].children[0].innerText
        const localTime = new Date().toLocaleTimeString()
        let coins = getInnerText('coins_numbers')
        let coinNumber = Number(coins)
        let currentCoins = coinNumber - 20;
       if(coinNumber < 20){
            alert(`You don't have enough coins, you need 20 coins to make a call.`)
            return
        } 
        alert(`Calling ${subTitle} Service ${numbers}`)
      
        document.getElementById('coins_numbers').innerText = currentCoins
        const historyContainer = document.getElementById('history_container')

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
         <div class="flex justify-between items-center bg-[#FAFAFA] p-4 rounded-lg mb-3">
                <div>
                    <h2 class="font-bold">${tiTle}</h2>
                    <p class="text-[5C5C5C]">${numbers}</p>
                </div>
                <div>
                    <p>${localTime}</p>
                </div>
             </div>
        `
        historyContainer.appendChild(newHistory)
    }

    else if(e.target.className.includes('copy_btn')){
        const copyBtn = e.target
        let copyed = getInnerText('copy_numbers')
        let copyedNumber = Number(copyed)
        let copyCount = copyedNumber+=1
        const parentNodeFind = copyBtn.parentNode.parentNode; 
        const servicenumBers = parentNodeFind.children[2].children[0].innerText
        console.log(servicenumBers)
       const numbers = parentNodeFind.querySelector('.numbers h2').innerText; 
        navigator.clipboard.writeText(numbers);
        document.getElementById('copy_numbers').innerText = copyCount
        alert(`Coped Service Numbe ${servicenumBers}`)        
    }

    
})


//! Clear History feture : 
document.getElementById('history').addEventListener('click',function(e){
    if(e.target.className.includes('clear_btn')){
         const historyContainer = document.getElementById('history_container');
         historyContainer.innerHTML = ''
    }
})





