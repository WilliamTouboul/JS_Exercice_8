document.getElementById("submit").addEventListener('click', function checkAge(e){

    e.preventDefault();

    var regex = new RegExp("^[0-9\,\. ]+$");
    let age = document.getElementById("age").value;

    if (!regex.test(age) || age == null) {
        document.getElementById("target").innerHTML = "Vous n'avez pas saisi une valeure correcte.";
    }
    else if (age <= 0 || age >= 120 ) {
        document.getElementById("target").innerHTML = "Veuillez saisir un age valide";
    }
    else {

        if(age >= 18) {
            document.getElementById("target").innerHTML = 'Vous etes majeur';
        } else if (age<18) {
            document.getElementById("target").innerHTML ='Vous etes mineur';
        };
    }
  
})

    