export const fetchProducts = () =>
  $.ajax({
    method: "get",
    url: "api/products"
  });

export const fetchProduct = id =>
  $.ajax({
    method: "get",
    url: `api/products/${id}`
  });

export const createProduct = product =>
  $.ajax({
    method: "post",
    url: "api/products",
    data: { product }
  });

export const updateProduct = product =>
  $.ajax({
    method: "patch",
    url: `api/products/${product.id}`,
    data: { product }
  });

export const removeProduct = id =>
  $.ajax({
    method: "delete",
    url: `api/products/${id}`
  });
