// Your web app's Firebase configuration
function loadLogin() {
    var firebaseConfig = {
        apiKey: "AIzaSyAqVGghrFkcudanX8-KQJeJdw7wV8A0qeQ",
        authDomain: "staysafe-85660.firebaseapp.com",
        databaseURL: "https://staysafe-85660.firebaseio.com",
        projectId: "staysafe-85660",
        storageBucket: "staysafe-85660.appspot.com",
        messagingSenderId: "1033315780461",
        appId: "1:1033315780461:web:517973725e1908017ebc64",
        measurementId: "G-C2HQE14QWV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // firebase.analytics();
    var firestore = firebase.firestore();

    var loads = document.querySelector('#submit');
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    var id, pd, cl, cn, lt;


    loads.onclick = function () {
        var emv = email.value;
        var psv = password.value;

        docRefs = firestore.collection('ManagerLogin').doc(emv);
        docRefs.get().then(function (doc) {
            if (doc && doc.exists) {
                const mydata = doc.data();
                pd = mydata.Password;
                lt = mydata.LocationTag;

                if (psv == pd) {
                    console.log("user logged in" + emv);
                    localStorage.setItem("locationTag", lt);
                    window.open("dashboard.html", '_self');
                } else {
                    console.log("Wrong Password");
                    alert("Wrong Password");
                }
            } else {
                console.log("User not exist");
                alert("User not exist");
            }
        }).catch(function (error) {
            console.log("Got an  error:", error);
        });

    };
}