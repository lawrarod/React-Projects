import './dataTable.scss'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

type Props = {
  columns: GridColDef[],
  rows: object[],
  slug: string
}

export const DataTable = (props: Props) => {

  const handleDelete = (id: number) => {
    // delete the item with method filter
    console.log(id + 'has been deleted')
  }

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="view user profile" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="delete icon" />
          </div>
        </div>
      )
    }
  }

  return (
    <div className='dataTable'>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          className='dataGrid'
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 }
            }
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </Box>
    </div>
  )
}
