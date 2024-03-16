# Defer Image Load

## Usage

```html
<img
  src="https://site/img/low-quality-image.jpg"
  data-original-src="https://site/real-image.jpg"
  data-load="deferred"
/>
```

Required fields

1. src - low quality image source
2. data-original-src - real image source
3. data-load - should always be deferred
