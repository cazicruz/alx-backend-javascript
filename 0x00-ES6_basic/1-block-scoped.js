#!/bin/js

export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;
/* converted the var declerations to let */

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
