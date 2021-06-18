import api from '../api';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

const createDontationsData = (data) => {
    let { id, amount, paid, paymentMethod, user } = data;
    const name = user.name;
    return { id, name, amount, paymentMethod, paid };
}

const donationObj = {
    apiTable: `${api}/donation/TableData`,
    deleteApi: [`${api}/donation/getByIds`, `${api}/donation/delete`],
    createTableData : createDontationsData,
    headCells: [
        // { id: 'id', numeric: false, disablePadding: false, label: 'ID' },
        { id: 'name', numeric: false, disablePadding: true, label: 'User Name' },
        { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
        { id: 'paymentMethod', numeric: false, disablePadding: false, label: 'PaymentMethod' },
        { id: 'paid', numeric: false, disablePadding: false, label: 'Paid' },
    ],
    ManyChild: '',
    checkboxSelection: 'id',
    editAllowed: false,
    deleteAllowed: false,
    addAllowed: false,
    modelName: 'Donation',
    ordering: 'id',
    rightAllign: ['amount'],
    Form: function() {
        return (<div></div>);
    },
}

export default donationObj;