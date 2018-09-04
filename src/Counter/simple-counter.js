import { html, define } from 'hybrids';
import { increment, decrement } from '../actions/CalcActions';
import connect from '../connect';
import store from '../store';
import button from './simple-button';

const onInc = ({ offset }) => store.dispatch(increment(offset));
const onDec = ({ offset }) => store.dispatch(decrement(offset));

const plusButton = button(onInc, '+1');
const minusButton = button(onDec, '-1');

const SimpleCounter = {
  firstName: 'John',
  lastName: 'Smith',
  name: ({ firstName, lastName }) => `${firstName} ${lastName}`,
  render: ({ _count }) => html`
    <simple-button></simple-button>
    ${plusButton}
    ${minusButton}
    <p>${_count}</p>
  `,
};

const createSimpleCounter = (connectedCount) => {
  SimpleCounter._count = connectedCount;
  return SimpleCounter;
};
const counter = createSimpleCounter(connect(store, ({ count }) => count.count));

define('simple-counter', counter);
