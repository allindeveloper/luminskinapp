export const appHelpers = {
  
  formatPrice: (currency) => {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    });
    return formatter;
  },
};
