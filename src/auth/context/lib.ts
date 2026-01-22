import { FIREBASE_API } from '@/config-global';
import { initializeApp } from 'firebase/app';


// ----------------------------------------------------------------------

export const firebaseApp = initializeApp(FIREBASE_API);