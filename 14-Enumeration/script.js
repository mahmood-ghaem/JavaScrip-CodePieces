var Color;
(function (Color) {
  Color[(Color['Red'] = 'This is red color.')] = 'Red';
  Color[(Color['Green'] = 'This is green color.')] = 'Green';
  Color[(Color['Blue'] = 'This is blue color.')] = 'Blue';
  Color[(Color['Yellow'] = 'This is yellow color.')] = 'Yellow';
})(Color || (Color = {}));

console.log(Color.Red);
