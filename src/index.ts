#!/usr/bin/env node
import meow from 'meow';

const s = 'hogehoge';

console.log(s)

const cli = meow(`
    Usage
        $ genbacat
`, {
    importMeta: import.meta,
})

console.log(cli.input)
