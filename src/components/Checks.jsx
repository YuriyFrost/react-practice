import React from 'react'
import { Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import { setCheckboxes } from '../redux/actions'

const CheckboxGroup = Checkbox.Group

const plainOptions = [
  { label: 'Без пересадок', value: 0 },
  { label: '1 пересадка', value: 1 },
  { label: '2 пересадки', value: 2 },
  { label: '3 пересадки', value: 3 },
  { label: '4 пересадки', value: 4 },
  { label: '5 пересадок', value: 5 },
  { label: '6 пересадок', value: 6 },
]
const defaultCheckedList = [0, 1, 2, 3, 4, 5, 6]

export const Checks = () => {
  const dispatch = useDispatch()
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList)
  const [indeterminate, setIndeterminate] = React.useState(false)
  const [checkAll, setCheckAll] = React.useState(true)

  const handleChange = (list) => {
    setCheckedList(list)
    dispatch(setCheckboxes(list))
  }

  const onChange = (list) => {
    handleChange(list)
    setIndeterminate(!!list.length && list.length < plainOptions.length)
    setCheckAll(list.length === plainOptions.length)
  }

  const onCheckAllChange = (e) => {
    handleChange(e.target.checked ? defaultCheckedList : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  )
}
