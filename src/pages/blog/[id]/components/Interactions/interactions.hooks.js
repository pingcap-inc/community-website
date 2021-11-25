import { useContext, useEffect, useState } from 'react';
import { api } from '@tidb-community/datasource';
import { message } from 'antd';
import { useRouter } from 'next/router';
import { MeContext } from '../../../../../context';

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
  const { meData } = useContext(MeContext);
  const [shares, setShares] = useState(blogInfo.shares);

  const share = () => {
    api.blog.posts.post
      .share(blogInfo.id)
      .then(({ shared, shareID }) => {
        const href = window.location.href;
        const title = blogInfo.title;
        const author = blogInfo.author.username || blogInfo.author.name;
        const url = `${href}${href.includes('?') ? '&' : '?'}shareId=${shareID}`;
        return navigator.clipboard.writeText(`${title} - ${author} 的博客 - ${url}`).then(() => shared);
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
    router.push(`/blog/${blogInfo.id}/edit`);
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
      .finally(() => {
        setReviewing(false);
      });
  };
  const reject = () => {
    setReviewing(true);
    return api.blog.posts.post
      .reject(blogInfo.id)
      .then(reload)
      .finally(() => {
        setReviewing(false);
      });
  };

  return { publish, reject, reviewing };
};
