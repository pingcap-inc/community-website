import styled, { css } from 'styled-components';
import titleBackgroundSvg from './title-bg.svg';
import BannerTitleSvg from './banner-title.svg';
import BannerTitleMobileSvg from './banner-title-mobile.svg';
import { Button, Carousel as RawCarousel, Collapse, Row } from 'antd';
import { Link as RawLink } from '~/components';
import CollapseIconSvg from './faq-collapse.svg';
import ExpandIconSvg from './faq-expand.svg';
import { mixins } from '@tidb-community/ui';

export const columnWidth = 7.5;
const backgroundColor = '#191821';
const textColor = '#fff';

export const getImage = (name) =>
  process.env.NEXT_PUBLIC_RUNTIME_ENV !== 'local'
    ? `https://img4.pingcap.com/images/hackathon/${name}`
    : `/images/hackathon/${name}`;

const horizontalPadding = css`
  padding-left: ${columnWidth}%;
  padding-right: ${columnWidth}%;

  @media only screen and (max-width: 768px) {
    padding-left: 22px;
    padding-right: 22px;
  }
`;
export const Container = styled.div`
  background: ${backgroundColor};
  color: ${textColor};
`;

export const Section = styled.div`
  // horizontal paddings are 1/14 of the page width
  ${horizontalPadding};
  padding-bottom: 3rem;
  padding-top: 3rem;
  text-align: center;
`;
export const SectionTitleBackground = styled(titleBackgroundSvg)`
  // align the svg on the center
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  height: 3rem;
  width: 3rem;
`;

export const SectionTitle = styled.div`
  font-size: 24px;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;

  // center the title, background is an image
  text-align: center;
  background-image: url(${SectionTitleBackground});
`;

export const SectionFooter = styled.div`
  font-size: 1em;
  font-weight: 300;
  opacity: 0.4;
`;

export const BannerWrapper = styled.div`
  margin-bottom: 4rem;
`;

export const Banner = styled.div`
  margin-bottom: 2rem;
  background: url(${(props) => getImage(props.isSmallScreen ? 'banner-bg-mobile.jpg' : 'banner-bg.jpg')}) no-repeat
    center center;
  // center background image
  background-size: cover;
  height: ${(props) => (props.isSmallScreen ? 'calc(100vh - 84px)' : '32rem')};
  position: relative;
`;

export const BannerContent = styled.div`
  padding-top: 8rem;
  ${(props) =>
    props.isSmallScreen &&
    css`
      padding-top: 3rem;
    `};
  ${horizontalPadding};
`;
export const BannerTitle = styled(BannerTitleSvg)`
  width: min(35rem, 100%);
  margin-bottom: 4rem;
`;

export const BannerTitleMobile = styled(BannerTitleMobileSvg)`
  width: min(30rem, 100%);
  margin-bottom: 4rem;
`;

export const BannerButtonsGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  ${(props) =>
    props.isSmallScreen
      ? css`
          width: calc(100% - 44px) !important;
          position: absolute;
          bottom: 1rem;
        `
      : css`
          width: min(24rem, 100%);
          margin-bottom: 4rem;
        `}
`;

export const BannerButton = styled(Button).attrs({
  type: 'primary',
  size: 'small',
})`
  width: 6rem;
  height: 2.4rem !important;
  background: #674ff0 !important;

  &:hover {
    background-color: #3c26b5 !important;
  }
`;

export const BannerQRCodeOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const BannerQRCodeContent = styled.div`
  // qrcode image as background
  margin: 0 auto;
`;

export const BannerQRCodeText = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  padding-top: 1rem;
`;

export const BannerQRCodeImage = styled.div`
  width: 256px;
  height: 256px;
  background: url('${getImage('banner-qrcode.jpg')}') no-repeat center center;
  background-size: contain;
`;

export const BannerNavButton = styled.a`
  white-space: nowrap;

  &:hover {
    color: #84fcfc;
  }
`;

