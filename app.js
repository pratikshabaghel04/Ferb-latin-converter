const translateBTN = document.getElementById('btn');
const inputText = document.getElementById('input');
const outputText = document.getElementById('output');

let setURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(text) {
    return setURL + "?" + "text=" + text;
}

function clickHandler() {
    let text = inputText.value;
    fetch(getTranslationURL(text))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(erorHandler)
}
function erorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}
translateBTN.addEventListener("click", clickHandler);