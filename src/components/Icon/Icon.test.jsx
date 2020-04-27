import React  from 'react';
import renderer from "react-test-renderer";
import { shallow, mount } from 'enzyme';
import { Icon } from "./Icon";

describe("Icon component", () => {
  test("render correctly Icon component", () => {
    const icon = renderer.create(<Icon/>).toJSON();
    expect(icon).toMatchSnapshot();
  });

  test('renders with transparent proprty', () => {
    const icon = shallow(<Icon transparent={true} />);
    expect(icon.contains(<div className="icon icon_transparent" ></div>)).toBeTruthy();
    expect(icon.find('.icon_transparent').length).toBe(1);
  });
  
  test('renders with icon proprty', () => {
    const icon = shallow(<Icon icon='🎂' />);
    expect(icon.text()).toBe('🎂');
  });

  test('check correctly icon prop', () => {
    const icon = mount(<Icon icon='🎂' />);
    expect(icon.prop('icon')).toBe('🎂');
  });
      
  
});
