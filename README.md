# Defer Image Load

## Usage

```js
import deferImageLoad from 'defer-image-load'

deferImageLoad('[data-deferred-src]')
```

```html
<img
    src="https://site/img/low-quality-image.jpg"
    data-deferred-src="https://site/real-image.jpg"
/>
```

Required fields

1. src - low quality image source
2. data-deferred-src - real image source
