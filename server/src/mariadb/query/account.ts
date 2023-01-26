import { queryPromise } from "./queryPromise";



export const accountQuery = {
  select:{
    loginByEmail:async function(userEmail:string) {
      return await queryPromise(`SELECT * FROM users WHERE Email = '${userEmail}';`)
    }
  },
  insert:{
    register:async function(values:any) {
      const {email,nickName,password,oauthType,oauthToken} = values;
      return await queryPromise(`INSERT INTO users(Email,Password,Name,OauthType,OauthToken,CreatedAt,UpdatedAt) VALUES('${email}','${password}','${nickName}','${oauthType}','${oauthToken}',current_timestamp,current_timestamp);`)
    },
  },
  update:{
    loginUpdateAt:async function (userId:string){
      return await queryPromise(`UPDATE users SET CreateAt = current_timestamp WHERE Id = ${userId};`)
    }
  }
}