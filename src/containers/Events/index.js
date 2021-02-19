import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import EnhancedTable from '../../components/Table';
//import { DataGrid } from '@material-ui/data-grid';

export function Events(props){
    const headCells = [
        { id: 'Organizer', numeric: false, disablePadding: true, label: 'Organizer' },
        { id: 'company', numeric: true, disablePadding: false, label: 'company' },
        { id: 'About', numeric: true, disablePadding: false, label: 'About' },
        { id: 'ScheduleDate', numeric: true, disablePadding: false, label: 'Schedule date' },
        { id: 'Duration', numeric: true, disablePadding: false, label: 'Duration' },
        { id: 'Capacity', numeric: true, disablePadding: false, label: 'Capacity' }
      ];
      const columns = [
        
        { field: 'organizer', headerName: 'Organizer', width: 130, numeric: false, disablePadding: true },
        { field: 'company', headerName: 'Company', width: 130, numeric: false, disablePadding: true },
        {
          field: 'about',
          headerName: 'About',
          sortable: false,
          //type: 'number',
          width: 130,
          numeric: false, disablePadding: true
        },
        {
          field: 'scheduleDate',
          headerName: 'Schedule Date',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 90,
          numeric: false, disablePadding: true
          // valueGetter: (params) =>
          //   `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
        { field: 'duration', headerName: 'Duration', sortable: false, width: 90, numeric: false, disablePadding: true },
        { field: 'capacity', headerName: 'Capacity', type: 'number', width: 130, numeric: true, disablePadding: false }
        

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
            headCells={columns}
            isDeletable={false} /> 
            {/* <DataGrid rows={props.eventsList.events} columns={columns} pageSize={5} /> */}
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