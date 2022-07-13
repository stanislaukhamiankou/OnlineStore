import { ITechnique } from "../../../redux/technique/type"

export type AllProductsListType = {
    data: ITechnique[]
    containerHeight: number
    onScroll?: React.UIEventHandler<HTMLElement>
}