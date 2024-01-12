import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders a BodySection component and passes props correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Verificar que BodySection se renderiza
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBe(true);

    // Verificar que las props se pasan correctamente
    expect(bodySection.props().title).toBe('test title');
    expect(bodySection.props().children.type).toBe('p');
  });
});
