import { CharacterBattle } from '@src/Character';
import { Event, TriggerTiming } from '@src/EventCenter';
import { EventDataDamaging } from '@src/EventCenter/EventData';
import { Skill } from '@src/Skill';

export const skillStore: {
  [skillId: string]: (skill: Skill, source: CharacterBattle, target: CharacterBattle) => Promise<void>;
} = {
  S00000: async function (skill: Skill, source: CharacterBattle, target: CharacterBattle) {
    const battle = source.battle!;
    const ratio = skill.data.ratio;
    const isCrit = Math.random() < source.properties.critRate.battleValue;
    const damage = Math.round(
      source.properties.atk.battleValue * (isCrit ? source.properties.critMultiply.battleValue : 1) * ratio,
    );
    await battle.eventCenter.trigger(
      new Event({
        type: TriggerTiming.Damaging,
        source,
        data: { source, target, damage, isCrit },
      }),
    );
  },
  S00001: async function (skill: Skill, source: CharacterBattle, target: CharacterBattle) {
    const battle = source.battle!;
    const ratio = skill.data.ratio;
    const isCrit = Math.random() < source.properties.critRate.battleValue;
    const damage = Math.round(
      source.properties.atk.battleValue * (isCrit ? source.properties.critMultiply.battleValue : 1) * ratio,
    );
    await battle.eventCenter.trigger(
      new Event({
        type: TriggerTiming.Damaging,
        source,
        data: { source, target, damage, isCrit },
      }),
    );
  },
  //地狱之手 茨木大招
  S00003: async function (skill: Skill, source: CharacterBattle, target: CharacterBattle) {
    const battle = source.battle!;
    const ratio = skill.data.ratio;
    const isCrit = Math.random() < source.properties.critRate.battleValue;
    const damage = Math.round(
      source.properties.atk.battleValue * (isCrit ? source.properties.critMultiply.battleValue : 1) * ratio,
    );
    const data: EventDataDamaging = { source, target, damage, isCrit };
    await battle.eventCenter.trigger(
      new Event({
        type: TriggerTiming.Damaging,
        source,
        data,
      }),
    );
  },
  S00004: async function (skill: Skill, source: CharacterBattle, target: CharacterBattle) {
    const battle = source.battle!;
    const ratio = skill.data.ratio;
    const isCrit = Math.random() < source.properties.critRate.battleValue;
    const damage = Math.round(
      source.properties.atk.battleValue * (isCrit ? source.properties.critMultiply.battleValue : 1) * ratio,
    );
    await battle.eventCenter.trigger(
      new Event({
        type: TriggerTiming.Damaging,
        source,
        data: { source, target, damage, isCrit },
      }),
    );
  },
  S00005: async function (skill: Skill, source: CharacterBattle, target: CharacterBattle) {
    const battle = source.battle!;
    const { ratio, times } = skill.data;
    for (let i = 0; i < times; i++) {
      const isCrit = Math.random() < source.properties.critRate.battleValue;
      const damage = Math.round(
        source.properties.atk.battleValue * (isCrit ? source.properties.critMultiply.battleValue : 1) * ratio,
      );
      await battle.eventCenter.trigger(
        new Event({
          type: TriggerTiming.Damaging,
          source,
          data: { source, target, damage, isCrit },
        }),
      );
    }
  },
  S00007: async function (skill: Skill, source: CharacterBattle, target: CharacterBattle) {
    const battle = source.battle!;
    const ratio = skill.data.ratio;
    const isCrit = Math.random() < source.properties.critRate.battleValue;
    const damage = Math.round(
      source.properties.atk.battleValue * (isCrit ? source.properties.critMultiply.battleValue : 1) * ratio,
    );
    await battle.eventCenter.trigger(
      new Event({
        type: TriggerTiming.Damaging,
        source,
        data: { source, target, damage, isCrit },
      }),
    );
  },
};
