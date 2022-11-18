// Makes an async request for data

const services = [
  {name: 'a', price: 1, content: 'one'},
  {name: 'b', price: 2, content: 'two'},
];

export function getServicesAsync(url = process.env.REACT_APP_SERVICE_URL) {
  return new Promise((resolve) => resolve({ data: services }));
};

export function getServices(url = process.env.REACT_APP_SERVICE_URL) {
  return services;
};
