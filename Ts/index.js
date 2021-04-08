var typeBtn = document.getElementById("a_type");
var typeBox = document.getElementById("typeBox");
var led = document.getElementById('led');
typeBtn.addEventListener('mousemove', function () {
    typeBox.style.display = 'block';
});
typeBtn.addEventListener('mouseout', function () {
    typeBox.style.display = 'none';
});
