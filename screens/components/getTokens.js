import React,{useState} from 'react';
import * as AuthSession from 'expo-auth-session';
import { encode as btoa } from 'base-64';
import spotifyCredentials from './secrets';
import getAuthorizationCode from './getAuthorizationCode';

export default async function getTokens(clientId,redirectURI){

  try {
    const authorizationCode = await getAuthorizationCode(clientId,redirectURI)
    const credsB64 = btoa(`${spotifyCredentials.clientId}:${spotifyCredentials.clientSecret}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${
        spotifyCredentials.redirectUri
      }`,
    });
    const responseJson = await response.json();
    await fetch('http://192.168.1.43:3000/saveToken',{
      method:'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `refreshToken=${responseJson.refresh_token}&accessToken=${responseJson.access_token}`
    })
  } catch (err) {
    console.error(err);
  }
}


