// https://github.com/ungap/structured-clone
import structuredClone from "@ungap/structured-clone";

if (!("structuredClone" in globalThis)) {
    globalThis.structuredClone = structuredClone as any;
}
