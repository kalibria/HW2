type ActionType = | ChangeThemeIdType

export type ThemeStateType = {
    themeId: number
}
const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

type ChangeThemeIdType = ReturnType<typeof changeThemeId>