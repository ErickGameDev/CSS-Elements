//document.getElementById("send-button").onclick = showShadow;

document.getElementById("color").oninput = showShadow;

document.getElementById("dir_esq").oninput = showShadow;

document.getElementById("inf_sup").oninput = showShadow;

document.getElementById("bor").oninput = showShadow;

function showShadow() {
    var colorShadow = "#" + document.getElementById('color').value;

    if(colorShadow == "#") {
        colorShadow = "#000000"
    }

    var sizes = [
        document.getElementById('dir_esq').value + "px",
        document.getElementById('inf_sup').value + "px",
        document.getElementById('bor').value + "px",
    ]

    for(i = 0; i <= sizes.length; i++) {
        if(sizes[i] == "px") {
            sizes[i] = "0px"
        }
    }

    document.getElementById('box-shadow').style.boxShadow = `${sizes[0]} ${sizes[1]} ${sizes[2]} 0 ${colorShadow}`;



    //SHOW RADIUS IN TEXT TO COPY\\
    document.querySelector('.copy_code_id').textContent = "box-shadow: " + `${sizes[0]} ${sizes[1]} ${sizes[2]} 0 ${colorShadow}`

}