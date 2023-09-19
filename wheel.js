export function wheel (element) {
    const spinButton = document.querySelector('#spin')
    const wheelElement = element.querySelector('#wheel')
    const wheelImage = element.querySelector('#wheel-image')

    const spin = (wheelRandom) => {
        spinButton.removeAttribute('disabled');
        wheelImage.classList.toggle('spin-stop')
        // wheelImage.classList.remove('spin-it')
        wheelElement.textContent = `hjulet snurrade ${wheelRandom}`

    }

    
    spinButton.addEventListener('click', () => {
        spinButton.setAttribute('disabled', true);
        const wheelRandom = Math.ceil(Math.random() * 12)
        console.log(wheelRandom)
        wheelImage.classList.add('spin-it')
        wheelImage.classList.remove('spin-stop')
        const animationTime = 1000 + ((wheelRandom -1) + 1000 / 12)
        setTimeout(() =>{spin(wheelRandom)}, animationTime)
    })
}
