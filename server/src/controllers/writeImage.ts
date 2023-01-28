import fs from 'fs'


export const writeImagePost = (req:any,res:any) => {
  const file = req.files.image[0];
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