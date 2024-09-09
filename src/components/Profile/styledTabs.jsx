import styled from 'styled-components';
import { Tabs } from 'antd';

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  .ant-tabs-tab {
    color: ${({ theme }) => theme.colors.text};
    
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  .ant-tabs-tab-active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }

  .ant-tabs-content {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default StyledTabs;
