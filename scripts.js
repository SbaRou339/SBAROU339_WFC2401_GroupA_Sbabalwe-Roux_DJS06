// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// ForEach Basics
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Uppercase Transformation
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// Filtering basics
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Finding 'S'
const containsS = names.map(name => name.includes('S') || name.includes('s'));
console.log(containsS);

// Creating Object Mapping
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);

// Advanced Exercises

// Log products
console.log(products.forEach(product => console.log(product.product)));

// Filter by Name length
console.log(products.filter(product => product.product.length <= 5));

// Price Manipulation
console.log(
  products
    .filter(product => product.price.trim() !== '')
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0)
);

// Concatenate Product Names
console.log(products.reduce((acc, product) => acc + product.product + ' ', '').trim());

// Find Extremes in Prices
console.log(
  products
    .filter(product => product.price.trim() !== '')
    .map(product => Number(product.price))
    .reduce((acc, price) => {
      if (price > acc.highest) acc.highest = price;
      if (price < acc.lowest) acc.lowest = price;
      return acc;
    }, { highest: -Infinity, lowest: Infinity })
    |> ({ highest, lowest }) => `Highest: ${highest}. Lowest: ${lowest}.`
);


// Object Transformation
console.log(
  Object.entries(products.reduce((acc, { product, price }) => {
    acc[product] = { name: product, cost: price };
    return acc;
  }, {}))
);


