/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { LazyComponent, Thenable } from 'shared/ReactLazyComponent';

import { REACT_LAZY_TYPE } from 'shared/ReactSymbols';

export function lazy<T, R>(ctor: () => Thenable<T, R>): LazyComponent<T> {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    // 记录Thenable状态 pending状态-1
    _status: -1,
    _result: null,
  };
}
