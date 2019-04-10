import React, { PureComponent } from 'react';

export default class Votes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      test: 1
    };
  }

  render() {
    const { test } = this.state;
    return (
      <div>
        Home,
        {test}
      </div>
    );
  }
}