export const BannerNavButtonsGroup = styled.div`
  ${(props) =>
    props.isSmallScreen &&
    css`
      text-align: center;
      ${horizontalPadding};
    `}
  ${BannerNavButton} + ${BannerNavButton} {
    border-left: solid 1px white;
    padding-left: 1rem;
  }

  ${BannerNavButton}:not(:last-child) {
    padding-right: 1rem;
  }
`;
export const TableCell = styled.td`
  height: 100%;
  ${(props) =>
    props.isSmallScreen
      ? css`
          width: 50%;
        `
      : css`
          width: 25%;
        `}
`;
export const TableHeaderCell = styled(TableCell)``;

export const Table = styled.table`
  height: 1px;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(to bottom, #84fcfc 0%, #674ff0 100%); /* the gradient */
  background-origin: border-box; /* set background to start from border-box */
  border-spacing: 20px; /* space between each cell */
  border: 0.1px solid transparent; /* optional */
  table-layout: fixed;
`;

export const TableHeaderIcon = styled.div`
  height: 2rem;
  width: 2rem;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: min(8rem, 10%);
`;

export const TableCellContent = styled.div`
  //height: 16rem !important;
  height: 100%;
  text-align: start;
  //padding: 1rem;
  background-color: ${backgroundColor};
`;

export const TableCellContentInner = styled.div`
  padding: 1rem;
`;

export const TableHeaderCellContent = styled(TableCellContent)`
  padding: 1rem;
  height: 4rem !important;
  justify-content: space-between;
  background-color: ${backgroundColor};
  display: flex;
`;

export const ProcedureCard = styled.div`
  background-color: #333333;
  padding: 1rem;
  padding-top: calc(1rem + 8px);
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: relative;
  text-align: left;
  height: 100%;
`;
export const ProcedureCardGradientSlice = styled.div`
  height: 8px;
  top: 0;
  width: 100%;
  position: absolute;
  background-image: linear-gradient(to right, #84fcfc 0%, #674ff0 100%); /* the gradient */
  background-origin: border-box; /* set background to start from border-box */
  border-spacing: 20px; /* space between each cell */
  border: 0.1px solid transparent; /* optional */
`;

export const ProcedureCardTitle = styled.div`
  width: 100%;
  font-size: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #84fcfc;
`;

export const ProcedureCardDate = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  font-size: 14px;
  margin-bottom: 1rem;
`;

export const ProcedureCardDescription = styled.div`
  width: 100%;
  font-size: 14px;
  margin-bottom: 1rem;
`;
export const ProcedureCardButton = styled(RawLink)`
  color: #84fcfc;
  width: 100%;
  text-decoration: none;

  &:hover {
    color: #674ff0;
  }

  text-align: right;
  // fix to the end of the card
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

export const ProcedureCardWrapper = styled.div`
  display: flex;
  align-items: start;
  //height: 30rem;
  ${(props) =>
    !props.isSmallScreen
      ? css`
          max-width: ${columnWidth * 2}%;
        `
      : css`
          &:first-child {
            padding-right: 1rem;
            position: relative;
          }

          &:not(:last-child) {
            &:after {
              display: block;
              position: absolute;
              bottom: -1rem;
              right: -1rem;
              z-index: 2;
              content: url(${getImage('procedure-card-divider-mobile.svg')});
            }
          }

          margin-bottom: 2rem;
          width: 50%;
        `}
}
`;

export const ProcedureCardDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.596px;
  z-index: 1;
  background-image: url(${getImage('procedure-card-divider.svg')});
  background-repeat: no-repeat;
  background-position: center;
`;

export const ProcedureCardsGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  ${ProcedureCardDivider}:first-child {
    display: none;
  }
`;

export const Link = styled(RawLink)`
  font-size: ${(props) => props.fontSize || '14px'};
  color: #84fcfc;
  text-decoration: none;

  &:hover {
    color: #674ff0;
  }
`;

export const LocationSpan = styled.div`
  padding-top: 3rem;
`;

export const Prize = styled.div`
  margin: 0 auto;

  ${(props) =>
    props.sm
      ? css`
          width: ${282 * 0.5}px;
          height: ${322 * 0.5}px;
        `
      : css`
          height: 322px;
          width: 282px;
        `}
  background-image: url(${(props) => props.src});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const PrizeTitle = styled.div`
  ${(props) =>
    props.huge
      ? css`
          font-size: ${(props) => (props.sm ? '1.2rem' : '1.5rem')};
          padding-top: ${props.sm ? '12%' : '20%'};
        `
      : css`
          font-size: 14px;
          padding-top: 30%;
        `}
  font-weight: 300;
