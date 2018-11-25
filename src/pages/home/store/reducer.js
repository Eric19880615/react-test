import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imageUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 2,
      title: '高考',
      imageUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }
  ],
  articleList: [
    {
      id: 1,
      title: '我在坦白说上和男神聊了很久的天',
      imageUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      desc: '今天这个文章是我自己的事，发生在现在，不知道未来。 我现在上大二，似乎我的青春期比别人都要晚一点。高中时别人都是满脸的青春痘，而我却“出淤泥而不...'
    },
    {
      id: 2,
      title: '我在坦白说上和男神聊了很久的天',
      imageUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      desc: '今天这个文章是我自己的事，发生在现在，不知道未来。 我现在上大二，似乎我的青春期比别人都要晚一点。高中时别人都是满脸的青春痘，而我却“出淤泥而不...'
    },
    {
      id: 3,
      title: '我在坦白说上和男神聊了很久的天',
      imageUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      desc: '今天这个文章是我自己的事，发生在现在，不知道未来。 我现在上大二，似乎我的青春期比别人都要晚一点。高中时别人都是满脸的青春痘，而我却“出淤泥而不...'
    },
    {
      id: 4,
      title: '我在坦白说上和男神聊了很久的天',
      imageUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      desc: '今天这个文章是我自己的事，发生在现在，不知道未来。 我现在上大二，似乎我的青春期比别人都要晚一点。高中时别人都是满脸的青春痘，而我却“出淤泥而不...'
    },
    {
      id: 5,
      title: '我在坦白说上和男神聊了很久的天',
      imageUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      desc: '今天这个文章是我自己的事，发生在现在，不知道未来。 我现在上大二，似乎我的青春期比别人都要晚一点。高中时别人都是满脸的青春痘，而我却“出淤泥而不...'
    }
  ]
});

//纯函数 （reducer可以接收state，但绝不能修改state）
export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}