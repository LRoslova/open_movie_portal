import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { actions } from "../../store/favorites/favorites.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const rootActions = {
    ...actions
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}