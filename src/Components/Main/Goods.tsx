import React from 'react';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Loading } from '../UI/Loading';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Button} from 'primereact/button';
import { selectAll, selectFilteredGoods } from '../../redux/selectors';

function Goods () {
  const { loading, error } = useSelector(selectAll);
  const filteredGoods = useSelector(selectFilteredGoods);

  if (error) {
    return (
      <div>
        Error: {error}
      </div>
    )
  }

  const imagesbodyTemplate = (rowData: any) => {
    return (
        <div className="flex align-items-center gap-2">
          {rowData.images && (
            <img 
            alt={rowData.title} 
            src={rowData.images[0]} 
            width="72"
            style={{
              objectFit: 'cover'
            }}
          />
          )}
        </div>
    );
};

const linkbodyTemplate = (rowData: any) => {
  return (
      <LinkContainer 
        className="flex align-items-center gap-2"
        to={rowData.id.toString()}
      >
        <Button>
          Open this product page
        </Button>
      </LinkContainer>
  );
};

  return (
    <>
    {loading ? (
      <Loading />
    ) : (
        <DataTable 
          value={filteredGoods} 
          tableStyle={{ minWidth: '50rem' }}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 15, 20, 100]}
        >
          <Column body={linkbodyTemplate} header="Link" style={{width: '15%'}}></Column>
          <Column field='images' body={imagesbodyTemplate} header="Image" style={{width: '10%'}}></Column>
          <Column field="id" header="Id" sortable style={{ width: '5%' }}></Column>
          <Column field="title" header="Title" sortable style={{ width: '10%' }}></Column>
          <Column field="description" header="Description" sortable style={{ width: '40%' }}></Column>
          <Column field="category" header="Category" sortable style={{ width: '10%' }}></Column>
          <Column field="price" header="Price" sortable style={{ width: '5%' }}></Column>
          <Column field="rating" header="Rating" sortable style={{ width: '5%' }}></Column>
          <Column field="stock" header="Stock" sortable style={{ width: '5%' }}></Column>
        </DataTable>
    )}
    </>
  );
};

export default React.memo(Goods);

