export const HTTP_STATUS = {
    OK:200,  //호출성공
    CREATE :201, //생성성공
    BAD_REQUEST :400, // 사용자가 값을 입력하지 않거나 잘못된 입력을 했을때
    UNAUTHORIZED :401, // 인증실패 (예:비번틀렸을때)
    FORBIDDEN: 403, //인가실패 (예: 접근권한이 없을때)
    NOTFOUND:404, //
    CONFLICT:409,//충돌이 발생했을때 (예:이메일 중복)
    INTERNAL_SERVER_ERROR:500, //예상치 못한 에러가 발생
}