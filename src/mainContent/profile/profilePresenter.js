import { getAuth } from "firebase/auth";
import ProfileView from "./profileView";

export default function ProfilePresenter() {
    //console.log(getAuth().currentUser);
    
    return <ProfileView />
}
