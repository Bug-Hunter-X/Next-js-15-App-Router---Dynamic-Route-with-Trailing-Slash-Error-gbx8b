```javascript
// app/product/[id]/page.js

export default function ProductPage({ params }) {
  return (
    <div>Product {params.id}</div>
  );
}

// or using a redirect
// app/product/[...id]/page.js

export default function ProductPage({ params }) {
  const id = params.id[0];
  if (params.id.length > 1) {
    return <Redirect href={`/product/${id}`} />
  }
  return (
    <div>Product {id}</div>
  );
}
```