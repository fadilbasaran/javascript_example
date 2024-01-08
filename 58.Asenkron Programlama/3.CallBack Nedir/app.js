
function getName(callback) {
    setTimeout(() => {
        //Servisten isim istendi
        let name="Fadıl"//İsim geldi
        callback(name);
    }, 1000);
}
function getLastName(name,callback) {
    setTimeout(() => {

        let lastName= "Başaran"
        callback(lastName);//name göre lastName bulundu
        // console.log(name,lastName);
        
    }, 500);
}

function getAge(name,lastName,callback) {
    setTimeout(() => {
        let age= 23;
        callback(age);//name ve lastName göre age bulundu
    }, 300);
}
function getFatherName(name,lastName,age,callback) {
    setTimeout(() => {
        let fatherName= "Test";//name, lastName ve age göre fatherName bulundu
        callback(fatherName);
    }, 300);
}


// getName((name)=>{
//     getLastName(name,lastName);
// });

getName((name) => {
    getLastName(name,(lastName) => {
        getAge(name,lastName,(age)=>{
            getFatherName(name,lastName,age,(fatherName)=>{
                console.log(name,lastName,age,fatherName);
            })
        })
    })
});
// getLastName();
// getAge();