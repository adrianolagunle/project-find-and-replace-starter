

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const replaceONeButton = document.querySelector(".replace-one-button")




const rowElements = document.querySelectorAll(".row")


 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}



replaceAllButton.addEventListener("click", function () {
    let inputString = findInput.value
    let replaceString = replaceInput.value
    for (let index = 0; index < rowElements.length; index = index + 1) {

        let currentRowElement = rowElements[index]
        let currentCellElementArray = getCellElements(currentRowElement)
     
        for (let index2 = 0; index2 < currentCellElementArray.length; index2 = index2 + 1) {
            let currentCellElement = currentCellElementArray[index2]
            
            if (currentCellElement.innerHTML.includes(inputString)) {
               let newString = currentCellElement.innerHTML.replace(inputString, replaceString)
               currentCellElement.innerHTML = newString
                
            }
        }

    }
})

replaceONeButton.addEventListener("click", function (){
    let inputString = findInput.value
    let replaceString = replaceInput.value
    for (let index = 0; index < rowElements.length; index = index + 1) {

        let currentRowElement = rowElements[index]
        let currentCellElementArray = getCellElements(currentRowElement)
     
        for (let index2 = 0; index2 < currentCellElementArray.length; index2 = index2 + 1) {
            let currentCellElement = currentCellElementArray[index2]
            
            if (currentCellElement.innerHTML.includes(inputString)) {
               let newString = currentCellElement.innerHTML.replace(inputString, replaceString)
               currentCellElement.innerHTML = newString
               return
                
            }
        }

    }
})



