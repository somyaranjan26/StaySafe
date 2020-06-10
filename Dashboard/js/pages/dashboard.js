LoadCustomers();

function LoadCustomers() {
  var firebaseConfig = {
    apiKey: "AIzaSyAqVGghrFkcudanX8-KQJeJdw7wV8A0qeQ",
    authDomain: "staysafe-85660.firebaseapp.com",
    databaseURL: "https://staysafe-85660.firebaseio.com",
    projectId: "staysafe-85660",
    storageBucket: "staysafe-85660.appspot.com",
    messagingSenderId: "1033315780461",
    appId: "1:1033315780461:web:517973725e1908017ebc64",
    measurementId: "G-C2HQE14QWV",
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  // firebase.analytics();

  var firestore = firebase.firestore();
  var CustomersHTML = "";
  var index = 1;
  var CountTotal = 0;
  var CountMonth = 0;
  var CountToday = 0;
  var CurrentMonth = new Date().getMonth() + 1;
  var TodayDate = new Date().getDate();

  firestore
    .collection(localStorage.getItem("locationTag")+"/Scanned/Data")
    .get()
    .then(function (querySnapshot) {

      CountTotal = querySnapshot.size;

      querySnapshot.forEach(function (doc) {
        const mydata = doc.data();

        mydata.ScannedMonth == CurrentMonth?CountMonth++:null;
        ((mydata.ScannedDate == TodayDate) && (mydata.ScannedMonth == CurrentMonth))?CountToday++:null;
        

        var date = mydata.ScannedDate+'/'+mydata.ScannedMonth+'/'+mydata.ScannedYear;
        var time = mydata.ScannedTime;
        var name = mydata.Name;
        var gender = mydata.Gender;
        var age = mydata.Age;
        var city = mydata.City;
        var state = mydata.State;
        var uid = mydata.UID;

        CustomersHTML += `
        <tbody class = "customer-list">
          <tr>
          <td>${index}</td>
          <td>${date}</td> 
          <td>${time}</td> 
          <td>${name}</td> 
          <td>${gender}</td> 
          <td>${age}</td> 
          <td>${city} </td> 
          <td>${state} </td> 
          <td>${uid} </td> 
          </tr> 
        </tbody>
        `;
        document.querySelector(".customer-list").innerHTML = CustomersHTML;
      });
      document.querySelector("#CountTotal").innerHTML = CountTotal;
      document.querySelector("#CountMonth").innerHTML = CountMonth;
      document.querySelector("#CountToday").innerHTML = CountToday;

    });
}
