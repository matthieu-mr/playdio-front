import React,{useState} from 'react';
import * as AuthSession from 'expo-auth-session';
import { encode as btoa } from 'base-64';
import getAuthorizationCode from './getAuthorizationCode';

export default async function getTokens(clientId,redirectURI,clientSecret){

  try {
    const authorizationCode = await getAuthorizationCode(clientId,redirectURI)
    const credsB64 = btoa(`${clientId}:${clientSecret}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${
        redirectURI
      }`,
    });
    const responseJson = await response.json();
<<<<<<< HEAD
    await fetch('http://192.168.1.25:3000/saveToken',{
=======
//Matthieu  http://192.168.1.8


    await fetch('http://192.168.1.8:3000/saveToken',{
>>>>>>> 79d3a1a9a76ab5a02e479a465af6369c9bb0e83b
      method:'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `refreshToken=${responseJson.refresh_token}&accessToken=${responseJson.access_token}`
    })
  } catch (err) {
    console.error(err);
  }
}


