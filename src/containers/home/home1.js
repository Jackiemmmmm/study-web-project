import React, { Component, createRef } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject('Test1', 'Todo')
@observer
class Test1Component extends Component {
  static propTypes = {
    Test1: PropTypes.shape({
      test1: PropTypes.number
    }).isRequired,
    Todo: PropTypes.shape({
      todos: PropTypes.object,
      getTodoList: PropTypes.func,
      addTodoList: PropTypes.func
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.state = {
      test: 1
    };
  }

  componentDidMount() {
    const {
      Todo: { getTodoList }
    } = this.props;
    getTodoList([1, 2, 3, 4]);
  }

  handleButton = () => {
    const {
      Todo: { addTodoList }
    } = this.props;
    addTodoList([this.inputRef.current.value]);
    this.inputRef.current.value = '';
  };

  render() {
    const { test } = this.state;
    const {
      Test1: { test1 },
      Todo: { todos }
    } = this.props;
    if (todos.length === 5) {
      throw new Error('error test');
    }
    return (
      <div>
        Home1,
        {test}
        <br />
        <h5>Test1 store</h5>
        {test1}
        <br />
        <h5>Todo store</h5>
        {todos.map(i => (
          <div key={i}>
            {i}
            &nbsp; todo
          </div>
        ))}
        <br />
        <input placeholder="click to add todo" ref={this.inputRef} />
        <button onClick={this.handleButton} type="button">
          Add
        </button>
      </div>
    );
  }
}

export default Test1Component;
