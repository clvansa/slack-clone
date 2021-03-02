import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) =>
            alert(error.message))
    };
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src='https://media0.giphy.com/avatars/slack/DrYKqoECOx66.png' alt='login' />
                <h1>Sign in to slack clone</h1>
                <p>lorem.slack.com</p>
                <Button type="submit" onClick={signIn} variant='outlined'>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login


const LoginContainer = styled.div`
    height:100vh;
    display:grid;
    place-items:center;
`;

const LoginInnerContainer = styled.div`
    padding:100px;
    text-align:center;
    background-color:white;
    border-radius:10px;

    >img {
        object-fit:contain;
        height:100px;
        margin-bottom:40px;
    }

    >button {
        margin-top:50px;
        text-transform:inherit !important;
        background-color:#0a8d48 !important;
        color:white;

        :hover {
            opacity:0.9
        }
    }
`;