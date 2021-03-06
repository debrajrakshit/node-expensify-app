import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header currectly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();//spy
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').prop('onClick')();
    expect(startLogout).toHaveBeenCalled();
});
