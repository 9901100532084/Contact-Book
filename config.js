

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey("leratosithole0123@gmail.com");

function checkApiKey() {
    //Check if the API Key is stored
    const storedkey = localStorage.getItem("apikey")
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
       // If not found,redirect to the API Key entry page if (!storedkey){
    }window.location.href="enter-api-key.html";
    return null;
    
    return localStorage.getItem("apiKey");
      //Return the stored API key
      return storedkey;
}

