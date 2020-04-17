/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import type { RefObject } from 'shared/ReactTypes';

// an immutable object with a single mutable value
// TODO
export function createRef(): RefObject {
  // 创建一个current属性的对象并返回
  const refObject = {
    current: null,
  };
  if (__DEV__) {
    Object.seal(refObject);
  }
  return refObject;
}
