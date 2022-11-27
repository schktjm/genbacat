#!/usr/bin/env ts-node-esm
import meow from 'meow';

import { getGenbacat } from './assets/genbacat.js'

const cli = meow(`
    Usage
        $ genbacat
`, {
    importMeta: import.meta,
})

console.log(getGenbacat(cli.input.join(' ')))
