var firebaseConfig = {
    apiKey: "AIzaSyD485KAJLXOq8Y3vqyvqsFixMIr1-r17oc",
    authDomain: "sigaa-ifsudeste-extensao.firebaseapp.com",
    databaseURL: "https://sigaa-ifsudeste-extensao-default-rtdb.firebaseio.com",
    projectId: "sigaa-ifsudeste-extensao",
    storageBucket: "sigaa-ifsudeste-extensao.appspot.com",
    messagingSenderId: "483750648861",
    appId: "1:483750648861:web:ff375b021cee5a291c3af4",
    measurementId: "G-Q9YX97L016"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function incrementarTesteAB(ab){
    firebase.database().ref('/' + ab).once('value').then((snapshot) => {
        let cliques = snapshot.val();
        database.ref(ab).set(cliques + 1);
    });
}