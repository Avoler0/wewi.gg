import { queryPromise } from "./queryPromise";

export const matesQuery = {
  select:{
    mates:async function() {
      return await queryPromise(`SELECT * FROM mates;`)
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