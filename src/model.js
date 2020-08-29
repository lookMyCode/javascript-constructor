import image from './assets/image.jpg';
import { Block, TitleBlock, TextBlock, TextColumnsBlock, ImageBlock } from './classes/blocks';
export const model = [
  new TitleBlock('Test title', {
    styles: 'text-align: center; font-weight: bold; font-size: 3rem; padding: 2rem; background-color: #aaa;',
    tag: 'h1'
  }),
  new TextBlock('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus voluptate pariatur eveniet numquam culpa amet veniam ea quis quisquam quod minima ab officiis a minus, repellendus dolore neque vel odit voluptates assumenda eligendi atque! Repellendus sequi obcaecati omnis laborum enim perspiciatis molestiae, odit sapiente modi, vel, quam culpa rem.', 
  {
    styles: 'font-size: 1rem; padding: 1rem; background-color: #eee;'
  }),
  new TextColumnsBlock([
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, voluptate quidem. Neque itaque molestiae aperiam quam facilis dicta ipsum quo?',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, voluptate quidem. Neque itaque molestiae aperiam quam facilis dicta ipsum quo?',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, voluptate quidem. Neque itaque molestiae aperiam quam facilis dicta ipsum quo?'
  ], 
  {
    styles: 'font-size: 1rem; padding: 1rem; background-color: #eee; font-style: italic;'
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0; background-color: #eee; display: flex; justify-content: center;',
    alt: 'image',
    imageStyles: 'width: 500px; height: auto;'
  }),
];