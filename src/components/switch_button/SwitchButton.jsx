import React from "react";
import { Switch } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

function SwitchButton({ onClick, disabled, checked }) {
    return (
        <Switch
            onClick={(checked, event) => { onClick(checked, event) }}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={false}
            disabled={disabled}
            checked={checked}
        />
    )
}

export default SwitchButton;