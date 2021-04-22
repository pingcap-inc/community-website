import { BannerContent, BannerImage } from './banner.styled';
import data from './banner.data';
import { Link } from '@tidb-community/ui';

const Banner = () => {
  return <BannerContent>
    <BannerImage />
    <p>
      {data.leading}
    </p>
    <ul>
      {data.benefits.map((benefit, i) => (
        <li key={i}>{benefit}</li>
      ))}
    </ul>
    <p>
      <Link href={data.more.link}>{data.more.title}</Link>
    </p>
  </BannerContent>;
};

export default Banner;
