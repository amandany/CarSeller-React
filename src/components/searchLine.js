import React from "react";
import styles from './searchLine.module.css';
import { Input } from 'antd';
import { Select } from 'antd';
const { Option } = Select;


const SearchLine = ({onSearchChange,onOptionChange}) => {

    const HandleChange = (e) => {
        onSearchChange(e.target.value);
    }

    const OptionChange = (e) => {
        onOptionChange(e.value)
    }

    return (
        <div className={styles.block}>
            <Input placeholder="Write model or brand of car"
                   style={{ width: 400, height: 30}}
                   onChange={HandleChange}
            />
            <Select
                labelInValue
                defaultValue={{ value: "Default sort" }}
                style={{ width: 180, height: 30 }}
                onChange={OptionChange}
            >
                <Option value="Default sort">Default sort</Option>
                <Option value="YearHill">Year on the hill</Option>
                <Option value="YearDown">Year on the downgrade</Option>
                <Option value="PriceHill">Price on the hill</Option>
                <Option value="PriceDown">Price on the downgrade</Option>
                <Option value="Fuel">Type of fuel</Option>
            </Select>
        </div>
    )
}

export default SearchLine;