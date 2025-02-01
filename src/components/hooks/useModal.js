import { useSelector } from "react-redux"

export const useModal = () => {
    const modal = useSelector(state => state.modal)

    return modal
}