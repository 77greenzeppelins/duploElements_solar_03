import React from 'react';
import { Link } from 'react-router-dom';

const LinkWithState = props => {
  const { pathname, from } = props;
  console.log('<LinkWithState> / pathname, from', pathname, from);
  let obj = { pathname, state: { from } };
  obj.pathname = pathname;
  obj.state.from = from;
  console.log('<LinkWithState> / obj', obj);
  return (
    <>
      <Link to={obj}>{props.children}</Link>
    </>
  );
};

export default LinkWithState;
