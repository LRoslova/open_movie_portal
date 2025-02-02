import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { actions as favoritesActions} from "../../store/favorites/favorites.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const rootActions = {
    ...favoritesActions

}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}