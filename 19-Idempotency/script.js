// Idempotency
//  it means is that the function can be repeated many times and you'll still end up with the same result.

function notGood() {
  return Math.random();
  // new Date();
}

function good() {
  return 5;
}

Math.abs(Math.abs(10));
