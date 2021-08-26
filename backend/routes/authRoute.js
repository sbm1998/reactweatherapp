import express from 'express';
import {signin,signup} from '../controllers/authentication.js'
import { getFetchData } from '../controllers/weatherinfo.js';
import { userGeoLocation } from '../controllers/weatherinfo.js';

const auth_router=express.Router()

auth_router.post("/signin", signin);
auth_router.post("/signup", signup);
auth_router.get("/weatherdata",getFetchData)
auth_router.get("/locationdata",userGeoLocation)

export default auth_router;

