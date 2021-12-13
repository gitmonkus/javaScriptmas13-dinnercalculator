const btn = document.getElementById("btn")
let food = document.getElementById("food")
let veggie = document.getElementById('vegetarian-input')
const numInput = document.getElementById('num-input')
const turkeyHid = document.getElementById('turkey-hid')
const gooseHid = document.getElementById('goose-hid')
const nutHid = document.getElementById('nut-hid')
const bisonHid = document.getElementById('bison-hid')




// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

// Play the jingle
const audio = new Audio('audio/tree.mp3')
document.getElementById('play-jingle').addEventListener('click', function() {
    audio.volume = .3
    audio.play()
})

//Close the recipe window
document.getElementById('tclose').addEventListener('click', closeRecipe)
document.getElementById('gclose').addEventListener('click', closeRecipe)
document.getElementById('nclose').addEventListener('click', closeRecipe)
document.getElementById('bclose').addEventListener('click', closeRecipe)

function closeRecipe() {
    numInput.value = ''
    veggie.checked = false
    removeStuff()
}


// Remove menu contents and recipe when changing input value 
numInput.addEventListener('keydown', removeStuff)

function removeStuff() {
    turkeyHid.classList.remove('visible')
    gooseHid.classList.remove('visible')
    bisonHid.classList.remove('visible')
    nutHid.classList.remove('visible')
    food.textContent = ''
}
    


// Add item to the menu
btn.addEventListener('click', dinner)

function dinner() {
    if (veggie.checked && numInput.value) {
        food.textContent = `Nut roast`
        nutHid.classList.add('visible')

    } else {
        if (numInput.value > 0 && numInput.value <= 4) {
        food.textContent = `Turkey`
        turkeyHid.classList.add('visible')           
    } else if (numInput.value < 10 && numInput.value > 0) {
        food.textContent = `Goose`
        gooseHid.classList.add('visible')
        } else if (numInput.value >= 10) {
            food.textContent = `Goose?  Maybe a Bison!`
            bisonHid.classList.add('visible')
        }
    }
}

