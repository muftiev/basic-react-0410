import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentListWithToggleOpen, { CommentList } from '.'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  const comments = articles[0].comments

  it('should render items', () => {
    const container = shallow(<CommentList comments={comments} isOpen={true} />)

    expect(container.find('.test--comment-list__item').length).toEqual(
      comments.length
    )
  })

  it('should render "No comments yet" string for falsy comments prop', () => {
    const container = shallow(<CommentList comments={[]} isOpen={true} />)

    expect(container.find('.test--comment-list__body').length).toEqual(0)
    expect(container.find('.test--comment-list__empty').length).toEqual(1)
  })

  it('should render closed comments by default', () => {
    const container = render(<CommentListWithToggleOpen comments={comments} />)

    expect(container.find('.test--comment-list__body').length).toEqual(0)
  })

  it('should open comments on click', () => {
    const container = mount(<CommentListWithToggleOpen comments={comments} />)

    expect(container.find('.test--comment-list__body').length).toEqual(0)

    container
      .find('.test--comment-list__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comment-list__body').length).toEqual(1)
  })
})
