#!/usr/bin/env ts-node-esm
import meow from 'meow';

import { genbacat } from './assets/genbacat.js'

const cli = meow(`
    Usage
        $ genbacat
`, {
    importMeta: import.meta,
})

console.log(cli.input)

console.log(genbacat)