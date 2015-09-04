// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-260
description: >
    Object.defineProperty - 'Attributes' is the global object that
    uses Object's [[Get]] method to access the 'set' property (8.10.5
    step 8.a)
includes: [fnGlobalObject.js]
---*/

        var obj = {};
        var data = "data";

            fnGlobalObject().set = function (value) {
                data = value;
            };

            Object.defineProperty(obj, "property", fnGlobalObject());
            obj.property = "overrideData";

assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(data, "overrideData", 'data');
