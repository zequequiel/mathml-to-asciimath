var toAsciiMath = require('..');


var testCases = [
  // mathml input, expected asciimath output
  ['<math><mn>1</mn><mo>+</mo><mn>2</mn></math>', '1 + 2'],
  ['<math><mn>1</mn><mo>-</mo><mn>2</mn></math>', '1 - 2'],
  ['<math><mn>1</mn><mo>⋅</mo><mn>2</mn></math>', '1 * 2'],
  ['<math><mn>1</mn><mo>⋆</mo><mn>2</mn></math>', '1 ** 2'],
  ['<math><mn>1</mn><mo>×</mo><mn>2</mn></math>', '1 xx 2'],
  ['<math><mn>1</mn><mo>/</mo><mn>2</mn></math>', '1 // 2'],
  ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '1 / 2'],
  ['<math><mn>1</mn><mo>÷</mo><mn>2</mn></math>', '1 -: 2'],
  ['<math><mi>a</mi><mo>+</mo><mi>b</mi></math>', 'a + b'],
  ['<math><mn>1</mn><mo>+</mo><mi>b</mi></math>', '1 + b'],
  ['<math><msup><mi>a</mi><mn>2</mn></msup></math>', 'a ^ 2'],
  ['<math><msub><mi>x</mi><mn>1</mn></msub></math>', 'x _ 1'],
  ['<math><mi>a</mi><mo>+</mo><mn>3</mn><mo>=</mo><mn>4</mn></math>', 'a + 3 = 4'],
  ['<math><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>4</mn></mrow><mn>10</mn></mfrac></math>', '( 1 + 2 + 3 + 4 ) / 10'],
  ['<math><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></math>', '( x + 1 )'],
  ['<math><mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mn>4</mn></mfrac></math>', '( x + 1 ) / 4'],
  ['<math><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>4</mn></mrow><mrow><mn>10</mn><mo>+</mo><mi>a</mi><mo>+</mo><mi>b</mi></mrow></mfrac></math>', '( 1 + 2 + 3 + 4 ) / ( 10 + a + b )']
];

testCases.forEach(function(testCase) {
  var expected = testCase[1];

  exports[expected] = function(test) {
    var input = testCase[0];
    var output = toAsciiMath(input);

    test.equal(output, expected);
    test.done();
  };
});