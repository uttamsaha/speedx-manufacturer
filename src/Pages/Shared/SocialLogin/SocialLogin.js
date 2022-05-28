import React from 'react'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {ImGoogle,ImGithub} from 'react-icons/im';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../Loadng/Loading';
import './SocialLogin.css'

const SocialLogin = () => {
  let showError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const[token] = useToken(user);
  const [githubToken] = useToken(user1);
  if (error || error1) {
    showError = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (user || user1) {
    navigate(from, {replace: true});
  }

  return (
    <div className='social-login-container'>
        <p className='prompt'>or</p>
        {showError}
        <div className='social-login'>
        <button onClick={()=> signInWithGoogle()} className='google-signin'><ImGoogle className='social-icon'></ImGoogle> Login with Google</button>
        <button onClick={()=> signInWithGithub() } className='github-signin'><ImGithub className='social-icon'></ImGithub>Login with Github</button>
        </div>
    </div>
  )
}

export default SocialLogin;