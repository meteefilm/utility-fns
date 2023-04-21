import { getSession } from './Crypto';

export const dataUserSession = () => {
    try {
        const dataUser = getSession("login")
        if (!dataUser) {
            return {
                theme: 'light',
                userId: '',
            }
        }
        return dataUser;
    }
    catch (err) {
        return undefined
    }
}

export const menuListSession = () => {
    try {
        const menu = getSession("menulist")
        return menu;
    }
    catch (err) {
        return undefined
    }
}

export const TokenSession = () => {
    try {
        const token = getSession("token")
        return token;
    }
    catch (err) {
        return undefined
    }
}

export const themeSession = () => {
    try {
        const theme = getSession("theme")
        return theme;
    }
    catch (err) {
        return undefined
    }
}

