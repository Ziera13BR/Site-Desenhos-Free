export function pularAbertura() {
    var url_string = window.location.href
    var url = new URL(url_string)
    var aberturafim = Number(url.searchParams.get("ae"))


    var myPlayer = videojs(document.getElementById("video"))
    myPlayer.currentTime(aberturafim + 0.0001)
}