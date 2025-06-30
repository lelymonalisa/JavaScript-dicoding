import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum should return correct result with positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('sum should return correct result with negative numbers', () => {
  assert.strictEqual(sum(-2, -3), -5);
});

test('sum should return correct result with zero', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('sum should return correct result with positive and negative number', () => {
  assert.strictEqual(sum(7, -2), 5);
  assert.strictEqual(sum(-7, 2), -5);
});