import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDe2Dxv3MHqbHyBgn9KWCOYjyGWIu0oFjk",
    authDomain: "konva-node.firebaseapp.com",
    projectId: "konva-node",
    storageBucket: "konva-node.appspot.com",
    messagingSenderId: "1006703041444",
    appId: "1:1006703041444:web:ccabb9611bec088923ff31"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export { firebaseApp, firebase }
