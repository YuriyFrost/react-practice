import React from 'react'
import 'antd/dist/antd.css';
import '../index.css';
import { Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSorting } from '../redux/actions'

const optionsWithDisabled = [
  { label: 'САМЫЙ ДЕШЕВЫЙ', value: 'sortingPrice' },
  { label: 'САМЫЙ БЫСТРЫЙ', value: 'sortingDuration' }
];

export const Sorting = () => {
    const value = useSelector(state => state.tickets.sorting)
    const dispatch = useDispatch()
    const onChange = (e) => {
        console.log('radio checked', e.target.value)
        dispatch(setSorting(e.target.value))
    };
    return (
        <Radio.Group
            options={optionsWithDisabled}
            onChange={onChange}
            value={value}
            optionType="button"
            buttonStyle="solid"
        />
    );
}
