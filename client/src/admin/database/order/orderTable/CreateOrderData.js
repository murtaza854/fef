export function CreateOrderData(obj) {
    const date = new Date(obj.shipstationOrder.orderDate);
    const orderDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    let orderStatus = '';
    if (obj.shipstationOrder.orderStatus === 'awaiting_shipment') orderStatus = 'Awaiting Shipment';
    else if (obj.shipstationOrder.orderStatus === 'shipped') orderStatus = 'Shipped';
    else if (obj.shipstationOrder.orderStatus === 'cancelled') orderStatus = 'Cancelled';
    else if (obj.shipstationOrder.orderStatus === 'awaiting_payment') orderStatus = 'Awaiting Payment';
    else if (obj.shipstationOrder.orderStatus === 'on_hold') orderStatus = 'On Hold';
    return {
        id: obj.shipstationOrder.orderId,
        orderNumber: obj.shipstationOrder.orderNumber,
        orderDate: orderDate,
        orderStatus: obj.shipstationOrder.orderStatus,
        orderStatusDisplay: orderStatus,
        amountTotal: `$ ${obj.stripeSession.amount_total / 100}`,
        shipTo: obj.shipstationOrder.shipTo,
        items: obj.shipstationOrder.items,
    };
}