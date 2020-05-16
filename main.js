const li = document.getElementsByTagName("li")

function videoUrl(){
    for(let i=0; i<li.length; i++){
        li[i].addEventListener("click", ()=>{
            document.getElementById('videoSlider').src =
            "/videos/vid" + i + ".mp4"
        })
    }
}

videoUrl()
