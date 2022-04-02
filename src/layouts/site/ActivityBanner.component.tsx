import { ActivityBanner } from '../../../packages/ui';
import React from 'react';
import { useRouter } from 'next/router';

const ActivityBannerComponent = () => {
  const router = useRouter();

  const showBanner = router.pathname.startsWith('/blog');

  if (!showBanner) {
    return <></>;
  }

  return (
    <ActivityBanner
      style={{ backgroundImage: 'linear-gradient(to right, #6E545B, #2C2C2C, #6E545B)' }}
      text={
        <>
          <svg
            style={{ fill: '#FFF' }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8486"
            width="20"
            height="20"
          >
            <path
              d="M848 359.3H627.7L825.8 109c4.1-5.3 0.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3 0.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"
              p-id="8487"
            />
          </svg>
          社区专栏全新上线~ 点击进来围观！
        </>
      }
      link={'/blog'}
    />
  );
};

export default ActivityBannerComponent;
