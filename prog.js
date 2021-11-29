function takeCoin() {
    const coinArray = ['Bitcoin', 'XDC', 'DOGE', 'MONERO', 'SHIBA INU', 'XRP', 'DASH']
    return coinArray[Math.floor(Math.random() * coinArray.length)]
}

function takeProp() {
    const propArray = ['interesting', 'bad to the bone', 'explosive', 'ready to go', 'thirsty']
    return propArray[Math.floor(Math.random() * propArray.length)]
}

function takeModal() {
    const modalArray = ['definitely', 'surely', 'without a doubt', 'for sure', 'absolutely']
    return modalArray[Math.floor(Math.random() * modalArray.length)]
}

function takeDo() {
    const doArray = ['buy', 'sell']
    return doArray[Math.floor(Math.random() * doArray.length)]
}

function takeQuote() {
    const quoteArray = ['TO THE MOON!', 'ALEA IACTA EST.', 'BUY THE DIP.', 'WHEN LAMBO?', 'HODL!']
    return quoteArray[Math.floor(Math.random() * quoteArray.length)]
}

console.log()
console.log('++++++++++++++++++++++++++++++++++++++++++++')
console.log('+')
console.log('+')
console.log(`+  The chart of ${takeCoin()} looks ${takeProp()}! +`)
console.log(`+  You should ${takeModal()} ${takeDo()}! +`)
console.log('+')
console.log(`+  ${takeQuote()}`)
console.log('+')
console.log('+')
console.log('+++++++++++++++++++++++++++++++++++++++++++++')

