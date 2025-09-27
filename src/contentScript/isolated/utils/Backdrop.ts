import { Popover } from "./Popover";
import { insertStyle } from "src/utils/nativeUtils";
import styles from "./Backdrop.css?raw"

export class Backdrop extends Popover {
    constructor() {
        super()
        insertStyle(styles, this._shadow)
    }
    svg: SVGElement
    release = () => {
        this._release()
        this.svg?.remove()
    }
    lastFilter: string
    show = (filter?: string, svg?: SVGElement) => {
        if (filter === this.lastFilter) return 
        this.svg?.remove()
        this.svg = svg 
        this.lastFilter = filter 
        this._div.style.backdropFilter = filter
        this.svg && this._shadow.appendChild(this.svg)
        this._update(!!filter)
    }
}
