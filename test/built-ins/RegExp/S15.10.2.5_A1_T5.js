// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    An Atom followed by a Quantifier is repeated the number of times
    specified by the Quantifier
es5id: 15.10.2.5_A1_T5
description: Execute /(a*)b\1+/.exec("baaaac") and check results
---*/

var __executed = /(a*)b\1+/.exec("baaaac");

var __expected = ["b", ""];
__expected.index = 0;
__expected.input = "baaaac";

assert.sameValue(
  __executed.length,
  __expected.length,
  'The value of __executed.length is expected to equal the value of __expected.length'
);

assert.sameValue(
  __executed.index,
  __expected.index,
  'The value of __executed.index is expected to equal the value of __expected.index'
);

assert.sameValue(
  __executed.input,
  __expected.input,
  'The value of __executed.input is expected to equal the value of __expected.input'
);

for(var index=0; index<__expected.length; index++) {
  assert.sameValue(
    __executed[index],
    __expected[index],
    'The value of __executed[index] is expected to equal the value of __expected[index]'
  );
}
