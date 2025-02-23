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
];

// 1. ForEach Basics: Log each name and province, and then log name with province.
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2. Uppercase Transformation: Use map to transform provinces to uppercase.
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. Name Lengths: Create a new array with the length of each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting: Sort the provinces alphabetically.
const sortedProvinces = provinces.slice().sort();  // Using slice to avoid mutating the original array
console.log(sortedProvinces);

// 5. Filtering Cape: Filter out provinces containing "Cape" and log the count of remaining provinces.
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// 6. Finding 'S': Create a boolean array with map and some to check if each name contains 'S'.
const containsS = names.map(name => name.includes('S')).some(result => result === true);
console.log(containsS);

// 7. Creating Object Mapping: Use reduce to map names to provinces.
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);


// ADVANCED EXERCISES
console.log({
  // 1. Log Products: Iterate over the products array, logging each product name.
  productNames: products.map(item => item.product),

  // 2. Filter by Name Length: Filter out products with names longer than 5 characters.
  shortNamedProducts: products.filter(item => item.product.length <= 5),

  // 3. Price Manipulation: Filter out products without prices, convert string prices to numbers, 
  // and calculate the total price using reduce.
  totalPrice: products
    .filter(item => typeof item.price === 'string' ? item.price.trim() !== '' : item.price !== '') // Filter out items with empty prices
    .map(item => ({ ...item, price: typeof item.price === 'string' ? Number(item.price.trim()) : item.price })) // Convert price to number
    .reduce((acc, item) => acc + item.price, 0), // Sum up the prices
// 4. Concatenate Product Names: Use reduce to concatenate all product names into a single string.
concatenatedNames: products.reduce((acc, item) => acc + item.product, ''),

// 5. Find Extremes in Prices: Identify the highest and lowest-priced items, 
// returning a string formatted as "Highest: X. Lowest: Y."
extremesInPrices: (() => {
  const validPrices = products
    .filter(item => typeof item.price === 'string' ? item.price.trim() !== '' : item.price !== '')
    .map(item => ({
      product: item.product,
      price: typeof item.price === 'string' ? Number(item.price.trim()) : item.price
    }));
    const highest = validPrices.reduce((max, item) => item.price > max.price ? item : max, validPrices[0]);
    const lowest = validPrices.reduce((min, item) => item.price < min.price ? item : min, validPrices[0]);

    return `Highest: ${highest.product} - ${highest.price}. Lowest: ${lowest.product} - ${lowest.price}.`;
  })(),

  // 6. Object Transformation: Using Object.entries and reduce, recreate the products object 
  // with keys 'name' and 'cost', maintaining their original values.
  transformedProducts: products.map(item => ({
    name: item.product,
    cost: typeof item.price === 'string' ? (item.price.trim() !== '' ? Number(item.price.trim()) : item.price) : item.price
  }))
});