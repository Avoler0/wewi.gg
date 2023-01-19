

// const result = await conn?.query(`INSERT INTO posts(PostTitle,UserName,CommunityName,CreateAt,Thumbnail,Content) VALUES(${values});`)
export function postValue(objectData:any){
  const {content,community,title,userName} = objectData;
  const values = `'${title}','${content}','${community}','${userName}',current_timestamp`
  
  return values;
}