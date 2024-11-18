document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault()
    const name = document.getElementById('contact-name').value
    const email = document.getElementById('contact-email').value
    const phone = document.getElementById('contact-phone').value
    const message = document.getElementById('contact-message').value
    const pref_phone = document.getElementById('CM-phone').checked
    const pref_email = document.getElementById('CM-email').checked

    console.log(name, email,phone,message,pref_phone,pref_email)

    if(name.length == 0){
        alert("Name box must be filled")
    }

    if(email.slice(email.length - 10) != "@gmail.com"){
        alert("Email must ends with @gmail.com")
        return
    }

    let temp_phone = phone.split('-')
    let pass = true
    temp_phone.forEach(element =>{
        if(element.length != 4) pass = false
        for(let i = 0 ; i < element.length ; i++){
            if(isNaN(element[i])) pass = false
        }
    })

    if(phone[0] != '0' || phone[1] != '8' || pass == false ){
        alert('Phone Number template is Incorrect')
        return
    }

    words = 0;
    for (let i = 0 ; i < message.length ; i++){
        if (message[i] == ' ') words+=1;
    }

    if(words <= 10){
        alert('Message must be more than 10 words')
        return
    }

    if(!pref_phone && !pref_email){
        alert('You need to choose at least one of the preffered methods')
        return
    }

    
})