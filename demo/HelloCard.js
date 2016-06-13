import React from 'react';
import {classToDOMCard} from '../src';

const preventDefault = (f) => (e) => { e.preventDefault(); f(); };

const Hello = React.createClass({
  render() {
    const {env, payload, isEditing} = this.props;
    if (isEditing) {
      return (
        <form onSubmit={preventDefault(() => env.save({ name: this.refs.name.value }))}>
          <input type="text" ref="name" defaultValue={payload.name}></input>
          <button>Save</button>
          <button onClick={preventDefault(env.cancel)}>Cancel</button>
        </form>
      );
    } else {
      return <button onClick={env.edit}>Hello {payload.name}</button>;
    }
  }
});

const HelloCard = classToDOMCard(Hello);

export default HelloCard;