import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  render() {
    return ( <div>
      This is a cat:<br />
      <div class='image'></div>
    </div> );
  }
}
