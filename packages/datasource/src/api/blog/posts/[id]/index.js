import blogClient from '../../../blogClient';

export async function info(id) {
  return await blogClient.get(`/api/posts/${id}`);
}

export async function update(id, body) {
  return await blogClient.put(`/api/posts/${id}`, body);
}

export async function submit(id) {
  return await blogClient.patch(`/api/posts/${id}/submit`);
}

export async function reject(id) {
  return await blogClient.patch(`/api/posts/${id}/reject`);
}

export async function recommend(id) {
  return await blogClient.patch(`/api/posts/${id}/recommend`);
}

export async function cancelRecommend(id) {
  return await blogClient.patch(`/api/posts/${id}/recommend/cancel`);
}

export async function publish(id) {
  return await blogClient.patch(`/api/posts/${id}/publish`);
}

export async function cancelPublish(id) {
  return await blogClient.patch(`/api/posts/${id}/publish/cancel`);
}

export async function like(id) {
  return await blogClient.patch(`/api/posts/${id}/like`);
}

export async function cancelLike(id) {
  return await blogClient.patch(`/api/posts/${id}/like/cancel`);
}

export async function favorite(id) {
  return await blogClient.patch(`/api/posts/${id}/favorite`);
}

export async function cancelFavorite(id) {
  return await blogClient.patch(`/api/posts/${id}/favorite/cancel`);
}

export async function visit(id, shareId) {
  return await blogClient.post(`/api/posts/${id}/visit`, undefined, { params: { shareId } });
}

export async function share(id) {
  return await blogClient.post(`/api/posts/${id}/share`);
}

export async function comments(id, page, size = 10) {
  return await blogClient.get(`/api/posts/${id}/comments`, {
    params: { page, size },
  });
}

export async function comment(id, content, replyTo) {
  return await blogClient.post(`/api/posts/${id}/comments`, {
    content,
    replyCommentID: replyTo,
  });
}
