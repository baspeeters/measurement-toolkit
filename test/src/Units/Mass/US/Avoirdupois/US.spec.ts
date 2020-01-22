/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Dram} from "../../../../../../src/Units/Mass/US/Avoirdupois/Dram";
import {Grain} from "../../../../../../src/Units/Mass/US/Avoirdupois/Grain";
import {Hundredweight} from "../../../../../../src/Units/Mass/US/Avoirdupois/Hundredweight";
import {Ounce} from "../../../../../../src/Units/Mass/US/Avoirdupois/Ounce";
import {Pound} from "../../../../../../src/Units/Mass/US/Avoirdupois/Pound";
import {Quarter} from "../../../../../../src/Units/Mass/US/Avoirdupois/Quarter";
import {Ton} from "../../../../../../src/Units/Mass/US/Avoirdupois/Ton";
import {UsDerivedUnit} from "../../../../../../src/Units/Mass/US/UsDerivedUnit";

describe("US Customary System for Mass (Avoirdupois)", () => {
    [
        [new Grain(1), "Milligram", "64.7989100000000"],
        [new Dram(1), "Gram", "1.7718451953125"],
        [new Ounce(1), "Gram", "28.3495231250000"],
        [new Quarter(1), "Kilogram", "11.3398092500000"],
        [new Hundredweight(1), "Kilogram", "45.3592370000000"],
        [new Ton(1), "Kilogram", "907.1847400000000"],
    ].map((data: any) => {
        it(`should implement ${data[0].constructor.name}`, () => {
            const fromUnit = data[0];
            const toClass = data[1];
            const toValue = data[2];

            expect(fromUnit).to.be.an.instanceOf(UsDerivedUnit);
            expect(fromUnit.to).to.respondTo(toClass);

            ["Dram", "Grain", "Hundredweight", "Ounce", "Pound", "Quarter", "Ton"].map((otherUnit: string) => {
                expect(fromUnit.to).to.respondTo(otherUnit);
            });

            const conversion = fromUnit.to[toClass]();

            expect(conversion.constructor.name).to.equal(toClass);
            expect(conversion.value.toFixed(13)).to.equal(conversion.value.toFixed(13));
            expect(conversion.value.toFixed(13)).to.equal(toValue);

            expect(conversion.to[fromUnit.constructor.name]().value.toFixed(13)).to.equal("1.0000000000000");
        });
    });
});
