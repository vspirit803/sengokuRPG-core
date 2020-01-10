import { CharacterConfiguration } from './CharacterConfiguration';
import { CharacterPropertyNormal } from './CharacterPropertyNormal';
import { UUID } from '@/Common/UUID';
import { EquipmentSlot } from './EquipmentSlot';

/**
 * 角色类(平常状态)
 */
export class CharacterNormal extends CharacterConfiguration implements UUID {
    level: number;
    uuid: symbol;
    properties: { [propName: string]: CharacterPropertyNormal };
    equipmentSlots: Array<EquipmentSlot>;

    constructor({
        character = new CharacterConfiguration(),
        level = 0,
    }: { character?: CharacterConfiguration; level?: number } = {}) {
        super(character);
        this.uuid = Symbol('CharacterNormal');
        this.properties = {};
        for (const eachPropName in character.properties) {
            const eachProperty = character.properties[eachPropName];
            this.properties[eachPropName] = new CharacterPropertyNormal({ character: this, property: eachProperty });
        }
        this.equipmentSlots = [];
        this.level = level;
    }
}
