export default function runScript() {
    var url_string = window.location.href
    var url = new URL(url_string)
    var video = `videos/${url.searchParams.get("v")}.mp4`
    var aberturainicio = Number(url.searchParams.get("as"))
    var aberturafim = Number(url.searchParams.get("ae"))


    var element = document.createElement("video")
    element.setAttribute("id", "video")
    element.setAttribute("class", "video-js vjs-fluid")
    element.setAttribute("controls", "")
    element.setAttribute("preload", "auto")
    element.setAttribute("width", "642")
    element.setAttribute("height", "264")
    element.setAttribute("poster", "https://i.pinimg.com/474x/b4/f0/4f/b4f04fa480a692b73893e6d51cb3fd1d--star-art-star-butterfly.jpg")
    element.setAttribute("data-setup", "{}")

    var p = document.createElement("p")
    p.innerHTML = 'To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="https://videojs.com/html5-video-support/" target="_blank"> supports HTML5 video</a>'
    p.setAttribute("class", "vjs-no-js")
    element.appendChild(p)

    var source = document.createElement("source")
    source.setAttribute("src", video)
    source.setAttribute("type", "video/mp4")
    element.appendChild(source)

    document.getElementById("content").appendChild(element)


    var btnpa = document.createElement("input")
    btnpa.setAttribute("id", "btnpa")
    btnpa.setAttribute("type", "button")
    btnpa.setAttribute("value", "PULAR ABERTURA")
    btnpa.disabled = true
    btnpa.setAttribute("onclick", "pularAbertura()")
    btnpa.setAttribute("class", "vjs-pular-abertura")
    btnpa.style.display = "none"


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
    document.getElementsByClassName("vjs-ziera")[0].insertBefore(btnpa, document.getElementsByClassName("vjs-error-display")[0])

    myPlayer.on('playing', function () {
        btnpa.style.display = "block"
    })
}