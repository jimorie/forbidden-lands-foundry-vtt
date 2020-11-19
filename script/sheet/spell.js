import { ForbiddenLandsItemSheet } from "./item.js";

export class ForbiddenLandsSpellSheet extends ForbiddenLandsItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/forbidden-lands/model/spell.html",
        });
    }

    async getMagicTalents() {
        let pack = game.packs.get("world.magictalents");
        if (pack) {
            let magicTalents = await pack.getContent();
            return magicTalents.map(item => item.name);
        }
        return [];
    }

    async _renderInner(data, options) {
        data.data.magicTalents = await this.getMagicTalents();
        return super._renderInner(data, options);
    }
}
