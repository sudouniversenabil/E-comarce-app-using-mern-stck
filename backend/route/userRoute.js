import express from "express";

import {loginUser, registerUser, adminlogin, getProfile, updateProfile } from "../controloer/userControloer.js";

import authUser from '../middleware/auth.js'
import upload from '../middleware/malter.js'

const userRouter=express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

userRouter.post("/admin",adminlogin)
userRouter.post('/profile', authUser, getProfile)
userRouter.post('/update-profile', upload.single('image'), authUser, updateProfile)


export default userRouter




