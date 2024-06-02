//transation 활용 역할인가 middleware
import { HTTP_STATUS } from "../constants/http-status.constant.js";

export const requireRoles =(roles)=>{
    return (req, res, next)=>{
    try{
        const user = req.user; //user정보에 role정보가 담겨있음
        //user가 존재가하고 user의 role이 넘겨받은 roles에 포함이 되어 있는가.포함이 되면 권한이 있다는것
        const hasPermission =user && roles.includes(user.role);
        console.log(user)
   
        //권한이 없다면.
    if(!hasPermission){
    return res.status(HTTP_STATUS.FORBIDDEN).json({
        status:HTTP_STATUS.FORBIDDEN,
        message:"접근 권한이 없습니다."
    })
   }
     next(); //권한이있다면 next 로 넘어감.
    }catch(err){
       next(err);
     }
    }
}

//위에 코드를 가지고 이력서 지원 상태 변경 API 를 만든다.

// function require(roles){
// return (req, res, next) =>{}
// }