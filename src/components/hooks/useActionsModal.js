import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { actions as modalActions} from "../../store/modal/modal.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const rootActions = {
    ...modalActions
}

export const useActionsModal = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}