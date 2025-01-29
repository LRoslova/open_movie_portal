import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { actions as userActions} from "../../store/user/user.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const rootActions = {
    ...userActions
}

export const useActionsUser = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}