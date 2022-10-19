import axios from 'axios';
import * as fs from 'fs';

export type TBilibiliCommonResponse<T> = {
  code: number; // 0,
  message: string; // "0",
  ttl: number; // 1,
  data: T;
};

export type TVideoBasicInfoStat = {
  aid: number; // 429779223,
  view: number; // 324,
  danmaku: number; // 0,
  reply: number; // 1,
  favorite: number; // 12,
  coin: number; // 4,
  share: number; // 1,
  now_rank: number; // 0,
  his_rank: number; // 0,
  like: number; // 7,
  dislike: number; // 0,
  evaluation: string; // "",
  argue_msg: string; // ""
};

export type TVideoBasicInfo = {
  bvid: string; // "BV1nG41147Ng",
  aid: number; // 429779223,
  videos: number; // 1,
  tid: number; // 231,
  tname: string; // "计算机技术",
  copyright: number; // 1,
  pic: string; // "http://i1.hdslb.com/bfs/archive/1b93c0b41f0c4c6b817d9dfc4b28eaf1fb8c66be.jpg",
  title: string; // "TiDB 冷热存储分离方案.mp4",
  pubdate: number; // 1661156152,
  ctime: number; // 1661156152,
  desc: string; // "",
  desc_v2: string | null; // null,
  state: number; // 0,
  duration: number; // 3454,
  stat: TVideoBasicInfoStat;
};

export async function getVideoBasicInfo(bvid: string) {
  const url = 'https://api.bilibili.com/x/web-interface/view?bvid=' + bvid;
  return (await axios.get<TBilibiliCommonResponse<TVideoBasicInfo>>(url)).data;
}

export async function downloadVideoCoverImage(bvid: string, url: string) {
  const extensionName = url.split('.').reverse()[0];
  const filePath = `${process.cwd()}/public/images/bilibili_video_cover/${bvid}.${extensionName}`;
  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    responseType: 'arraybuffer',
  });
  const data = response.data;
  fs.writeFileSync(filePath, data);
  return { filePath, extensionName };
}
