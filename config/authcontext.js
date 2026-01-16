import { createUserWithEmailAndPassword ,signOut as firebaseSignOut,onAuthStateChanged} from "firebase/auth";
import { doc ,setDoc} from "firebase/firestore";
import { useContext,useEffect,useState,createContext } from "react";
import { db,auth as firebaseAuth } from "./firebaseconfig";
import { Alert } from "react-native";


const AuthContext = createContext()

export  const AuthProvider = ({children}) => {
    const [user,setUser ] = useState(null) 
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth,(user) => {
            if(user){
                setUser({uid:user.uid,email:user.email})
            }else{
                setUser(null)
            }
            setIsLoading(false)
        })
        return () => unsubscribe
    },[])

    // signup 
    const signUp = async ({fullname,username,phone,email,password}) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth,email,password)
            const u = userCredential.user
            try {
                await  setDoc(doc(db,"user"),{
                    fullname:fullname,
                    username:username,
                    phone:phone,
                    email:email,
                    createdAt:new Date().getTime()
                })
            } catch (error) {
                Alert.alert("an error ocuured","failed to create profile")
            }
            return{success :true,user:u}
        } catch (error) {
           Alert.alert("sign up error","check your email and password")
           console.log("error",error)
            
        }
        return {success:true,user:u}

    }
    // signin
    const signIn = async (userData) => {
        setUser(userData)

    };
    // logout
    const logOut = async () => {
        try {
            await firebaseSignOut(firebaseAuth)

        } catch (error) {
            Alert.alert("FAILED TO LOGOUT","PLEASE TRY AGAIN")
            
        }
    }
    <AuthContext.Provider value={{user,isLoading,signIn,signUp,logOut}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        Alert.alert("an error occured ","try again later")
    }
    return context
}
export default AuthContext