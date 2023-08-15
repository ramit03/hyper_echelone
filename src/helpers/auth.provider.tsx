import auth from '@react-native-firebase/auth';
import { GoogleSignin} from '@react-native-google-signin/google-signin';
import '@react-native-firebase/auth';
type googleSignInProps = {
    webClientId: string,
}



GoogleSignin.configure({
    webClientId:'238827173713-3eo8fe9av2i0gqp9u5o4vhd36n86tdmv.apps.googleusercontent.com',
});

export const authService = {
    handleGoogleSignin,
    logout
}

async function handleGoogleSignin() {
    try{
        await GoogleSignin.hasPlayServices();
        const { userInfo } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(userInfo);

        return auth().signInWithCredential(googleCredential);
    } catch (e) {
        console.log(e);
    }
}

async function logout() {
    try {
        await auth().signOut();
    } catch (e) {
        console.error(e);
    }
}

