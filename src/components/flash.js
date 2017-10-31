import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import * as actions from './flash/actions';
import * as actionTypes from './flash/actionTypes';
import reducer from './flash/reducer';

const NAME = 'flash';

const mapStateToProps = ({ [NAME]: props }) => ({ ...props });

const mapDispatchToProps = dispatch => ({
  onRequestClose: bindActionCreators(actions.hide, dispatch),
});

const Component = connect(mapStateToProps, mapDispatchToProps)(Snackbar);

export { actionTypes, actions, reducer, NAME as key, Component };

export default {
  actionTypes,
  actions,
  reducer,
  key: NAME,
  Component,
};
