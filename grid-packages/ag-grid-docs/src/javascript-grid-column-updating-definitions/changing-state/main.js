function getColumnDefs() {
    return [
        {field: 'athlete', width: 100, sort: 'asc'},
        {field: 'age'},
        {field: 'country', pinned: 'left'},
        {field: 'sport'},
        {field: 'year'},
        {field: 'date'},
        {field: 'gold'},
        {field: 'silver'},
        {field: 'bronze'},
        {field: 'total'}
    ];
}

var gridOptions = {
    defaultColDef: {
        initialWidth: 100,
        sortable: true,
        resizable: true,
        pinned: null, // important - clears pinned if not specified in col def
        sort: null // important - clears sort if not specified in col def
    },
    columnDefs: getColumnDefs()
};

function onBtWithState() {
    gridOptions.api.setColumnDefs(getColumnDefs());
}

function onBtRemove() {
    gridOptions.api.setColumnDefs([]);
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({url: 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'})
        .then(function (data) {
            gridOptions.api.setRowData(data);
        });
});
