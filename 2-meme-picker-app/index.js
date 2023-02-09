import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')

function getEmotionsArray(cats) {
    const emotionsArray = []

    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            /*
            Challenge:
            1. Refactor this nested for of so that an 
               emotion is only pushed to emotionsArray
               if it is not already in emotionsArray.
               Extra kudos if you use the "logical not"
               operator - feel free to google it!
            */

            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats) {

    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions) {
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




