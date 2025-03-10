import MurderMysteryModeStats from './MurderMysteryModeStats.js';
import { expect, expectTypeOf, test } from 'vitest';

test('MurderMystery', () => {
  const data = new MurderMysteryModeStats({ stats: 'meow' }, 'MURDER_ASSASSINS');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(MurderMysteryModeStats);
  expectTypeOf(data).toEqualTypeOf<MurderMysteryModeStats>();
  expect(data.goldPickedUp).toBeDefined();
  expect(data.goldPickedUp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.goldPickedUp).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.thrownKnifeKills).toBeDefined();
  expect(data.thrownKnifeKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.thrownKnifeKills).toEqualTypeOf<number>();
  expect(data.knifeKills).toBeDefined();
  expect(data.knifeKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.knifeKills).toEqualTypeOf<number>();
  expect(data.bowKills).toBeDefined();
  expect(data.bowKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bowKills).toEqualTypeOf<number>();
  expect(data.trapKills).toBeDefined();
  expect(data.trapKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.trapKills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.suicides).toBeDefined();
  expect(data.suicides).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.suicides).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.winsAsDetective).toBeDefined();
  expect(data.winsAsDetective).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsDetective).toEqualTypeOf<number>();
  expect(data.winsAsMurderer).toBeDefined();
  expect(data.winsAsMurderer).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsMurderer).toEqualTypeOf<number>();
  expect(data.winsAsHero).toBeDefined();
  expect(data.winsAsHero).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsHero).toEqualTypeOf<number>();
  expect(data.playedGames).toBeDefined();
  expect(data.playedGames).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.playedGames).toEqualTypeOf<number>();
});
