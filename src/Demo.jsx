import React from 'react';
import { connect } from 'react-redux';

import * as Constants from './Constants';

import ComponentDemo from './demos/ComponentDemo';
import PropsDemo from './demos/PropsDemo';
import StateDemo from './demos/StateDemo';

const mapStateToProps = ({ view }) => ({ view });

const mapDispatchToProps = dispatch => ({
  changeView: nextView => () => dispatch({
    type: Constants.action.CHANGE_VIEW,
    nextView
  })
});

const NavLink = ({ children, onClick }) => (
  <button className='nav__link' onClick={onClick}>{children}</button>
);

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ changeView, view }) => (
    <div className='demo'>
      <div className='nav'>
        <div className='nav__header'>Available Demos:</div>
        <NavLink onClick={changeView(Constants.view.COMPONENT)}>Component</NavLink>
        <NavLink onClick={changeView(Constants.view.PROPS)}>Props</NavLink>
        <NavLink onClick={changeView(Constants.view.STATE)}>State</NavLink>
      </div>
      <div className='demo__content'>
        {({
          [Constants.view.COMPONENT]: <ComponentDemo />,
          [Constants.view.PROPS]: <PropsDemo />,
          [Constants.view.STATE]: <StateDemo />
        })[view]}
      </div>
    </div>
  )
);
