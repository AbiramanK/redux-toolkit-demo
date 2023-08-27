import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, AppSelector } from "@/lib/redux/store";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: AppSelector = useSelector;

export { useAppDispatch, useAppSelector };
