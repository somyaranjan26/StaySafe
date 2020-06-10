LoadEmployee();

function LoadEmployee() {
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
    // firebase.analytics();
    var firestore=firebase.firestore();
    var RoleHTML = '';
    var index = 1;

    firestore.collection("CheckerLogin").where("LocationTag","==",localStorage.getItem("locationTag")).get().then(function(querySnapshot) {
      
      querySnapshot.forEach(function(doc) {
        const mydata=doc.data();
      
        var name = mydata.Name;
        var mobileNum = mydata.Username;
        var Password = mydata.Password;
        
        RoleHTML += `
          <tbody class="employee-list">
            <tr>
              <td> ${index++} </td>
              <td id="eName"> ${name}</td>
              <td id="eMobNum">${mobileNum}</td>
              <td id="cPassword">${Password}</td>
            </tr>
          </tbody>  
        `
          document.querySelector(".employee-list").innerHTML = RoleHTML;
      });

    });
}