`;

export const PrizeCount = styled.div`
  padding-top: 15%;
  font-size: 16px;
  font-weight: 300;
`;
export const PrizeReward = styled.div`
  padding-top: 0%;
  height: ${(props) => (props.sm ? '0.5rem' : '1rem')};
  ${(props) =>
    props.tiny
      ? css`
          font-size: 16px;
        `
      : css`
          font-size: 20px;
        `}
`;

export const PrizesRow = styled(Row)`
  padding-bottom: 3rem;
`;

export const GlowLabel = styled.div`
  color: #84fcfc;
  text-align: left;
  font-size: 20px;
  line-height: 4rem;
  font-weight: 300;
  ${(props) =>
    props.tall &&
    css`
      margin-bottom: 3rem;
    `}
  width: fit-content;
  background-image: url(${getImage('prizes-label-bg.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const BenefitCard = styled.div`
  // padding
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  background: ${backgroundColor};
  align-items: center;
`;

export const BenefitCardWrapper = styled.div`
  // gradient border
  background-image: linear-gradient(to right, #84fcfc 0%, #674ff0 100%); /* the gradient */
  background-origin: border-box; /* set background to start from border-box */
  border-spacing: 20px; /* space between each cell */
  border: 0.1px solid transparent; /* optional */
  margin-bottom: 2rem;
`;

export const BenefitCardIcon = styled.div`
  height: 3rem;
  width: 3rem;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
`;

export const BenefitCardContent = styled.div`
  font-size: 18px;
  color: #84fcfc;
`;

export const JudgeCardOverlay = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
  position: absolute;
  bottom: 2rem;
  overflow-x: hidden;
  overflow-y: scroll;
  ${(props) =>
    props.sm
      ? css`
          width: calc(0.5 * (100vw - 44px - 2rem));
          height: calc(0.625 * (100vw - 44px - 2rem));
        `
      : css`
          width: ${columnWidth * 2}vw;
          height: ${columnWidth * 2.5}vw;
        `}
  background-color: rgba(36, 35, 106, 0.5);
  padding: 1rem;
  text-align: start;
`;

export const JudgeCardContent = styled.div`
  position: absolute;
  overflow: hidden;
  // ellipsis
  text-overflow: ellipsis;

  bottom: 2rem;
  // background is a gradient from left to right with diminishing opacity
  background-image: linear-gradient(to right, rgba(36, 35, 106, 1) 0%, rgba(36, 35, 106, 0) 100%); /* the gradient */
  //height: 6rem;
  ${(props) =>
    props.sm
      ? css`
          width: calc(0.5 * (100vw - 44px - 2rem));
        `
      : css`
          width: ${columnWidth * 2}vw;
        `}
  text-align: start;
  padding: 0.5rem;
  padding-left: 1rem;
`;

export const JudgeCardName = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
`;

export const JudgeCardDescription = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
`;

export const DummyJudgeCard = styled.div`
  ${(props) =>
    props.sm
      ? css`
          width: calc(0.5 * (100vw - 44px - 2rem));
          height: calc(0.625 * (100vw - 44px - 2rem));
        `
      : css`
          width: ${columnWidth * 2}vw;
          height: ${columnWidth * 2.5}vw;
        `}
`;

export const JudgeCard = styled.div`
  ${(props) =>
    props.sm
      ? css`
          width: calc(0.5 * (100vw - 44px - 2rem));
          height: calc(0.625 * (100vw - 44px - 2rem));
        `
      : css`
          width: ${columnWidth * 2}vw;
          height: ${columnWidth * 2.5}vw;
        `}
  margin-bottom: 2rem;
  // padding
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  object-fit: cover;

  ${JudgeCardOverlay} {
    display: none;
  }

  &:hover,
  &:active {
    ${JudgeCardOverlay} {
      display: block;
    }

    ${JudgeCardContent} {
      display: none;
    }
  }
`;

export const JudgesLabel = styled.div`
  color: #84fcfc;
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 3rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  &:not(:first-child) {
    margin-top: 3rem;
  }

  hr {
    border: 1px dashed #674ff0;
    width: 90%;
    padding-left: 1rem;
  }

  div {
    width: 3rem;
  }
`;

export const FAQWrapper = styled.div`
  max-width: 60rem;
  // center horizontally
  margin: 0 auto;
`;

export const CollapseIcon = styled(CollapseIconSvg)`
  height: 2rem;
  width: 2rem;
`;

export const ExpandIcon = styled(ExpandIconSvg)`
  height: 2rem;
  width: 2rem;
`;

export const FAQCollapse = styled(Collapse).attrs({
  defaultActiveKey: ['1'],
  expandIconPosition: 'right',
  expandIcon: ({ isActive }) => (isActive ? <CollapseIcon /> : <ExpandIcon />),
  ghost: true,
  accordion: true,
})`
  background: ${backgroundColor};

  .ant-collapse-header {
    padding: 0;
    height: 3rem;
    line-height: 3rem;
    color: #ffffff !important;
    font-size: 16px;
    text-align: left;
    border-bottom: 0.1px dashed #84fcfc;
  }
`;
export const FAQCollapsePanel = styled(Collapse.Panel)`
  background: ${backgroundColor};

  .ant-collapse-content-box {
    // vertically center the text
    display: flex;
    align-items: center;
    text-align: left;
    color: #fff;
  }
`;

export const FAQButton = styled.a`
  display: inline-flex;
  padding-top: 3rem;
  color: #84fcfc;
  align-items: center;

  &:hover {
    color: #674ff0;
  }

  &:after {
    display: block;
    content: url(${getImage('faq-arrow-right.svg')});
    height: 24px;
    width: 24px;

    &:hover {
      color: #674ff0;
    }
  }
`;

export const Carousel = styled(RawCarousel).attrs({
  dotPosition: 'bottom',
})`
  .slick-slide {
    padding-right: 0;
  }

  .slick-dots {
    margin: 0 auto;
    bottom: -32px;

    li {
      margin: 3px 8px;

      &,
      button {
        ${mixins.size('40px', '6px')}
      }

      &.slick-active {
        &,
        button {
          ${mixins.size('50px', '6px')}
        }
      }
    }
  }
`;

export const CarouselInner = styled.div`
  display: flex !important;
  position: relative;

  .ant-image {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const CarouselDescription = styled.div`
  color: white;
  font-size: 1rem;
`;
export const CarouselContent = styled.div`
  width: ${(props) => props.width};
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  img {
    margin-bottom: 2rem;
  }
`;

export const PartnerSection = styled(Section)`
  background: white;
  color: black;
`;

export const NewsCardContent = styled.div`
  position: absolute;
  overflow: hidden;
  // ellipsis
  text-overflow: ellipsis;

  bottom: 2rem;
  // background is a gradient from left to right with diminishing opacity
  background: rgb(0, 0, 0, 75%); /* the gradient */
  //height: 6rem;
  ${(props) =>
    props.sm
      ? css`
          width: calc(1.04 * (100vw - 44px - 2rem));
        `
      : css`
          width: ${columnWidth * 3 * 1.2}vw;
        `}
  text-align: start;
  padding: 0.5rem;
  padding-left: 1rem;
`;

export const NewsCardTitle = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
`;
export const DummyNewsCard = styled.div`
  ${(props) =>
    props.sm
      ? css`
          width: calc(0.5 * (100vw - 44px - 2rem));
          height: calc(0.625 * (100vw - 44px - 2rem));
        `
      : css`
          width: ${columnWidth * 3 * 1.2}vw;
          height: ${columnWidth * 2.25 * 1.2}vw;
        `}
`;

export const NewsCard = styled.div`
  margin: auto 0;
  ${(props) =>
    props.sm
      ? css`
          width: calc(1.04 * (100vw - 44px - 2rem));
          height: calc(0.83 * (100vw - 44px - 2rem));
        `
      : css`
          width: ${columnWidth * 3 * 1.2}vw;
          height: ${columnWidth * 2.25 * 1.2}vw;
        `}
  margin-bottom: 2rem;
  // padding
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  cursor: pointer;
`;
