import { useEffect, useRef, useState } from 'react';
import { api } from '@tidb-community/datasource';
import { message, Modal, Input } from 'antd';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import { usePrincipal } from '~/pages/blog/blog.hooks';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export const useLikes = (blogInfo, isLogin) => {
  const [liked, setLiked] = useState(blogInfo.liked);
  const [likes, setLikes] = useState(blogInfo.likes);

  useEffect(() => {
    setLiked(blogInfo.liked);
  }, [blogInfo.liked]);

  useEffect(() => {
    setLikes(blogInfo.likes);
  }, [blogInfo.likes]);

  const like = () => {
    if (!isLogin) {
      message.info('请先登录').then();
      return;
    }
    if (liked) {
      api.blog.posts.post.cancelLike(blogInfo.id).catch();
      setLiked(false);
      setLikes((likes) => likes - 1);
    } else {
      api.blog.posts.post.like(blogInfo.id).catch();
      setLiked(true);
      setLikes((likes) => likes + 1);
    }
  };

  return { liked, like, likes };
};

export const useFavorites = (blogInfo, isLogin) => {
  const [favorited, setFavorited] = useState(blogInfo.favorited);
  const [favorites, setFavorites] = useState(blogInfo.favorites);

  useEffect(() => {
    setFavorited(blogInfo.favorited);
  }, [blogInfo.favorited]);

  useEffect(() => {
    setFavorites(blogInfo.favorites);
  }, [blogInfo.favorites]);

  const favorite = () => {
    if (!isLogin) {
      message.info('请先登录').then();
      return;
    }
    if (favorited) {
      api.blog.posts.post.cancelFavorite(blogInfo.id).catch();
      setFavorited(false);
      setFavorites((favorites) => favorites - 1);
    } else {
      api.blog.posts.post.favorite(blogInfo.id).catch();
      setFavorited(true);
      setFavorites((favorites) => favorites + 1);
    }
  };

  return { favorited, favorite, favorites };
};

export const useShares = (blogInfo) => {
  const [shares, setShares] = useState(blogInfo.shares);

  const share = () => {
    api.blog.posts.post
      .share(blogInfo.id)
      .then(({ shared, shareID }) => {
        const href = window.location.href;
        const title = blogInfo.title;
        const author = blogInfo.author.username || blogInfo.author.name;
        const url = `${href}${href.includes('?') ? '&' : '?'}shareId=${shareID}`;
        copy(`${title} - ${author} 的专栏 - ${url}`);
        return shared;
      })
      .then((shared) => {
        if (!shared) {
          setShares((share) => share + 1);
        }
        return message.success('已经复制链接到剪切板');
      });
  };

  return { shares, share };
};

export const useEdit = (blogInfo) => {
  const router = useRouter();
  const edit = () => {
    router.push(`/blog/${blogInfo.slug}/edit`);
  };
  return { edit };
};

export const useReview = (blogInfo, reload) => {
  const [reviewing, setReviewing] = useState(false);
  // const [rejectReason, setRejectReason] = useState('');
  // const rejectReasonInputRef = useRef(null);
  const handleRejectSubmit = (rejectReason) => {
    // console.log("!!rejectReasonInputRef", rejectReasonInputRef);
    // const rejectReason = rejectReasonInputRef.current.value
    api.blog.posts.post
      .reject(blogInfo.id, rejectReason)
      .then(reload)
      .finally(() => {
        setReviewing(false);
      });
  };
  const publish = () => {
    setReviewing(true);
    return api.blog.posts.post
      .publish(blogInfo.id)
      .then(reload)
      .finally(() => {
        setReviewing(false);
      });
  };
  const reject = () => {
    const rejectReason = window.prompt('请输入拒绝理由');
    handleRejectSubmit(rejectReason);
  };
  // const reject = () => {
  //   setReviewing(true);
  //   Modal.confirm({
  //     title: '请输入拒绝理由',
  //     icon: <ExclamationCircleOutlined />,
  //     // content: <Input.TextArea ref={rejectReasonInputRef} />,
  //     content: <Input.TextArea onChange={(event => setRejectReason(event.target.value))} />,
  //     okText: '确定',
  //     okType: 'danger',
  //     cancelText: '取消',
  //     onOk: handleRejectSubmit,
  //     onCancel() {},
  //   });
  // };

  return { publish, reject, reviewing };
};

export const useRemove = (blogInfo) => {
  const router = useRouter();
  const { id } = usePrincipal();
  const remove = () => {
    return api.blog.posts.post.del(blogInfo.id).then(() => router.replace(`/blog/user/${id}/posts`));
  };

  return { remove };
};

export const useRecommend = (blogInfo) => {
  const [recommended, setRecommended] = useState(blogInfo.recommended === true);
  const recommend = () => {
    if (recommended === false) {
      return api.blog.posts.post.recommend(blogInfo.id).then(() => {
        setRecommended(true);
        message.success('置顶成功');
      });
    } else {
      return api.blog.posts.post.cancelRecommend(blogInfo.id).then(() => {
        setRecommended(false);
        message.success('取消置顶成功');
      });
    }
  };

  return { recommended, recommend };
};
