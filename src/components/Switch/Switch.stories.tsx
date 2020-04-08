import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Switch } from './Switch';

const knobs = () => ({
  checked: boolean('checked', false),
  disabled: boolean('disabled', false),
  size: select('size', ['m', 'l'], 'm'),
  label: text('label', 'Move me, I beg you!'),
});

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .add('Свитч', () => <Switch {...knobs()} />);
