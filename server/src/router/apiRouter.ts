import express from 'express';
import { postsController } from '../controllers/posts';
import multer from 'multer'
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    console.log("콘솔입니다.",req.body , req.query)
    cb(null,Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage:storage })
const apiRouter = express();

// apiRouter.get('/mates/', matesController)
apiRouter.get('/posts/:commuName', postsController.getList)
apiRouter.get('/posts/:commuName/:boardNumber', postsController.getPosts)
// apiRouter.get('/menulist/:commuName/', getMenulist)

apiRouter.post('/write',upload.array('files'),postsController.post)
// apiRouter.post('/community/:commuName/', postMenulist)
// apiRouter.post('/menulist/:commuName/', postMenulist)
export default apiRouter;