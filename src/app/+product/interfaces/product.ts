export interface Product {
  batchId: String
  name: String,
  image: {
    url: String,
    show: Boolean
  },
  heading: {
    value: String,
    show: Boolean
  },
  description: {
    value: String,
    show: Boolean
  },
  city: {
    value: String,
    show: Boolean
  },
  country: {
    value: String,
    show: Boolean
  },
  manufacture: {
    value: String,
    show: Boolean
  },
  expire: {
    value: String,
    show: Boolean
  }
};
