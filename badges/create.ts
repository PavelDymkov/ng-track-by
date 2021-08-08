import { Format, makeBadge } from "badge-maker";
import { writeFileSync as write } from "fs";
import { join } from "path";

clean();

createBadge("build", () => ({
    label: "build",
    message: "passing",
}));

createBadge("tests", () => ({
    label: "tests",
    message: "passing",
}));

createBadge("license", () => {
    const { license } = require("../package/package");

    return {
        label: "license",
        message: String(license),
        color: "green",
    };
});

function createBadge(name: string, getFormat: () => Format): void {
    const filePath = join(__dirname, name + ".svg");
    const svg = makeBadge(getFormat()) + "\n";

    write(filePath, svg);
}

function clean(): void {
    const rm = require("rimraf").sync as (glob: string) => void;
    const glob = join(__dirname, "*.svg");

    rm(glob);
}
