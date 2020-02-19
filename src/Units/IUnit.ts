/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
export interface IUnit {
    to: { [key: string]: () => IUnit };

    add(unit: IUnit): this;

    divideBy(unit: IUnit): this;

    multiply(unit: IUnit): this;

    percentageOf(unit: IUnit): this;

    subtract(unit: IUnit): this;
}
