function addChecker() {
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
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    var firestore = firebase.firestore();
    var emName = document.querySelector('#eName');
    var emPassword = document.querySelector('#ePassword');
    var emMobNum = document.querySelector('#eMobNum');
    var emLocTag = localStorage.getItem('locationTag');
    var emSubmit = document.querySelector('#eSubmit');

    
    
    emSubmit.onclick = function () {

        console.log("firebase intialized");
        // console.log(emLocTag);
        // console.log(emMobNum.value);

        docRef = firestore.collection('CheckerLogin').doc(emMobNum.value);
        var setWithMerge = docRef.set({
                Name: emName.value,
                Username: emMobNum.value,
                Password: emPassword.value,
                LocationTag: localStorage.getItem('locationTag')
            }, {
                merge: true
            }).then(function () {
                console.log("Document successfully written!");
                alert("Checker Added!!\n\n" + "ID: " + emMobNum.value + "\n" + "Password : " + emPassword.value);
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }
}