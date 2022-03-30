import { useContext, useEffect, useState } from 'react';
import { api } from '@tidb-community/datasource';
import { message } from 'antd';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import { MeContext } from '~/context';

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
        const title = blogInfo.title;
        const author = blogInfo.author.username || blogInfo.author.name;
        const usp = new URLSearchParams(window.location.search);
        if (shareID) {
          usp.set('shareId', String(shareID));
        }
        const url = `${window.location.origin + window.location.pathname}?${usp.toString()}`;
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
  const publish = () => {
    setReviewing(true);
    return api.blog.posts.post
      .publish(blogInfo.id)
      .then(reload)
      .catch((error) => message.error(error.message))
      .finally(() => {
        setReviewing(false);
      });
  };
  const reject = (rejectReason) => {
    api.blog.posts.post
      .reject(blogInfo.id, rejectReason)
      .then(reload)
      .catch((error) => message.error(error.message))
      .finally(() => {
        setReviewing(false);
      });
  };

  return { publish, reject, reviewing };
};

export const useRemove = (blogInfo) => {
  const router = useRouter();
  const { meData } = useContext(MeContext);

  const remove = () => {
    return api.blog.posts.post
      .del(blogInfo.id)
      .then(() => router.replace(`/u/${meData.username}/posts`))
      .catch((error) => message.error(error.message));
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
