function submitForm() {
    let name = document.querySelector('#name').value
    let hair = document.querySelector('input[name=hair]:checked').value
    let hairtone = document.querySelector('input[name=hairtone]:checked').value
    let tan = document.querySelector('input[name=tan]:checked').value
    let palms = document.querySelector('input[name=palms]:checked').value
    let eyes = document.querySelector('input[name=eyes]:checked').value
    let jewelry = document.querySelector('input[name=jewelry]:checked').value
    let flower = document.querySelector('input[name=flower]:checked').value
    let sunburn = document.querySelector('input[name=sunburn]:checked').value
    let veins = document.querySelector('input[name=veins]:checked').value
    let gemstone = document.querySelector('input[name=gemstone]:checked').value
    let eyelashes = document.querySelector('input[name=eyelashes]:checked').value
    let lips = document.querySelector('input[name=inside_lip]:checked').value
    let cheeks = document.querySelector('input[name=cheeks]:checked').value
    let skintone = document.querySelector('input[name=skintone]:checked').value
    /* let elements = document.querySelectorAll('input[name=additives]:checked')
    let addons = []
    elements.forEach(function(element) {
        addons.push(element.value) */
    })

    alert(`Hello ${name}! Your ${drink} with ${addons} added will be ready shortly. Thank you for your order!!😃`)

}