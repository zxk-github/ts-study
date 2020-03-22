import React from 'react';

interface Greeting {
  name: string,
  firstName: string,
  lastName: string
}
const Hello:React.FunctionComponent<Greeting> = ({name, firstName, lastName
}) => (<div>hello {name}</div>)

// 使用了React.FunctionComponent约束之后，设置默认属性必须是可选属性
Hello.defaultProps = {
  firstName: '',
  lastName: ""
}
export default Hello;