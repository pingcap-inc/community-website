import * as React from 'react';
import * as Styled from './AuditList.styled';
import { List, Popconfirm, Button } from 'antd';
import { api } from '@tidb-community/datasource';

const AuditList = ({ data }) => {
  const confirm = (id) => {
    return api.blog.auditById(id);
  };
  return (
    <Styled.Container>
      <List
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={data.content}
        renderItem={(item) => (
          <List.Item>
            <Styled.Info>
              <Styled.Title>
                <a href={`/blog/${item.id}`} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Styled.Title>
              <Styled.Author>
                <img src={item.author.avatarURL} alt="" />
                <a href={`/u/${item.author.username}`} target="_blank" rel="noreferrer">
                  {item.author.name}
                </a>
              </Styled.Author>
            </Styled.Info>
            <Styled.Action>
              <Popconfirm
                title="确认是否允许发表该文章？（文章将被发布）"
                onConfirm={async () => await confirm(item.id, true)}
              >
                <Button>通过</Button>
              </Popconfirm>
              <Popconfirm
                title="确认是否拒绝发表该文章？（文章将不会被发布）"
                onConfirm={async () => await confirm(item.id, false)}
              >
                <Button>拒绝</Button>
              </Popconfirm>
            </Styled.Action>
          </List.Item>
        )}
      />
      {/*{data.content.map((value, index) => {*/}
      {/*  return (*/}
      {/*    <Styled.Item>*/}

      {/*    </Styled.Item>*/}
      {/*  )*/}
      {/*})}*/}
    </Styled.Container>
  );
};

export default AuditList;
