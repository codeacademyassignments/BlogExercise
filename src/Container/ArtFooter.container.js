import { connect } from 'react-redux';
import ArtFooter from '../Component/Section/ArtFooter/ArtFooter.component';
import { increaseClaps, toggleHeartLike } from '../Actions/Artifact.actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClapClick: () => {
    dispatch(increaseClaps(ownProps.index));
  },
  onHeartClick: () => {
    dispatch(toggleHeartLike(ownProps.index));
  },
});

// console.log('inside this', ownProps);
const mapStateToProps = (state, ownProps) => ({
  index: ownProps.index,
  liked: ownProps.liked,
  claps: ownProps.claps,
});
const artFooterApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtFooter);

export default artFooterApp;
