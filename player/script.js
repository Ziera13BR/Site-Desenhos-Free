export function runScript(aberturainicio, aberturafim) {
    var btnpa = document.createElement("input")
    btnpa.setAttribute("id", "btnpa")
    btnpa.setAttribute("type", "button")
    btnpa.setAttribute("value", "PULAR ABERTURA")
    btnpa.disabled = true
    btnpa.setAttribute("class", "vjs-pular-abertura")
    btnpa.style.display = "none"

    document.getElementsByClassName("vjs-ziera")[0].insertBefore(btnpa, document.getElementsByClassName("vjs-error-display")[0])


    var myPlayer = videojs(document.getElementById('video'))
    var loop = setInterval(function () {
        if (myPlayer.currentTime() >= aberturainicio && myPlayer.currentTime() <= aberturafim) {
            document.getElementById("btnpa").disabled = false
        }
        if (myPlayer.currentTime() > aberturafim) {
            document.getElementById("btnpa").remove()
            clearInterval(loop)
        }
    }, 10)


    myPlayer.on('playing', function () {
        btnpa.style.display = "block"
    })
}