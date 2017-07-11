import React from 'react';
import renderer from 'react-test-renderer';

import Component from './index';

describe('Component', () => {
  it('should export a component', () => {
      expect(Component).toNotBe(undefined);
  });
});
