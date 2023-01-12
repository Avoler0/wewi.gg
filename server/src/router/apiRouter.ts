import express from 'express';
import { getMenulist, postMenulist } from '../controllers/menulist';
import { postsController } from '../controllers/posts';

const apiRouter = express();

apiRouter.get('/posts/:commuName/:boardNumber', postsController)
apiRouter.get('/menulist/:commuName/', getMenulist)

apiRouter.post('/community/:commuName/', postMenulist)
apiRouter.post('/menulist/:commuName/', postMenulist)
export default apiRouter;