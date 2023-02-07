import { queryPromise } from "./queryPromise";

export const matesQuery = {
  select:{
    mates:async function() {
      return await queryPromise(`SELECT * FROM mates;`)
    }
  },
  insert:async function(values:any) {
    const {seekerName,line,mode,mic,content,password,champions,league,icon,level} = values;
    return await queryPromise(`INSERT INTO mates(SeekerName,Line,Mode,Mic,Content,Password,Champions,League,SeekerIcon,SeekerLevel,CreateAt) 
    VALUES('${seekerName}','${line}','${mode}',${mic},'${content}','${password}','${champions}','${league}','${icon}',${level},current_timestamp);`)
    
  },
  delete:async function(matesId:number) {
    return await queryPromise(`DELETE FROM mates WHERE Id = ${matesId};`)
  },
}