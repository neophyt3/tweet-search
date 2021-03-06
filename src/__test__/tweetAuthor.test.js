import React from 'react'
import { shallow } from 'enzyme'
import TweetAuthor from '../components/TweetAuthor'

function setup() {
  const props = {
    showUserModal: jest.fn(),
    user: {
      name: "Michelle Obama",
      screen_name: "miche2007",
      location: "Washington DC"
    }
  }

  const wrapper = shallow(<TweetAuthor {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<TweetAuthor />', () => {
  it('renders <TweetAuthor /> components', () => {
    const { wrapper } = setup()
    expect(wrapper.find('img').hasClass('avatar')).toBe(true)
    expect(wrapper.find('span').hasClass('TweetAuthor__screen_name')).toBe(true)
    expect(wrapper.find('p').hasClass('TweetAuthor__name')).toBe(true)
  });

  it('calls showModal function if user avatar clicked on', () => {
    const { wrapper, props } = setup();
    wrapper.find('img').simulate('click');
    expect(props.showUserModal.mock.calls.length).toBe(1);
  });

  it('calls showModal function if user name clicked on', () => {
    const { wrapper, props } = setup();
    wrapper.find('span').simulate('click');
    expect(props.showUserModal.mock.calls.length).toBe(1);
  });

  it('calls showModal function if user screen name clicked on', () => {
    const { wrapper, props } = setup();
    wrapper.find('p').simulate('click');
    expect(props.showUserModal.mock.calls.length).toBe(1);
  });

});
