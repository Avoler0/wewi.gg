import { writeImagePost, writeImageGet } from './../controllers/writeImage';
import express from 'express';
import { postsController } from '../controllers/posts';
import multer from 'multer'
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    console.log("콘솔입니다.",req.body , req.query,file)
    cb(null,Date.now() + '-' + file.originalname);
  }
});
const emptyStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'emptyUploads');
  },
  filename: function (req, file, cb) {
    console.log("콘솔입니다.",req.body.userNumber , req.query.userNumber,file)
    cb(null,Date.now() + '-' + req.body.userNumber+'.'+file.mimetype.split('/')[1]);
  }
});
const upload = multer({ storage:storage })
const emptyUpload = multer({ storage:emptyStorage })
const apiRouter = express();

// apiRouter.get('/mates/', matesController)
// apiRouter.get('/posts/images', postsController.getPostThumbnail)
apiRouter.get('/posts/:commuName', postsController.getList)
apiRouter.get('/posts/wewigg/images',writeImageGet)
apiRouter.get('/posts/:commuName/:boardNumber', postsController.getPosts)
// apiRouter.get('/menulist/:commuName/', getMenulist)

apiRouter.post('/posts/write',postsController.post)
apiRouter.post('/posts/images',emptyUpload.fields([{name:'userNumber'},{name:'image',maxCount:1}]),writeImagePost)
// apiRouter.post('/community/:commuName/', postMenulist)
// apiRouter.post('/menulist/:commuName/', postMenulist)
export default apiRouter;