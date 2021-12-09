var textinput=document.querySelector("#txt-input");
var txtoutput=document.querySelector("#output");
var btntranslate=document.querySelector("#btn-translate");

var btntranslate = document.querySelector("#btn-translate");

var serverUrl="https://api.funtranslations.com/translate/valyrian.json";

function getTranslationUrl(test){
    return serverUrl+"?"+"text="+test;
}

function writingOutput(test){
    console.log(test);
    txtoutput.innerText=test.contents.translated;
}

function errorHandler(error){
    console.log("error is "+error);
    alert("There is a error in the website,Try again later");
}

function clickhandler(){
    var inputText=textinput.value;

    fetch(getTranslationUrl(inputText))
    .then(response=>response.json())
    .then(json=>writingOutput(json))
    .catch(errorHandler)
    
}

btntranslate.addEventListener("click",clickhandler);

// fetch().then(response=>response.json()).then(json=>console.log(json));