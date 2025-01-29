import { useSelector } from "react-redux"

export const useMenu = () => {
    const menu = useSelector(state => state.menu)

    return menu
}