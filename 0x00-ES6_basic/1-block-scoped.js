#!/bin/js

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

	/* converted the var declerations to let */

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
