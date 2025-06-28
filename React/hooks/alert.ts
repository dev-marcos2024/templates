import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setMenssage, setShow, setType } from "../redux/slices/aletSlice";

export const useAlert = () => {
  const { show, menssage, type } = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();

  const openAlert = useCallback(
    (msg: string, type: "error" | "success") => {
      dispatch(setType(type));
      dispatch(setMenssage(msg));
      dispatch(setShow(true));
    },
    [dispatch]
  );

  const closeAlert = useCallback(() => {
    dispatch(setShow(false));
  }, [dispatch]);

  return {
    show,
    type,
    menssage,
    closeAlert,
    openAlert,
  };
};
