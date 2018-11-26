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
  ],
  recommendList: [
    {
      id: 1,
      imageUrl: '//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
      id: 2,
      imageUrl: '//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
      id: 3,
      imageUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 4,
      imageUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 5,
      imageUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ],
  authorList: [
    {
      id: 1,
      imageUrl: '//upload.jianshu.io/users/upload_avatars/52841/251f5481-67b6-4bf0-86f4-faac9768beb3.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '闫泽华',
      like: '2.1k',
      total: '224.1k'
    },
    {
      id: 2,
      imageUrl: '//upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '乔汉童',
      like: '2.1k',
      total: '224.1k'
    },
    {
      id: 3,
      imageUrl: '//upload.jianshu.io/users/upload_avatars/8972166/027bf05a-67fa-459e-b61c-c73ce267367c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '冰千里',
      like: '2.1k',
      total: '224.1k'
    },
    {
      id: 4,
      imageUrl: '//upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '徐林Grace',
      like: '2.1k',
      total: '224.1k'
    },
    {
      id: 5,
      imageUrl: '//upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '三儿王屿',
      like: '2.1k',
      total: '224.1k'
    },
  ]
});

//纯函数 （reducer可以接收state，但绝不能修改state）
export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}