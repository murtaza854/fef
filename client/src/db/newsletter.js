import api from '../api';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

const createNewsletterTableData = (data) => {
    let { id, title, fileName, count } = data;
    const name = title;
    return { id, name, fileName, count };
}

const newsletterObj = {
    apiTable: `${api}/newsletter/TableData`,
    deleteApi: [`${api}/newsletter/getByIds`, `${api}/newsletter/delete`],
    createTableData : createNewsletterTableData,
    headCells: [
        // { id: 'id', numeric: false, disablePadding: false, label: 'ID' },
        { id: 'name', numeric: false, disablePadding: false, label: 'Title' },
        { id: 'fileName', numeric: false, disablePadding: false, label: 'File Name' },
        { id: 'count', numeric: true, disablePadding: false, label: 'Number of times sent' },
    ],
    ManyChild: '',
    checkboxSelection: 'id',
    editAllowed: true,
    deleteAllowed: true,
    addAllowed: true,
    modelName: 'Newsletter',
    ordering: 'id',
    rightAllign: ['count'],
    Form: function() {
        return (<div></div>);
    },
}

export default newsletterObj;