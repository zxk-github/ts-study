import React, { Component } from 'react';

interface Greeting {
  name: string,
  firstName: string,
  lastName: string
}
interface State {
  count: number
}
class HelloClass extends Component<Greeting, State> {
  state: State = {count: 1};
  constructor(props: Greeting) {
    super(props);
  }
  static defaultProps = {
    name: 'a',
    firstName: 'b',
    lastName: 'c'
  }
  render() {
  return <h1>{this.state.count}</h1>
  }
}
export default HelloClass;