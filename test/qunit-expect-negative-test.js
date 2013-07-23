console.log("Running child tests");

test('expect fails', function (){
  expect(25);
  ok(true);
});

test('expect fails async', function (){
  expect(1);
  ok(true);
  setTimeout(function (){
    ok(true);
    start();
  }, 1);
  stop();
});

test('expect fails using arguments', 25, function (){
  ok(true);
});

test('expect fails async using arguments', 1, function (){
  ok(true);
  setTimeout(function (){
    ok(true);
    start();
  }, 1);
  stop();
});

