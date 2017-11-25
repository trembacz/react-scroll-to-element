# react-scroll-to-element
Scroll to any element of your React application

[![Build Status](https://travis-ci.org/trembacz/react-scroll-to-element.svg?branch=master)](https://travis-ci.org/trembacz/react-scroll-to-element)
[![Dependencies](https://david-dm.org/trembacz/react-scroll-to-element/status.svg)](https://david-dm.org/trembacz/react-scroll-to-element?view=list)
[![devDependencies](https://david-dm.org/trembacz/react-scroll-to-element/dev-status.svg)](https://david-dm.org/trembacz/react-scroll-to-element?type=dev&view=list)

## Getting Started

**1. Install**

```npm install react-scroll-to-element```
or
```yarn add react-scroll-to-element```

**2. Options**

| Option              | Value         | Description                                                          |
| ------------------- |:-------------:| -------------------------------------------------------------------- |
| ```type```          | ```string```  | ```id``` or ```class``` - Not required if you want to set offset only|
| ```element```       | ```string```  | Scroll to this element (use with ```type```)                         |
| ```offset```        | ```number```  | Scroll ```x``` pixels down                                           |
| ```timeout```       | ```number```  | Start scrolling after ```x``` ms                                     |
| ```children```      | ```string```  | Text or html tags                                                    |

**3. Usage**

```js

import Scroll from 'react-scroll-to-element';

<Scroll type="id" element="title">
  Scroll to element with id 'title'
</Scroll>

<Scroll type="class" element="contact">
  Scroll to element with class 'contact'
</Scroll>

<Scroll>
  Scroll to top
</Scroll>

<Scroll offset={200}>
  Scroll 200 px down (from top)
</Scroll>

<Scroll offset={200} timeout={3000}>
  Scroll 200 px down (from top) after 3 seconds
</Scroll>

<Scroll type="class" element="contact" offset={200} timeout={3000}>
  Scroll to element with class 'contact' + 200 px down after 3 seconds
</Scroll>

<Scroll type="class" element="contact" offset={-100}>
  Scroll to element with class 'contact' - 100 px
</Scroll>
```

***You can also use html tags inside the component***

```js
<Scroll type="class" element="contact" offset={-100} timeout={3000}>
  <button>Click me</button>
</Scroll>
```

[smoothscroll-polyfill](https://github.com/iamdustan/smoothscroll) used for older browsers

## License

[MIT](http://opensource.org/licenses/MIT)
