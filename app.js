window.onload=function(event){
const buten = document.getElementsByClassName("btn");
    buten.onclick=function(event){
        event.preventDefault();
        fetch("superheroes.php")
        .then(function(response){
            if (response.ok){
                return response.text();
            } else{
                return Promise.reject("error");
            }
        })
        .then(function(data){
            alert(data);
        })
        .catch(error, function(){
            console.log(error);
        })
    }
}
