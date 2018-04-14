import React from 'react';

import { storiesOf } from '@storybook/react';
import Spinner from '../components/Spinner'
import Button from '../components/Button'
import Switch from '../components/Switch'
import Checkbox from '../components/Checkbox'

/* 버튼 지움
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
*/

storiesOf('Spinner', module)
  .add('default', () => <Spinner background="blue" />)
  .add('green', () => <Spinner background="green" />)


storiesOf('Button', module)
  .add('primary', () => <Button type="primary"> Default Button </Button>)
  .add('danger', () => <Button type="danger"> Default Button </Button>)

storiesOf('Switch', module)
  .add('default', () => <Switch></Switch>)

storiesOf('Checkbox', module)
  .add('dafault', () => <Checkbox></Checkbox>)