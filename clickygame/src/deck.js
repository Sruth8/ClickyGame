
function shuffle(array) {
    const coparray = array.slice(0)
    for(let i=0; i < array.length - 1; i++) {
        let randomCard = Math.floor(Math.random() *(i +1))
let temp = coparray[i]
coparray[i] = coparray[randomCard]
coparray[randomCard]= temp
    }
    return coparray
    
}


export default function initDeck() {
     
    let id = 0
    const cards = ['comeGitme', 'cominPeace', 'craycray', 
    'iceCream', 'legs', 'lookie', 'luvYou', 'settlers']
    .reduce((accumulate, type)=>{
        accumulate.push({
            id: id++,
            type
        })
        accumulate.push({
            id: id++,
            type
        })

        return accumulate
    }, [])
    return shuffle(cards)
}