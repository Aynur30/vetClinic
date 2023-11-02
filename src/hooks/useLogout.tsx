import {useLogoutMutation} from "../services/auth/authentication.api";
import {setCredentials} from "../features/Auth/authSlice";
import {useAppDispatch} from "./hooks";

export const useLogout = () => {
  const [ logout ] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const enableLogout = async () => {
    await logout("");
    dispatch(setCredentials( {jwtToken: '', role: null} ));
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('role');
  }

  return { enableLogout };
}