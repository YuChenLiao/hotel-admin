import { FC, useState } from 'react';
import { PageHeader, Card } from 'antd';
import { Loading, connect, defaultState } from 'umi';

interface PageProps {
  global: defaultState;
  loading: boolean;
}

const InfoCollect: FC<PageProps> = (props) => {
  return <PageHeader title="信息统计"></PageHeader>;
};

export default connect(
  ({ global, loading }: { global: defaultState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(InfoCollect);
