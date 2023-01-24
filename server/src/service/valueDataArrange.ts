

// const result = await conn?.query(`INSERT INTO posts(PostTitle,UserName,CommunityName,CreateAt,Thumbnail,Content) VALUES(${values});`)

export function filesArrange(files:any){
  const filesPath = [];
  console.log('받은 파일',files)
  for(let i = 0; i < files.length; i++){
    console.log(files[i].path)
    filesPath.push(files[i].destination + '/' + files[i].filename)
  }
  console.log('변경된 파일',filesPath,filesPath.join())
  return filesPath;
}
export function postValue(objectData:any){
  const {content,community,title,userName} = objectData;
  const values = `'${title}','${content}','${community}','${userName}',current_timestamp`
  
  return values;
}