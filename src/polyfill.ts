import 'core-js/full';
import 'zone.js';
// https://github.com/ungap/structured-clone
import structuredClone from "@ungap/structured-clone";

if (!("structuredClone" in globalThis)) {
    globalThis.structuredClone = structuredClone as any;
}
