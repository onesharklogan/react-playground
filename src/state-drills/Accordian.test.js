import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordian from './Accordian';
import { Simulate } from 'react-dom/test-utils';


const sections = [
    {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        title: 'Section 2',
        content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
        title: 'Section 3',
        content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
]

it('renders empty given no Sections', () => {
    const wrapper = shallow(<Accordian />)
    expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders no sections by default', () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
})

it('opens any clicked section', () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
})

it('opens only one section at a time', () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')

    expect(toJson(wrapper)).toMatchSnapshot()
})