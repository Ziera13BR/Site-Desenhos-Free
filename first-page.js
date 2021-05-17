function onclick() {
    document.getElementById("star-btn").onclick = function () {
        location.href = 'file:///C:/Geral/Site-Desenhos-Free-1/star-vs-as-forcas-do-mal/index.html'
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