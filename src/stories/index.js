import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Spinner from '../components/Spinner'
import Button from '../components/Button'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

/* 버튼 지움
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
*/

storiesOf('Spinner', module)
  .add('default', () => <Spinner background="blue" />)
  .add('green', () => <Spinner background="green" />)

storiesOf('Button', module)
  .add('default', () => <Button /> )