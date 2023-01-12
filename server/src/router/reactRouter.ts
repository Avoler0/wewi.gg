import express from 'express'
import path from 'path';
const reactRouter = express();

// reactRouter.get('*', (req,res) => {
//   res.sendFile(path.join(__dirname,'../../react_client/build/index.html'))
// });

// reactRouter.use(express.static(path.join(__dirname, '../../react_client/build/')));

export default reactRouter;