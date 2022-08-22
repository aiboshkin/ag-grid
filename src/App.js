import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { AgGridReact } from 'ag-grid-react';

import { GET_SHIPPING_MARK } from './query/shippingMark';
import { GROUP_ID } from './constants';

function App() {
    const [rowData, setRowData] = useState();

    const columnDefs = useMemo(
        () => [
            { field: 'abbreviation' },
            { field: 'area' },
            { field: 'cipher' },
            { field: 'id' },
            { field: 'constructionType' },
            { field: 'width' },
            { field: 'height' },
        ],
        [],
    );

    const defaultColDef = useMemo(
        () => ({
            editable: true,
            sortable: true,
            resizable: true,
            minWidth: 100,
        }),
        [],
    );

    const { data, loading } = useQuery(GET_SHIPPING_MARK, {
        variables: {
            groupId: GROUP_ID,
        },
    });

    useEffect(() => {
        if (!loading) {
            setRowData(data.shippingMarksGroup.items);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <div className="ag-theme-alpine table">
            <AgGridReact
                animateRows={true}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                suppressRowClickSelection={true}
                groupSelectsChildren={true}
                rowSelection={'multiple'}
                rowGroupPanelShow={'always'}
                pivotPanelShow={'always'}
                pagination={true}
            />
        </div>
    );
}

export default App;
