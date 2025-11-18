(function () {//enclose our code so people can't edit it from console


    // handle core logic here




    // handle document navigation logic here 




    let elements = document.getElementsByClassName("toggle")// any object with the classname toggle

    for (let i = 0; i < elements.length; i++) {

        elements[i].addEventListener("click", function () {
            let toggleId = children[i].getAttribute("toggleId");// a custom attribute for an object that has the id of the object you want it to toggle
            if (toggleId) {

                let toggleElement = document.getElementById(toggleId)

                if (toggleElement) {
                    toggleElement.hidden = !toggleElement.hidden
                }
         
            }  
        });


    }   
})();