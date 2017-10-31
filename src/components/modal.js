import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from './modal/Modal';
import * as actions from './modal/actions';
import * as actionTypes from './modal/actionTypes';
import reducer from './modal/reducer';

const NAME = 'modal';

const mapStateToProps = ({ [NAME]: { component, props } }) => ({
  ...props,
  component,
});

const mapDispatchToProps = dispatch => ({
  hide: bindActionCreators(actions.hideModal, dispatch),
});

const Component = connect(mapStateToProps, mapDispatchToProps)(Modal);

export { actionTypes, actions, reducer, NAME as key, Component };

export default {
  actionTypes,
  actions,
  reducer,
  key: NAME,
  Component,
};
