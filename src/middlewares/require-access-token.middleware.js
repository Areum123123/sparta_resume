//auth.middleware에서 한거랑 같은일을 강의대로 하는중
//사용안할거면 주석처리 하던가 하삼.

// import jwt from 'jsonwebtoken';
// import { HTTP_STATUS } from "../constants/http-status.constant";
// import { ACCESS_TOKEN_SECRET_KEY } from '../constants/env.constant';
// import { prisma } from '../utils/prisma.util.js';


// export const requireAcessToken = async(req, res, next)=>{
//     try{
//         //인증정보 파싱 (req.headers.authorization을 가지고오겠다)
//     const authorization = req.headers.authorization;
//      //authorization 이 없는 경우
//      if(!authorization){
//         return res.status(HTTP_STATUS.UNAUTHORIZED).json({
//             status:HTTP_STATUS.UNAUTHORIZED,
//             message:"인증 정보가 없습니다.",
//         })
//      }

//      //jwt표준 인증 형태와 일치하지 않는 경우
//      const [tokenType, accessToken] = authorization.split(' ');
//     if (tokenType !== 'Bearer'){
//     return res.status(HTTP_STATUS.UNAUTHORIZED).json({
//         status:HTTP_STATUS.UNAUTHORIZED,
//         message: "지원하지 않는 인증 방식입니다."
//     });
//     }
      
//     //accesstoken 이 없는 경우
//     if(!accessToken){
//         return res.status(HTTP_STATUS.UNAUTHORIZED).json({
//             status:HTTP_STATUS.UNAUTHORIZED,
//             message: "인증 정보가 없습니다."
//      });
//     }
//     //페이로드를 가져와서 할당할것임
//     let payload;  //decodedToken과 같음
//     try{
    
//     payload = jwt.verify(accessToken,  ACCESS_TOKEN_SECRET_KEY) //access 와 비밀키
    
    
//     } catch(err){
//        //AccessToken 의 유효기한이 지난경우
//        if(console.error.name === 'TokenExpiredError'){
//         return res.status(HTTP_STATUS.UNAUTHORIZED).json({
//             status:HTTP_STATUS.UNAUTHORIZED,
//             message: "인증 정보가 만료되었습니다."
//        });
//     } //그 밖의 AccessToken 검증이 실패한 경우
//       else{ //'JsonWebTokenError'
//         return res.status(HTTP_STATUS.UNAUTHORIZED).json({
//             status:HTTP_STATUS.UNAUTHORIZED,
//             message: "인증정보가 유효하지 않습니다."
//        });
//       }
//     }
//     //payload에 담긴 사용자 ID 와 일치하는 사용자가 없는 경우
//      const {id} = payload;
//      const user = prisma.users.findUnique({
//         where:{id}, 
//         omit: {password:true},
//      })//yarn prisma generate 하고 omit 사용 패스워드 제외
     
//      if(!user){
//         return res.status(HTTP_STATUS.UNAUTHORIZED).json({
//             status:HTTP_STATUS.UNAUTHORIZED,
//             message: "인증 정보와 일치하는 사용자가 없습니다."
//         });
//      }
//      //req.user에 조회 된 사용자 정보를 담고, 다음동작을 진행합니다.
//      req.user = user;  // 이미들웨어를 사용해 조회되어 검증된 사용자정보를 받을수있다.

//      next();
//     }catch(err){
//      next(err);    
//     }
// }