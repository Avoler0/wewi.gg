import fs from 'fs'


export const writeImagePost = (req:any,res:any) => {
  const file = req.files.image[0];

  console.log('포스트',file.destination + '/' + file.filename);
  res.status(200).send(file.destination + '/' + file.filename)
}

export const writeImageGet = (req:any,res:any) => {
  const {src} = req.query
  fs.readFile(src, (err:any,data:any) => {
    res.writeHead(200);
    res.write(data);
    res.end();
  })
}