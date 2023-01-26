import { queryPromise } from "./queryPromise";



export const accountQuery = {
  select:{
    loginByEmail:async function(userEmail:string) {
      return await queryPromise(`SELECT Email, Password FROM users WHERE Email = '${userEmail}';`)
    }
  },
  insert:{
    register:async function(values:any) {
      // current_timestamp
      return await queryPromise(`INSERT INTO users(Id,Email,Name,Password,CreateAt,UpdateAt) VALUES(${values});`)
    },
  },
  update:{
    loginUpdateAt:async function (userId:string){
      return await queryPromise(`UPDATE users SET CreateAt = current_timestamp WHERE PostId = ${userId};`)
    }
  }
}