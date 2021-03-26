document.getElementById("se").oninput = Radius;
document.getElementById("sd").oninput = Radius;
document.getElementById("id").oninput = Radius;
document.getElementById("ie").oninput = Radius;

function Radius() {
    //CALCULATE AND SHOW RADIUS IN BOX\\
    var NumbersPX = [ document.getElementById('se').value + "px",
    document.getElementById('sd').value + "px",
    document.getElementById('id').value + "px",
    document.getElementById('ie').value + "px"];

    for(i = 0; i < NumbersPX.length; i++ ) {
        if(NumbersPX[i] == "px") {
            NumbersPX[i] = "0px"
        }
    }

    document.getElementById('box-radius').style.borderRadius = `${NumbersPX[0]} ${NumbersPX[1]} ${NumbersPX[2]} ${NumbersPX[3]}`;


    //SHOW RADIUS IN TEXT TO COPY\\
    document.querySelector('.copy_code_id').textContent = "border-radius: " + `${NumbersPX[0]} ${NumbersPX[1]} ${NumbersPX[2]} ${NumbersPX[3]}`
}