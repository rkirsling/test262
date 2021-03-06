// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.3-1-s
description: Strict Mode - octal extension (010) is forbidden in strict mode
flags: [onlyStrict]
---*/

var err = null;

try {
  eval("var _7_8_3_1 = 010;");
} catch (e) {
  err = e;
}

assert(err instanceof SyntaxError);
assert.sameValue(typeof _7_8_3_1, "undefined");
