let typeBtn = document.getElementById("a_type")
let typeBox = document.getElementById("typeBox")
let led = document.getElementById('led')

typeBtn.addEventListener('mousemove', function () {
    typeBox.style.display = 'block'
})
typeBtn.addEventListener('mouseout', function () {
    typeBox.style.display = 'none'
})



