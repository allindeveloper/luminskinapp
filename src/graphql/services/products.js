export const getAllProducts = (currency) => {
  return `{
        products {
            id
            title
            image_url
            price(currency:${currency})
            product_options{
              title
              prefix
              suffix
              options{
                id
                value
              }
            }
        }
    }`;
};
