import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import { PostType } from '../../types/dbType';


// PostId,PostTitle,Content,CommunityName,UserName,CreateAt,Good,Bad,Thumbnail
const openPost = createSlice({
  name:'postData',
  initialState:{
    PostId:0,
    PostTitle:'',
    Content:'',
    CommunityName:'',
    UserName:'',
    CreateAt:'',
    Good:0,
    Bad:0,
    Thumnail:''
  },
  reducers:{
    setPostData:(state:PostType,action:PayloadAction<any>) => {
      state = action.payload;
    },
  }
});

export default openPost.reducer;
export const {setPostData} = openPost.actions;