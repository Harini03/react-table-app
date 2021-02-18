import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import EnhancedTable from '../../components/Table';

export function Members(props){
    useEffect(()=>{
        props.actions.fetchMembers();

    },[]);
    return (
        <div>
            <EnhancedTable rows={props.membersList.members} />
        </div>
    );
}
Members.propTypes = {
    actions: PropTypes.object,
    membersList: PropTypes.object
  };
  
  const mapStateToProps = (state) => ({
    eventsList: state.events
  });
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(
    Members
  );