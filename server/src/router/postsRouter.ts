import { writeImagePost, writeImageGet } from '../controllers/writeImage';
import express from 'express';
import { getPostWritingData, getPostList, postsWriteInsert, postsGoodUpdate, postsBadUpdate, postsViewUpdate } from '../controllers/posts';
import multer from 'multer'
import { loginController } from '../controllers/account/login';

const apiRouter = express();

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

apiRouter.get('/list/:commuName',getPostList)
apiRouter.get('/wewigg/images',writeImageGet)
apiRouter.get('/content',getPostWritingData)

apiRouter.post('/good',postsGoodUpdate)
apiRouter.post('/bad',postsBadUpdate)
apiRouter.post('/view',postsViewUpdate)
apiRouter.post('/write',postsWriteInsert)
apiRouter.post('/images',upload.fields([{name:'userNumber'},{name:'image',maxCount:1}]),writeImagePost)

export default apiRouter;