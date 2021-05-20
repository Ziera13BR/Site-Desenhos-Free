function createElements(video) {
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
    btnpa.setAttribute("class", "vjs-pular-abertura")
    btnpa.style.display = "none"

    document.getElementsByClassName("vjs-ziera")[0].insertBefore(btnpa, document.getElementsByClassName("vjs-error-display")[0])
}