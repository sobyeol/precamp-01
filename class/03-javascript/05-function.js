const verifyNumber = () => {
    let verify = String(Math.floor( Math.random() * 1000000 )).padStart(6,"0")

    document.getElementById("number").innerText = verify
    document.getElementById("number").style.color = "#" + verify
}
