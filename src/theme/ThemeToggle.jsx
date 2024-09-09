import React from 'react';
import { Switch } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';

const ThemeToggle = ({ toggleTheme, theme }) => (
  <div style={{ textAlign: 'right', padding: '10px' }}>
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      checkedChildren={<BulbFilled />}
      unCheckedChildren={<BulbOutlined />}
    />
  </div>
);

export default ThemeToggle;
