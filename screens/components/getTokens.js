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

    await fetch('http://192.168.0.25:3000/saveToken',{

//Matthieu  http://192.168.1.8
// IP Marion http://192.168.1.25
// IP Dim http://192.168.0.25

      method:'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `refreshToken=${responseJson.refresh_token}&accessToken=${responseJson.access_token}`
    })
  } catch (err) {
    console.error(err);
  }
}


