
import { useState } from 'react';
import {Table } from 'antd';

const Chart = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const data = [];
    for (let i = 0; i < 8; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            customer: `John Smith ${i}`,
            age: `32 ${i}`,
            DOB: `11 March 200 ${i}`,
            address: `London, Park Lane no. ${i}`,
            city: `delhi ${i}`,
        });
    }
    const columns = [
        {
            title: 'Tracking ID',
            dataIndex: 'key',
        },
        {
            title: 'name',
            dataIndex: 'name',
        },
        {
            title: 'customer',
            dataIndex: 'customer',
        },
        {
            title: 'age',
            dataIndex: 'age',
        },
        {
            title: 'DOB',
            dataIndex: 'DOB',
        },
        {
            title: 'address',
            dataIndex: 'address',
        },
        {
            title: 'city',
            dataIndex: 'city',
        },
    ];
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    return (
        <div style={{flexGrow: 1}}>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data}  />
        </div>

    );
};

export default Chart;
