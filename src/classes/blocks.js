import {col,css,row} from '../utils'

class Block {
    constructor(value, options){
        this.value = value
        this.options = options
    }
    toHTML(){
        throw new Error('Method toHTML should be used')
    }}

    export class TitleBlock extends Block {
        constructor(value,options){
            super(value, options)
        }
        toHTML(){
        const {tag ='h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
        }
    }

    export class ImageBlock extends Block {
        constructor(value,options){
            super(value, options)
        }
        toHTML(){
        const {imageStyles: is, alt = '', styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
        }
    }

    export class ColumnsBlock extends Block {
        constructor(value,options){
            super(value, options)
        }
        toHTML(){
        const html = this.value.map(item => col(item)).join('') //(item =>col(item)) equal (col)
        return row(html, css(this.options.styles))
        }
    }

    export class TextBlock extends Block {
        constructor(value,options){
            super(value, options)
        }
        toHTML(){
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
        }
    }
