import { customers } from './data';

export const MODES = [
  {
    label: 'Basic',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'country', header: 'Country' },
        { field: 'status', header: 'Status' }
      ]
    },
    data: customers
  },
  {
    label: 'Pagination',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'country', header: 'Country' },
        { field: 'status', header: 'Status' }
      ],
      paginator: true,
      rows: 3
    },
    data: customers
  },
  {
    label: 'Sorting',
    config: {
      columns: [
        { field: 'name', header: 'Name', sortable: true },
        { field: 'country', header: 'Country', sortable: true },
        { field: 'status', header: 'Status' }
      ],
      sortMode: 'single'
    },
    data: customers
  }
];
