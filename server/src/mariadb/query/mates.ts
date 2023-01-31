import { queryPromise } from "./queryPromise";

export const matesQuery = {
  select:{
    mates:async function() {
      return await queryPromise(`SELECT * FROM mates;`)
    }
  },
  insert:async function(values:any) {
    console.log('메이트 인서트 밸류',values)
    const {seekerName,line,mode,mic,content,password,champions,league} = values;
    return await queryPromise(`INSERT INTO mates(SeekerName,Line,Mode,Mic,Content,Password,Champions,League,CreateAt) 
    VALUES('${seekerName}','${line}','${mode}',${mic},'${content}','${password}','${champions}','${league}',current_timestamp);`)
  },
  update:{
    loginUpdateAt:async function (userId:string){
      return await queryPromise(`UPDATE users SET CreateAt = current_timestamp WHERE Id = ${userId};`)
    }
  }
}