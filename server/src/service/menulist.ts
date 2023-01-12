import { insertQuery, selectQuery } from "../mariadb/query";


export function discernCUDTaskList(taskList:any){
  const addArr:any = [];
  const updateArr:any = [];
  const deleteArr:any = [];

  taskList.forEach((data:any)=>{
    const {method,categody,value} = data;
    if(method === 'ADD'){
      addArr.push(data);
    }else if(method === 'UPDATE'){
      updateArr.push(data);
    }else if(method === 'DELETE'){
      deleteArr.push(data);
    }else{
      return;
    }
  })

  return {'add':addArr,'update':updateArr,'delete':deleteArr}
}

export async function insertValueList(addList:any,communityID:number){
  const result = await Promise.all(
    addList.map(async (list:any)=>{
      const categoryID = await selectQuery.menucategory.id(communityID,list.category)
      return `(${communityID},${categoryID},'${list.value}')`
    })
  )
  return result.join();
}
export async function deleteValueList(deleteList:any,communityID:number) {
  const values = deleteList.reduce((obj:any,next:any)=>{
    if(obj[next.category]){
      obj[next.category] = [...obj[next.category],`${next.value}`]
    }else{
      obj[next.category] = [`${next.value}`]
    }
    return obj;
  },[])

  const result = await Promise.all(
    Object.keys(values).map(async (categoryName:string)=>{
      const categoryID = await selectQuery.menucategory.id(communityID,categoryName)
      return `DELETE FROM menulist WHERE CommunityID = ${communityID} AND MenuCategoryID = ${categoryID} AND MenuName IN ${values[categoryName].map((name:string)=> `'${name}'`)}`
    })
  )
  
  return result;
}