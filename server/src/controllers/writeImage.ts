import fs from 'fs'


export const writeImagePost = (req:any,res:any) => {
  const file = req.files.image[0];
  console.log(file.destination + '/' + file.filename)
  res.status(200).send(file.destination + '/' + file.filename)
}

export const writeImageGet = (req:any,res:any) => {
  const {src} = req.query
  console.log('이미지',src)
  if(src === null){
    return res.status(200);
  }else{
    fs.readFile(src, (err:any,data:any) => {
      // if(err){
      //   res.status(400).send('error!')
      // }
      res.writeHead(200);
      res.write(data);
      res.end();
    })
  }
}