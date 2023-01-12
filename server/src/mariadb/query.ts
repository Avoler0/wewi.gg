import db from "./mariadb";

export const selectQuery = {
  community:{
    all:async function getCommunityAll(){
      const conn = await db();
      return await conn?.query(`SELECT * FROM communities`)
    },
    id:async function getCommunityID(commuName:string){
      const conn = await db();
      const readTable = await conn?.query(`SELECT CommunityID FROM communities WHERE CommunityName = '${commuName}';`)
      return readTable[0]['CommunityID'];
    },
    name:async function getCommunityName(commuID:string){
      const conn = await db();
      const readTable = await conn?.query(`SELECT CommunityName FROM communities WHERE CommunityID = '${commuID}';`)
      return readTable[0]['CommunityName'];
    },
  },
  menucategory:{
    id:async function getCategoryID(communityID:number,categoryName:string) {
      const conn = await db();
      const query = `SELECT MenuCategoryID FROM menucategory WHERE CommunityID = ${communityID} and MenuCategoryName = '${categoryName}';`
      const menucategoryQuery = await conn?.query(query);
      return menucategoryQuery[0]['MenuCategoryID']
    }
  },
  menulist:{
    commuNameAll:async function getMenulistAll(commuName:string) {
      const conn = await db();
      const communityID = await selectQuery.community.id(commuName)
      const result = await conn?.query(`SELECT * FROM menulist WHERE CommunityID = ${communityID};`)

      return result;
    },
    commuIdAll:async function getMenulistAll(communityID:number) {
      const conn = await db();
      const result = await conn?.query(`SELECT * FROM menulist WHERE CommunityID = ${communityID};`)

      return result;
    }
  }
}

export const insertQuery = {
  menuCategory:async function (communityID:number,categoryName:string){
    const conn = await db();
    const result = await conn?.query(`INSERT INTO menucategory(CommunityID,MenuCategoryName) VALUES(${communityID},'${categoryName}');`)
    
    return result;
  },
  menulist:async function (values:string){
    const conn = await db();
    const result = await conn?.query(`INSERT INTO menulist(CommunityID,MenuCategoryID,MenuName) VALUES${values};`)
    console.log("인서트 리설트",values,result)
    return result;
  },
}

export const deleteQuery = {
  menulist:async function(communityID:number,categoryID:number,values:string) {
    const conn = await db();
    const result = await conn?.query(`DELETE FROM menulist WHERE CommunityID = ${communityID} AND MenuCategoryID = ${categoryID}  AND MenuName IN (${values})`)
    console.log("딜리트 리설트",values,result)
    return result
  }
}