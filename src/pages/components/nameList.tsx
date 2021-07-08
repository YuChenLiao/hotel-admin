import { FC, useState } from 'react';
import { Card, PageHeader, Tag, Row, Col, Menu } from 'antd';
import { Loading, connect, defaultState } from 'umi';
import styles from '../roomList.less';

const { CheckableTag } = Tag;

const NameList = ({ list }: any) => {
  console.log(list);
  return (
    <Row>
      {list.map((item: any) => (
        <Col
          xs={8}
          md={6}
          sm={4}
          lg={6}
          xl={4}
          key={item.name}
          style={{
            marginBottom: 12,
          }}
          className={styles['name-wrapper']}
        >
          <CheckableTag
            checked={true}
            className={styles['name-list__item']}
            key={item.name}
          >
            {item.name}
          </CheckableTag>
        </Col>
      ))}
    </Row>
  );
};

export default NameList;