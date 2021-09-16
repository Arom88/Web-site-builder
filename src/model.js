import image from './assets/js.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `Using this application you can implement dynamic features on web page. It possible thanks to programming language JavaScript.`

export const model = [
    new TitleBlock('Web-site builder on pure JavaScript', {
        tag: 'h2', 
        styles: {
         background: 'linear-gradient(to right, #ff0099, #493240)',
         color: '#fff',
         'text-align': 'center',
          padding: '1.5rem',
        }}),

    new ImageBlock(image,{
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
            width: '700px',
            height: 'auto',
            'border-radius': '25px'},
            alt: 'This is picture'
        }),

     new TextBlock (text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
            'text-align': 'center'
        }
    }),
    
    new ColumnsBlock([
        'Pure JavaScript application without any framework',
        'JavaScript is a dynamic computer programming language',
        'JavaScript is used across the web development stack'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold',
            'text-align': 'center'
        }
    })
]