import firebase from 'firebase/app';

//API sugere importar todos os módulos firebase que serão utilizados no projeto
import 'firebase/auth';
import 'firebase/database';

// Dados trazidos do projeto criado na conta do firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    //Dados foram armazenados em .env.local para não serem sincronizados com o github público
    //nomes das variáveis ambiente, qnd projeto criado com create react-app precisam iniciar com REACT_APP_
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Dados trazidos do projeto criado na conta do firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//criando paths para não precisar reescrever os imports em outras áreas do código
export const auth = firebase.auth();
export const database = firebase.database();