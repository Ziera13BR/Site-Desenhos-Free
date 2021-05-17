function onclick() {
    document.getElementById("star-btn").onclick = function () {
        location.href = 'star-vs-as-forcas-do-mal'
    }
    
}

if (document.readyState === 'complete') {
    onclick()
} else {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            onclick()
        }
    }
}
