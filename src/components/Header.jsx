import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signOutHandler = ()=>{
    signOut(auth).then(()=>{
      navigate("/")
    })
  }
  

  useEffect(() => {
    const unSubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return ()=> unSubscribe()
  }, []);
  return (
    <div className="w-full p-6 fixed top-0 z-[9999] sm:px-20 flex justify-between items-center text-white" >
      <img src="logo.svg" className="h-7 sm:h-10" />
      <h2 onClick={signOutHandler}  className="font-semibold hover:underline cursor-pointer">Log Out</h2>
    </div>
  );
};

export default Header;
