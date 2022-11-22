
const steps = document.querySelectorAll('.step')
const nextBtn = document.querySelector('#next-btn')
const prevBtn = document.querySelector('#prev-btn')
const jumptoStartBtn = document.querySelector('#jump-to-start-btn')
const jumpToEndBtn = document.querySelector('#jump-to-end-btn')
const progressInd = document.querySelector('#progress-ind')
const progressBar = document.querySelector('#progress-bar')

// count step elements
const progressStart = 1
let progress = progressStart
const numberOfSteps = steps.length
const numberOfIntervals = numberOfSteps - 1



// :::: EVENT LISTENERS ::::
nextBtn.addEventListener("click", stepUp)
prevBtn.addEventListener("click", stepBack)
jumpToEndBtn.addEventListener("click", jumpToEnd)
jumptoStartBtn.addEventListener("click", jumpToStart)

toggleButtonMutes()

function stepUp()   {
    // progress
    progress++
    
    // PROGRESS BAR
    updateProgressBar()

    // buttons
    toggleButtonMutes()

}

function stepBack() {
    // progress
    progress--

    // progress bar
    updateProgressBar()

    //buttons
    toggleButtonMutes()

}

function jumpToStart()    {
    // progress
    progress = progressStart

    //progress bar
    updateProgressBar()

    // buttons
    mute(prevBtn)
    mute(jumptoStartBtn)
    unmute(nextBtn)
    unmute(jumpToEndBtn)


}

function jumpToEnd()  {
    // progress
    progress = numberOfSteps

    //progress bar
    updateProgressBar()

    // buttons
    unmute(prevBtn)
    unmute(jumptoStartBtn)
    mute(nextBtn)
    mute(jumpToEndBtn)
}

function toggleButtonMutes()  {
    if (progress == progressStart) {
        mute(prevBtn)
        mute(jumptoStartBtn)
    }
    
    if (progress == numberOfSteps) {
        mute(nextBtn)
        mute(jumpToEndBtn)
    }

    if (progress != numberOfSteps && progress != progressStart) {
        unmute(prevBtn)
        unmute(jumptoStartBtn)
        unmute(nextBtn)
        unmute(jumpToEndBtn)
    }

}

function mute(element)   {
    // console.log(`muting ${element}`)
    element.classList.add('muted')
}


function unmute(element)    {
    element.classList.remove('muted')
}

function updateProgressBar ()   {
    progressBar.style.width = `${(progress - 1) / numberOfIntervals * 100}%`
    fillInSteps()
}

function fillInSteps()    {
    steps.forEach(step => {
        step.classList.remove('active')
        if (step.id <= progress) {
            step.classList.add('active')
        }
    })
}