let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 8
    text_speak.volume = 1
    window.speechSynthesis.speak(text_speak)
}

function wishme() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Afternoon Sir")
    }
    else if (hours >= 12 && hours > 20) {
        speak("Good night Sir")
    } else {
        speak("Good Afternoon Sir")
    }
}
window.addEventListener('load', () => {
    wishme()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"

})
function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("Hello Friday")) {
        speak("hello sir, what can i help you?")
    }

    else if (message.includes("wo are you?")) {

    } else if (message.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes("who are you")) {
        speak("hello sir ma'am,i am your virtual assistant DODO,how can i help you")
    } else if (message.includes("open google")) {
        speak("opening google")
        window.open("https://www.google.com/")
    }
    else if (message.includes("facebook")) {
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if (message.includes("open instagram")) {
        speak("opening insta")
        window.open("https://www.instagram.com/")
    }
    else if (message.includes("Hello dodo")) {
        speak("hello sir, what can i help you?")
    }
    
    else if (message.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    }
    else if (message.includes("open flipkart")) {
        speak("opening flipkart")
        window.open("https://www.flipkart.com/")
    }
    else if (message.includes("open amazon")) {
        speak("opening amazon")
        window.open("https://www.amazon.in/")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp")
        window.open("https://www.whatsapp.com/")
    }
    else if (message.includes("what is html")) {
        speak("ok wait sir")
        window.open("https://www.w3schools.com/")
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }
    else if (message.includes("Date")) {
        let Date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(time)

    }
    else {
        let finalText = "this is what i found on internet regarding" + message.replace("dodo", "") || message.replace
            ("dodo", "")
        speak(finalText)
        window.open(`https://wwww.google.com/{message.replace("dodo", "")}`, "_blank")
    }
}

