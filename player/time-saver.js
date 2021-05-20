export function timeSaver(video, aberturafim, endingTime) {
    var myPlayer = videojs(document.getElementById('video'))
    myPlayer.on('playing', function () {
        if (localStorage.getItem(video)) {
            myPlayer.currentTime(Number(localStorage.getItem(video)))
        } else {
            var saving = setInterval(function () {
                if (myPlayer.currentTime() >= endingTime) {
                    clearInterval(saving)
                    localStorage.removeItem(video)
                } else {
                    if (myPlayer.currentTime() > aberturafim) {
                        localStorage.removeItem(video)
                        localStorage.setItem(video, (myPlayer.currentTime() - 2))
                    }
                }
            }, 500)
        }
    })
}