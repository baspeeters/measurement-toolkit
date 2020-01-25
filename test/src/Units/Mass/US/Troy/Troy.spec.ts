import {expect} from "chai";
import {TroyOunce, TroyPound} from "../../../../../../src/main";

/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
describe("US Customary System for Mass (Troy)", () => {
    [
        ["TroyPound", new TroyPound(1), "Gram", "373.2417216000000"],
        ["TroyPound", new TroyPound(1), "Ounce", "13.1657142857143"],
        ["TroyPound", new TroyPound(1), "TroyOunce", "12.0000000000000"],
        ["TroyPound", new TroyPound(1), "Grain", "5760.0000000000000"],

        ["TroyOunce", new TroyOunce(1), "Gram", "31.1034768000000"],
        ["TroyOunce", new TroyOunce(1), "Ounce", "1.0971428571429"],
        ["TroyOunce", new TroyOunce(1), "Grain", "480.0000000000000"],
    ].map((data: any) => {
        const fromUnitName = data[0];
        const fromUnit = data[1];
        const toClass = data[2];
        const toValue = data[3];

        it(`should implement ${fromUnitName} => ${toClass}`, () => {
            expect(fromUnit.to).to.respondTo(toClass);

            [
                "Dram",
                "Grain",
                "Hundredweight",
                "Ounce",
                "Pound",
                "Quarter",
                "AvoirdupoisTon",
            ].map((otherUnit: string) => {
                expect(fromUnit.to).to.respondTo(otherUnit);
            });

            const conversion = fromUnit.to[toClass]();

            expect(conversion.value.toFixed(13)).to.equal(conversion.value.toFixed(13));
            expect(conversion.value.toFixed(13)).to.equal(toValue);

            expect(conversion.to[fromUnitName]().value.toFixed(13)).to.equal("1.0000000000000");
        });
    });
});
