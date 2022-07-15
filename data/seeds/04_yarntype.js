exports.seed = async function(knex) {
  await knex('yarntype').insert([
    { id: '1', name: 'mandala', brand: 'lion brand', yards: 590, meters: 540, grams: 150, ounces: 5.3, cyc_weight_category: '3 - Light, DK, Light Worsted', notes: 'a yarn full of joy' },
    { id: '2', name: 'oh baby organic', brand: 'lion brand', yards: 180, meters: 165, grams: 50, ounces: 1.75, cyc_weight_category: '2 - Fine, Sport, Baby', notes: 'good for shirts' },
    { id: '3', name: 'truboo', brand: 'lion brand', yards: 241, meters: 220, grams: 100, ounces: 3.5, cyc_weight_category: '3 - Light, DK, Light Worsted', notes: 'super slippery and very soft' },
    { id: '4', name: 'value', brand: 'big twist', yards: 380, meters: 347, grams: 170, ounces: 6, cyc_weight_category: '4 - Medium, Worsted, Aran', notes: 'great for amigurumi' },
  ])
};
