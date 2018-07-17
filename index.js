function add(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

function inc(n) {
  n+=1;
  return n;
}

function dec(n) {
  n-=1;
  return n;
}

function makeInt(n) {
  return parseInt(n,10);
}


/*
******************************


  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})
********************************
*/
