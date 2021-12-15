import * as Styled from './leaderboard.styled';
import { useState } from 'react';
import { Link } from '~/pages/events/hackathon2021/index.styled';
import FirstPlace from './prize-1.svg';
import SecondPlace from './prize-2.svg';
import ThirdPlace from './prize-3.svg';

const mapPrizeLogo = (prize) => {
  switch (prize) {
    case 1:
      return <FirstPlace />;
    case 2:
      return <SecondPlace />;
    case 3:
      return <ThirdPlace />;
    default:
      return prize;
  }
};

const Leaderboard = ({ data, sm }) => {
  const LIMIT = 20;
  const isShowingAll = data.length <= LIMIT;
  const [limit, setLimit] = useState(LIMIT);
  data = data.sort((a, b) => b.score - a.score);

  const switchOptions = [
    { label: '团队', value: 'teamName' },
    { label: '项目', value: 'projectName' },
  ];

  const expandOrCollapse = () => {
    console.log(limit);
    if (limit === LIMIT) {
      setLimit(data.length);
    } else {
      setLimit(LIMIT);
    }
  };

  const [activeColumn, setActiveColumn] = useState('teamName');

  const onSwitchChange = (e) => setActiveColumn(e.target.value);

  return (
    <Styled.Leaderboard sm={sm}>
      <Styled.Table>
        <Styled.TableHead>
          <Styled.TableHeadRow>
            <Styled.TableHeadCell>排名</Styled.TableHeadCell>
            {sm ? (
              <Styled.TableHeadCell>
                {' '}
                <Styled.ColumnSwitch
                  options={switchOptions}
                  onChange={onSwitchChange}
                  optionType="button"
                  buttonStyle="solid"
                  value={activeColumn}
                />
              </Styled.TableHeadCell>
            ) : (
              <>
                <Styled.TableHeadCell>团队名称</Styled.TableHeadCell>
                <Styled.TableHeadCell>项目名称</Styled.TableHeadCell>
              </>
            )}
            <Styled.TableHeadCell>总积分</Styled.TableHeadCell>
            <Styled.TableHeadCell>投票</Styled.TableHeadCell>
          </Styled.TableHeadRow>
        </Styled.TableHead>
        <Styled.TableBody>
          {data.slice(0, limit).map((row, index) => {
            return (
              <Styled.TableRow key={index} index={index}>
                <Styled.TableCell>{mapPrizeLogo(index + 1)}</Styled.TableCell>
                {sm ? (
                  <Styled.TableCell>
                    <Link fontSize="16px" href={row[activeColumn.replace('Name', 'Url')]}>
                      {row[activeColumn]}
                    </Link>
                  </Styled.TableCell>
                ) : (
                  <>
                    <Styled.TableCell>
                      <Link fontSize="16px" href={row.teamUrl}>
                        {row.teamName}
                      </Link>
                    </Styled.TableCell>
                    <Styled.TableCell>
                      <Link fontSize="16px" href={row.projectUrl}>
                        {row.projectName}
                      </Link>
                    </Styled.TableCell>
                  </>
                )}
                <Styled.TableCell>{row.score}</Styled.TableCell>
                <Styled.TableCell>
                  <Link fontSize="16px" href={row.pollUrl}>
                    投票
                  </Link>
                </Styled.TableCell>
              </Styled.TableRow>
            );
          })}
        </Styled.TableBody>
      </Styled.Table>
      {!isShowingAll && (
        <Styled.ExpandButton onClick={expandOrCollapse}>
          {limit >= data.length ? '收起' : '查看更多'}
        </Styled.ExpandButton>
      )}
    </Styled.Leaderboard>
  );
};

export default Leaderboard;
