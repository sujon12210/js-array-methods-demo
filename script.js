function run(){
  const nums = [1,2,3,4,5];
  const output = document.getElementById('output');

  const mapped = nums.map(n => n * 2);
  const filtered = nums.filter(n => n > 2);
  const reduced = nums.reduce((a,b) => a + b, 0);

  output.innerText =
    'Original: ' + JSON.stringify(nums) + '\n' +
    'Map x2: ' + JSON.stringify(mapped) + '\n' +
    'Filter >2: ' + JSON.stringify(filtered) + '\n' +
    'Reduce sum: ' + reduced;
}
