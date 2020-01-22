/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Megagram} from "../../src/Units/Mass/SI/Megagram";
import {Ounce} from "../../src/Units/Mass/US/Avoirdupois/Ounce";

describe("Unit", () => {
    it("should add up another unit", () => {
        const tons = new Megagram(5.2);
        const ounces = new Ounce(50000);

        const result = tons.subtract(ounces);

        expect(result).to.be.an.instanceOf(Megagram);
        expect(result.value.toFixed(9)).to.equal("3.782523844");
    });

    it("should subtract another unit", () => {
        const tons = new Megagram(5.2);
        const ounces = new Ounce(50000);

        const result = tons.add(ounces);

        expect(result).to.be.an.instanceOf(Megagram);
        expect(result.value.toFixed(9)).to.equal("6.617476156");
    });

    it("should get multiplied by another unit", () => {
        const tons = new Megagram(5.2);
        const ounces = new Ounce(50000);

        const result = tons.multiply(ounces);

        expect(result).to.be.an.instanceOf(Megagram);
        expect(result.value.toFixed(9)).to.equal("7.370876013");
    });

    it("should divide another unit", () => {
        const tons = new Megagram(5.2);
        const ounces = new Ounce(50000);

        const result = tons.divideBy(ounces);

        expect(result).to.be.an.instanceOf(Megagram);
        expect(result.value.toFixed(9)).to.equal("3.668492043");
    });

    it("should get divided by another unit", () => {
        const tons = new Megagram(5.2);
        const ounces = new Ounce(50000);

        const result = tons.dividedBy(ounces);

        expect(result).to.be.an.instanceOf(Megagram);
        expect(result.value.toFixed(9)).to.equal("0.272591569");
    });

    it("should calculate its percentage of another unit", () => {
        const tons = new Megagram(5.2);
        const ounces = new Ounce(50000);

        const result = tons.percentageOf(ounces);

        expect(result).to.be.an.instanceOf(Megagram);
        expect(result.value.toFixed(9)).to.equal("366.849204276");
    });

    it("should calculate another unit's percentage of itself", () => {
        const tons = new Megagram(5.2);
        const ounces = new Ounce(50000);

        const result = tons.percentageOfThis(ounces);

        expect(result).to.be.an.instanceOf(Megagram);
        expect(result.value.toFixed(9)).to.equal("27.259156851");
    });
});
