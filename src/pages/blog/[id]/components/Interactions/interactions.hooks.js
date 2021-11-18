import { useEffect, useState } from 'react';
import { api } from '@tidb-community/datasource';
import { message } from 'antd';

export const useLikes = (blogInfo) => {
  const [liked, setLiked] = useState(blogInfo.liked);
  const [likes, setLikes] = useState(blogInfo.likes);

  useEffect(() => {
    setLiked(blogInfo.liked);
  }, [blogInfo.liked]);

  useEffect(() => {
    setLikes(blogInfo.likes);
  }, [blogInfo.likes]);

  const like = () => {
    if (liked) {
      api.blog.posts.post.cancelLike(blogInfo.id).catch();
      setLiked(false);
      setLikes((likes) => likes - 1);
    } else {
      api.blog.posts.post.cancelFavorite(blogInfo.id).catch();
      setLiked(true);
      setLikes((likes) => likes + 1);
    }
  };

  return { liked, like, likes };
};

export const useFavorites = (blogInfo) => {
  const [favorited, setFavorited] = useState(blogInfo.favorited);
  const [favorites, setFavorites] = useState(blogInfo.favorites);

  useEffect(() => {
    setFavorited(blogInfo.favorited);
  }, [blogInfo.favorited]);

  useEffect(() => {
    setFavorites(blogInfo.favorites);
  }, [blogInfo.favorites]);

  const favorite = () => {
    if (favorited) {
      api.blog.posts.post.cancelFavorite(blogInfo.id).catch();
      setFavorited(false);
      setFavorites((favorites) => favorites - 1);
    } else {
      api.blog.posts.post.cancelFavorite(blogInfo.id).catch();
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
      .then((shareId) => {
        const href = window.location.href;
        return navigator.clipboard.writeText(`${href}${href.includes('?') ? '&' : '?'}shareId=${shareId}`);
      })
      .then(() => {
        setShares((share) => share + 1);
        return message.success('已经复制链接到剪切板');
      });
  };

  return { shares, share };
};
