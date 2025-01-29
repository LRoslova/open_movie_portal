import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { actions as menuActions} from '../../store/menu/menu.slice'
import { bindActionCreators } from "@reduxjs/toolkit";

const rootActions = {
    ...menuActions
}

export const useActionsMenu = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}