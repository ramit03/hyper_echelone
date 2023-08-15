import auth from "@react-native-firebase/auth";

export async function authHeader() {
    let token = auth().currentUser?.getIdToken()

    if (token) {
        return token ;
    } else {
        return null;
    }
}