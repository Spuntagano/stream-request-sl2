import * as React from 'react';
import { Link, withRouter as router } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import { RouteComponentProps } from 'react-router';
import _ from 'lodash';

const style = require('./style.scss');

interface IProps {
  className?: string;
}

class NavigationC extends React.Component<IProps & RouteComponentProps> {
  public render() {
    const { location, className } = this.props;

    return (
      <div className={`${style.Navigation} ${className}`}>
        <Menu selectedKeys={[location.pathname]} mode="horizontal">
          <Menu.Item key="/settings">
            <Link to={{
              pathname: '/settings',
              search: location.search
            }}>Settings</Link>
          </Menu.Item>
          <Menu.Item key="/requests">
            <Link to={{
              pathname: '/requests',
              search: location.search
            }}>Requests</Link>
          </Menu.Item>
          <Menu.Item key="/feed">
            <Link to={{
              pathname: '/feed',
              search: location.search
            }}>Notifications</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export const Navigation = router(NavigationC) as any;
