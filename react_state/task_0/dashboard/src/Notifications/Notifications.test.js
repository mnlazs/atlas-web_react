import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Notifications />', () => {
  let wrapper;
  const handleDisplayDrawerSpy = jest.fn();
  const handleHideDrawerSpy = jest.fn();

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(
      <Notifications 
        handleDisplayDrawer={handleDisplayDrawerSpy} 
        handleHideDrawer={handleHideDrawerSpy}
      />
    );
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.clearAllMocks();
  });

  it('calls handleDisplayDrawer when menu item is clicked', () => {
    // Suponiendo que tu componente tiene un elemento con el testID 'menuItem'
    wrapper.find('[testID="menuItem"]').simulate('click'); 
    expect(handleDisplayDrawerSpy).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    // Suponiendo que tu componente tiene un elemento con el testID 'closeButton'
    wrapper.setProps({ displayDrawer: true });
    wrapper.find('[testID="closeButton"]').simulate('click');
    expect(handleHideDrawerSpy).toHaveBeenCalled();
  });

  // ... tus otras pruebas existentes
});
