import { Condition, ConditionItem, LogicOperator } from '@src/Condition';
import { Game } from '@src/Game';
import { TeamNormal } from '@src/Team';

import { BattleBattle } from './BattleBattle';
import { BattleConfiguration } from './BattleConfiguration';

/**
 * 战斗中心
 */
export class BattleCenter {
  battles: Array<BattleConfiguration>;
  battlesMap: Map<string, BattleConfiguration>;
  private game: Game;

  constructor(game: Game) {
    this.game = game;
    this.battles = [];
    this.battlesMap = new Map<string, BattleConfiguration>();
  }

  /**
   * 载入战斗配置
   * @param battles 咱都配置数组
   */
  loadConfiguration(battles: Array<BattleConfiguration>): void {
    for (const eachBattle of battles) {
      this.battles.push(eachBattle);
      this.battlesMap.set(eachBattle.id, eachBattle);
    }
  }

  generateBattle(id: string, team?: TeamNormal): BattleBattle {
    const game = this.game;
    const battleConfiguration = this.battlesMap.get(id);
    if (battleConfiguration === undefined) {
      throw new Error(`id为[${id}]的战斗配置不存在`);
    }

    const conditionItemKillJCYY: ConditionItem<BattleBattle> = new ConditionItem<BattleBattle>({
      testFunction: (battle: BattleBattle): boolean => {
        return !(battle.characters.find((eachCharacter) => eachCharacter.id === 'Enemy0001')?.isAlive ?? true);
      },
      description: '击杀[今川义元]',
    });
    const conditionItemKillAll: ConditionItem<BattleBattle> = new ConditionItem<BattleBattle>({
      testFunction: (battle: BattleBattle): boolean => {
        return !battle.factions
          .filter((eachFaction) => eachFaction !== battle.factions[0])
          .some((eachFaction) => eachFaction.isAlive);
      },
      description: '击杀所有敌人',
    });

    const conditionItemNobuAlive: ConditionItem<BattleBattle> = new ConditionItem<BattleBattle>({
      testFunction: (battle: BattleBattle): boolean => {
        return battle.characters.find((eachCharacter) => eachCharacter.id === 'C0001')?.isAlive ?? true;
      },
      description: '[织田信长]存活',
    });

    const conditionItemRound5: ConditionItem<BattleBattle> = new ConditionItem<BattleBattle>({
      testFunction: (battle: BattleBattle): boolean => {
        return battle.battleActionQueue.roundCount > 5;
      },
      description: '坚持5个回合',
    });

    const successCondition = new Condition({
      logicOperator: LogicOperator.Or,
      conditionItems: [
        conditionItemKillJCYY,
        conditionItemKillAll,
        // new Condition({
        //     logicOperator: LogicOperator.And,
        //     conditionItems: [conditionItemNobuAlive, conditionItemRound5],
        // }),
      ],
    });

    const battle = new BattleBattle(
      battleConfiguration,
      game,
      team ??
        new TeamNormal(
          [
            game.characterCenter.getCharacter('C0001'),
            game.characterCenter.getCharacter('C0002'),
            game.characterCenter.getCharacter('C0003'),
          ],
          game,
        ),
      successCondition,
    );
    conditionItemKillJCYY.setTestInstence(battle);
    conditionItemKillAll.setTestInstence(battle);
    conditionItemNobuAlive.setTestInstence(battle);
    conditionItemRound5.setTestInstence(battle);
    return battle;
  }

  /**
   * 绑定游戏实例
   * @param game 要绑定的游戏实例
   */
  setGame(game: Game): void {
    this.game = game;
  }
}
