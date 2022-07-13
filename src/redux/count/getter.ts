import { ICountState } from './type'


export const getCount = (state: { count: ICountState }) => state.count.count