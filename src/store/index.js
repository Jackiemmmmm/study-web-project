import { observable, computed, action } from 'mobx';

class Todo {
  @observable todos = [];

  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action.bound getTodoList(arr) {
    this.todos = this.todos.concat(arr);
  }

  @action.bound addTodoList(string) {
    this.todos = this.todos.concat([string]);
  }
}

class Test1 {
  @observable test1 = 123;
}

export default {
  Todo: new Todo(),
  Test1: new Test1()
};
