function check(){
    var data = new Date()
    var now_year = data.getFullYear()
    var fage = window.document.getElementById("yeartxt")

    var res = window.document.querySelector('div#res')
    
    if(fage.value.length == 0 || Number(fage.value) > now_year){
        window.alert('[ERROR] Check your data again!')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var age = now_year - Number(fage.value)
        var gender = ''

        var img = window.document.createElement("img")
        img.setAttribute('id', 'photo')
        if(fsex[0].checked){
            gender = 'Male'
            if(age >= 0 && age <= 3){
                //baby
                img.setAttribute("src", 'babyM.png')
            } else if(age < 12){
                //child
                img.setAttribute("src", 'childM.png')
            } else if(age < 18){
                //teen
                img.setAttribute("src", 'teenM.png')
            } else if(age < 21){
                //young
                img.setAttribute("src", 'youngM.png')
            } else if(age < 60){
                //adult
                img.setAttribute("src", 'adultM.png')
            } else{
                //elderly
                img.setAttribute("src", 'elderlyM.png')
            }
        } else{
            gender = 'Female'
            if(age >= 0 && age <= 3){
                //baby
                img.setAttribute("src", 'babyF.png')
            } else if(age < 12){
                //children
                img.setAttribute("src", 'childF.png')
            } else if(age < 18){
                //teen
                img.setAttribute("src", 'teenF.png')
            } else if(age < 21){
                //young
                img.setAttribute("src", 'youngF.png')
            } else if(age < 60){
                //adult
                img.setAttribute("src", 'adultF.png')
            } else{
                //elderly
                img.setAttribute("src", 'elderlyF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detected ${gender} with ${age} years old.`
        res.appendChild(img)
    }
    


}