import { writeImagePost, writeImageGet } from '../controllers/writeImage';
import express from 'express';
import { getPostWritingData, getPostList, postsWriteInsert, postsGoodUpdate, postsBadUpdate, postsViewUpdate, postsDelete } from '../controllers/posts';
import multer from 'multer'

const postsRouter = express();

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

postsRouter.get('/list/:commuName',getPostList)
postsRouter.get('/attach/images',writeImageGet)
postsRouter.get('/content',getPostWritingData)

postsRouter.post('/good',postsGoodUpdate)
postsRouter.post('/bad',postsBadUpdate)
postsRouter.post('/view',postsViewUpdate)
postsRouter.post('/write',postsWriteInsert)
postsRouter.post('/images',upload.fields([{name:'userNumber'},{name:'image',maxCount:1}]),writeImagePost)

postsRouter.delete('/delete/:postsId',postsDelete);

export default postsRouter;