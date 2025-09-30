import { throwSomething } from "./inner-module.js";

function log(...msg: any[]) {
  const p = document.createElement('pre');
  p.textContent = msg.join(' ');
  document.body.appendChild(p);
}

function main() {
  try {
    throwSomething();
  } catch (e: unknown) {
    const asError = e as Error;
    log(asError.message ?? e);
    if (asError.stack) {
      log(asError.stack);
    }
    console.error(e);
  }
}
main();
