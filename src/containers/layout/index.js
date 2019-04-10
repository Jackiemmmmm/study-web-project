import React, { PureComponent } from 'react';

export default class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return <div style={{ width: '100%', height: '100%' }}>{children}</div>;
  }
}
