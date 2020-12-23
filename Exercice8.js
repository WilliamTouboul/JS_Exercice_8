function checkAge(){

    var regex = new RegExp("^[0-9\,\. ]+$");
    let age = document.getElementById("age").value;

    if (!regex.test(age) || age == null) {
        alert('PAS BON');
    }
    else {
        if(age >= 18) {
            alert('Vous etes majeur');
        } else if (age<18) {
            alert ('Vous etes mineur');
        };
    }
  
}

    