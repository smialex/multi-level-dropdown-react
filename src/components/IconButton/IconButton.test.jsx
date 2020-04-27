import React  from 'react';
import renderer from "react-test-renderer";
import { shallow } from 'enzyme';
import { IconButton } from "./IconButton";
import { Icon } from "../Icon";

describe('IconButton component', ()=>{
  test('should render IconButton component', () => {
    const button = renderer.create(<IconButton/>).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('should render Icon component as child', () => {
    const wrapper = shallow(<IconButton/>);
    expect(wrapper.contains(<Icon/>)).toBeTruthy();
  });
  
  test('should handle onClick', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<IconButton onClick={onClick}/>);

    wrapper.find('button').simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  })
  
});