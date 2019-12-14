/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
export abstract class Unit {
    public value: number;
    protected converters: {[key: string]: () => Unit} = {};

    constructor(value: number) {
        this.value = value;
    }

    get to(): any {
        for (const converter of Object.keys(this.converters)) {
            this.converters[converter] = this.converters[converter].bind(this, this.value);
        }

        return this.converters;
    }
}
