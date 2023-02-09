import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')

/*
Challenge:
1. Add an eventListener to emotionRadios that will listen 
   out for any *change* in our radio buttons. When it detects
   a change, it should log out the id of the element that 
   was selected.
⚠️️ ️T️h️is won't work if the eventListener is listening out for a 
   'click'. Google what event to listen for - I've already 
   given you a clue!
*/

emotionRadios.addEventListener('change', function(e){
    console.log(e.target.id)
})

function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)




