import Rebase from "re-base";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBcsKoxRVQXAKr3hvzGxXhGIE5fW5laBEw",
    authDomain: "tdg-bol.firebaseapp.com",
    databaseURL: "https://tdg-bol.firebaseio.com"
  };

const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;