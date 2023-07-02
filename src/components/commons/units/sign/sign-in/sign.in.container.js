import SignInView from "./sign.in.presenter"
import { Cookies, useCookies } from 'react-cookie'  // cookie 
import { useState, useCallback  } from 'react';
import axios from 'axios'
import jwt from 'jsonwebtoken'; // jwt
import Router, { useRouter } from 'next/router'

export default function SignInContainer(props) {
 
  return (
    <>  
      <SignInView />
    </>
  )

}