import { Router } from "express";
import authCreate from "../components/authCreate.js";
import CreateuserProfile from "../components/createUserProfile.js";
import getLocation from "../components/getLocation.js";
import getSkills from "../components/getSkills.js";
import getUser from "../components/getUser.js";
import getDevelopers from "../components/getDeveloper.js"

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to findev-app server");
});

router.post("/auth-create",async(req,res)=>{
    await authCreate(req.body,res)
})

router.post("/create-user-profile",async(req,res)=>{
  await CreateuserProfile(req.body,res)
})

router.post("/get-user",async(req,res)=>{
  await getUser(req.body,res)
})

router.post("/get-location",async(req,res)=>{
  await getLocation(req.body,res)
})

router.post("/get-skills",async(req,res)=>{
  await getSkills(req.body,res)
})

router.get("/get-developers",async(req,res)=>{
  await getDevelopers(res)
})








export default router;
