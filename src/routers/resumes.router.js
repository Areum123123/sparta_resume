import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { prisma } from "../utils/prisma.util.js";

const router= express.Router();

//이력서 생성 API
router.post('/resumes', authMiddleware, async(req, res, next)=> {

const {userId} = req.user;
const {title, introduction} =req.body;
//제목,자기소개입력
if(!title || !introduction){
    const missingFields =[]
   if(!title){missingFields.push('제목')} 
   if(!introduction){missingFields.push('자기소개')} 
    return res.status(400).json({status:400, message:`${missingFields}을(를) 입력해주세요.`})
}
//자기소개150자
if(introduction.length < 150){
    return res.status(400).json({status:400, message:"자기소개는 150자 이상 작성해야 합니다."})
}
//이력서생성
const resume = await prisma.resumes.create({
  data:{
    UserId : +userId,
    title,
    introduction,
  }
})

return res.status(201).json({data: resume})

} )


export default router;