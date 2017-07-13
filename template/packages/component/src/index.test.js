import React from 'react';
import renderer from 'react-test-renderer';

import Component from './index';

describe('Component', () => {
  it('should export a component', () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
