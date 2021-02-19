import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import EnhancedTable from '../../components/Table';

export function Members(props){
    const columns = [
        
        { field: 'name', sortable:true, headerName: 'Name', width: 130, numeric: false, disablePadding: true },
        { field: 'age', sortable: true, headerName: 'Age', width: 130, numeric: true, disablePadding: false },
        {
          field: 'email',
          headerName: 'Email',
          sortable: true,
          //type: 'number',
          width: 130,
          numeric: false, disablePadding: true
        },
        {
          field: 'phone',
          headerName: 'Phone',
          description: 'This column has a value getter and is not sortable.',
          //sortable: false,
          width: 130,
          numeric: true, disablePadding: false
          // valueGetter: (params) =>
          //   `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
        { field: 'company', headerName: 'Company', width: 130, numeric: false, disablePadding: true },
        { field: '', headerName: 'Event', sortable: false, type:"event", numeric: true, width: 190, disablePadding: true },
        

      ];
    useEffect(()=>{
        props.actions.fetchMembers();
        //props.actions.fetchEvents();

    },[])
    return (
        <div>
            <h2>Members List</h2>
            <EnhancedTable 
            rows={props.membersList.members}
            headCells={columns}
            isDeletable={true} /> 
            {/* <DataGrid rows={props.eventsList.events} columns={columns} pageSize={5} /> */}
        </div>
    );
}
    
Members.propTypes = {
    actions: PropTypes.object,
    membersList: PropTypes.object
  };
  
  const mapStateToProps = (state) => ({
    membersList: state.members
  });
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(
    Members
  );