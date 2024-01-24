import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it('renders correctly an h2 and children', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Verificar que hay un elemento h2 y contiene el texto correcto
    expect(wrapper.find('h2').text()).toBe('test title');

    // Verificar que hay un elemento p como hijo y contiene el texto correcto
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});
