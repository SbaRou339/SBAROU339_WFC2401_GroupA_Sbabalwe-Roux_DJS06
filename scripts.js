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
