import useStore from "../Store";
import { useNavigate } from "react-router-dom";

export default function AuthCom({children}) {

  const { isAuth } = useStore();
  const navigate = useNavigate();
  if(isAuth){
    navigate("/" , {replace: true});
  }

  return children
}
