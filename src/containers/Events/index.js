import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import EnhancedTable from '../../components/Table';

export function Events(props){
    const headCells = [
        { id: 'Organizer', numeric: false, disablePadding: true, label: 'Organizer' },
        { id: 'company', numeric: true, disablePadding: false, label: 'company' },
        { id: 'About', numeric: true, disablePadding: false, label: 'About' },
        { id: 'ScheduleDate', numeric: true, disablePadding: false, label: 'Schedule date' },
        { id: 'Duration', numeric: true, disablePadding: false, label: 'Duration' },
        { id: 'Capacity', numeric: true, disablePadding: false, label: 'Capacity' }
      ];
    useEffect(()=>{
        //props.actions.fetchMembers();
        props.actions.fetchEvents();

    },[])
    return (
        <div>
            <h2>Events List</h2>
            <EnhancedTable 
            rows={props.eventsList.events}
            headCells={headCells}
            isDeletable={false} />
        </div>
    );
}
Events.propTypes = {
    actions: PropTypes.object,
    eventsList: PropTypes.object
  };
  
  const mapStateToProps = (state) => ({
    eventsList: state.events
  });
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(
    Events
  );