# si-prefixer
> Format numbers with SI prefixes

## Installation
    npm install si-prefixer

## Usage
    const prefixer = require('si-prefixer')
    prefixer(6300) // returns 6.3 k
    prefixer(6300, 'H/s') // returns 6.3 kH/s
    prefixer(8522, 'H/s') // returns 8.522 kH/s
    prefixer(8522, 'H/s', 2) // returns 8.5 kH/s