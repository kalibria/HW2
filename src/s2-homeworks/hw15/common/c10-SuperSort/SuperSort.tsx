import React from 'react'
import sortArrows from '../../.././../assets/icons/sort-arrows-icon.svg'
import sortArrowUp from '../../.././../assets/icons/sort-arrow-up-1.svg'
import sortArrowDown from '../../.././../assets/icons/sort-arrow-down-1.svg'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if(sort === ""){
        return up
    }else if(sort === up){
        return down
    }else return ""

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? sortArrowDown
        : sort === up
            ? sortArrowUp
            : sortArrows

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={"icon"}
                style={{width: '12px', height: '10px', textAlign: 'center', verticalAlign: 'middle'}}
            />


        </span>
    )
}

export default SuperSort
