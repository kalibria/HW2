import React, {FC} from 'react'
import burgerIcon from './burger.svg'
import s from './Header.module.css'
import {useLocation} from 'react-router-dom'
import {PATH} from '../Pages'
import s2 from "../../../s1-main/App.module.css";
import {Sidebar} from "../sidebar/Sidebar";

type PropsType = {
    handleOpen: () => void
    // handleClose: () => void
    open: boolean
}

export const Header: FC<PropsType> = ({handleOpen, open}) => {
    // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
    const location = useLocation()
    const currentPath = location.pathname

    const pageName =
        currentPath === PATH.PRE_JUNIOR
            ? 'Pre-junior'
            : currentPath === PATH.JUNIOR
                ? 'Junior'
                : currentPath === PATH.JUNIOR_PLUS
                    ? 'Junior Plus'
                    : 'Error'
    return (
        <div className={s.headerWrapper}>
            <div className={s2.container}>
                <div id={'hw5-header'} className={s.header}>
                    <img
                        src={burgerIcon}
                        id={'hw5-burger-menu'}
                        className={s.burgerMenuIcon}
                        onClick={handleOpen}
                        alt={'open menu'}
                    />
                    <h1>{pageName}</h1>
                </div>
            </div>
        </div>
    )
}
