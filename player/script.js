export function runScript() {
    var url_string = window.location.href
    var url = new URL(url_string)
    var aberturainicio = Number(url.searchParams.get("as"))
    var aberturafim = Number(url.searchParams.get("ae"))


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


    myPlayer.addClass("vjs-ziera")

    myPlayer.on('playing', function () {
        btnpa.style.display = "block"
    })
}