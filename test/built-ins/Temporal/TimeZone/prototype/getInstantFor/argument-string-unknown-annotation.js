// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.prototype.getinstantfor
description: Various forms of unknown annotation
features: [Temporal]
---*/

const tests = [
  ["1976-11-18T15:23[foo=bar]", "alone"],
  ["1976-11-18T15:23[UTC][foo=bar]", "with time zone"],
  ["1976-11-18T15:23[u-ca=iso8601][foo=bar]", "with calendar"],
  ["1976-11-18T15:23[UTC][foo=bar][u-ca=iso8601]", "with time zone and calendar"],
  ["1976-11-18T15:23[foo=bar][_foo-bar0=Ignore-This-999999999999]", "with another unknown annotation"],
];

const instance = new Temporal.TimeZone("UTC");

tests.forEach(([arg, description]) => {
  const result = instance.getInstantFor(arg);

  assert.sameValue(
    result.epochNanoseconds,
    217_178_580_000_000_000n,
    `unknown annotation (${description})`
  );
});
