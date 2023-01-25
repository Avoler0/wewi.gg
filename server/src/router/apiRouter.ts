import { writeImagePost, writeImageGet } from './../controllers/writeImage';
import express from 'express';
import { getPostWritingData, getPostList, postsWriteInsert, postsGoodUpdate, postsBadUpdate, postsViewUpdate } from '../controllers/posts';
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'emptyUploads');
  },
  filename: function (req, file, cb) {
    console.log("콘솔입니다.",req.body.userNumber , req.query.userNumber,file)
    cb(null,Date.now() + '-' + req.body.userNumber+'.'+file.mimetype.split('/')[1]);
  }
});

const upload = multer({ storage:storage })
const apiRouter = express();

apiRouter.get('/posts/list/:commuName',getPostList)
apiRouter.get('/posts/wewigg/images',writeImageGet)
apiRouter.get('/posts/content',getPostWritingData)

apiRouter.post('/posts/good',postsGoodUpdate)
apiRouter.post('/posts/bad',postsBadUpdate)
apiRouter.post('/posts/view',postsViewUpdate)
apiRouter.post('/posts/write',postsWriteInsert)
apiRouter.post('/posts/images',upload.fields([{name:'userNumber'},{name:'image',maxCount:1}]),writeImagePost)

export default apiRouter;