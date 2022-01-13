const main = document.getElementById("matrix");



const create = function () {


    for (let i = 1; i <= 100; i++) {     
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i);   

            if (i % 3 === 0 && i % 5 === 0) {                              
                newPar.appendChild(document.createTextNode(i + ' FIZZ BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizzbuzz");

            } else if (i % 3 === 0) {
                newPar.appendChild(document.createTextNode(i + ' FIZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizz");

            } else if (i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i + ' BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "buzz");

            } else {
                newPar.appendChild(document.createTextNode(i));
                main.appendChild(newDiv).setAttribute("class", "num");
            }
        }
    }
};    

create();
