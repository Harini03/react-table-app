import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import EnhancedTable from '../../components/Table';
import ErrorBoundary from '../../components/ErrorBoundary';
import SimpleModal from '../../components/Modal';
import Events from '../Events';

export function Members(props){
  const [open, setOpen]=React.useState(false);
  const [selectedMemberRow, setSelectedMemberRow]=React.useState([]);
    const columns = [
        
        { field: 'name', sortable:true, headerName: 'Name', width: 130, numeric: false, disablePadding: false },
        { field: 'age', sortable: true, headerName: 'Age', width: 130, numeric: true, disablePadding: false },
        {
          field: 'email',
          headerName: 'Email',
          sortable: true,
          //type: 'number',
          width: 130,
          numeric: false, disablePadding: false
        },
        {
          field: 'phone',
          headerName: 'Phone',
          description: 'This column has a value getter and is not sortable.',
          //sortable: false,
          width: 130,
          numeric: false, disablePadding: false
          // valueGetter: (params) =>
          //   `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
        { field: 'company', headerName: 'Company', width: 130, numeric: false, disablePadding: true },
        { field: '', headerName: 'Event', sortable: false, type:"event", numeric: true, width: 190, disablePadding: true },
        {field:'', headerName: 'No of Events', sortable: false, type:"eventCount", numeric: true, disablePadding: false}

      ];

      
    useEffect(()=>{
        props.actions.fetchMembers();
        //props.actions.fetchEvents();

    },[]);
    const openEventsModal=(memberRow)=>{
      setOpen(true);
      setSelectedMemberRow(memberRow);
    };
    const closeEventsModal=()=>{
      setOpen(false);
    };
    const addEventToMember=(e)=>{
      props.actions.updateMember(e, selectedMemberRow);
      setOpen(false);
    }
    return (
      
        <div>
            <h2>Members List</h2>
            <ErrorBoundary>
              <EnhancedTable 
              rows={props.membersList.members}
              headCells={columns}
              isDeletable={true}
              openModal={openEventsModal}
              closeModal={closeEventsModal}
              rowUpdated={props.membersList.memberUpdated}
              /> 
              </ErrorBoundary>
              <ErrorBoundary>
              <SimpleModal openModal={open} closeModal={closeEventsModal} data={props.eventsList.events}>
                <Events updateMember={addEventToMember} />
              </SimpleModal>
            </ErrorBoundary>
        </div>
    );
}
    
Members.propTypes = {
    actions: PropTypes.object,
    membersList: PropTypes.object,
    eventsList: PropTypes.object
  };
  
  const mapStateToProps = (state) => ({
    membersList: state.members,
    eventsList: state.events
  });
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(
    Members
  );