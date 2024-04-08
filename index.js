import express from 'express';
import { google } from "googleapis";
import { getGoogleOAuthURL } from './getGoogleUrl.js';


console.log(getGoogleOAuthURL());
