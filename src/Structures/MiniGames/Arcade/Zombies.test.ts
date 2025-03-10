import Zombies from './Zombies.js';
import ZombiesStats from './ZombiesStats.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Zombies', () => {
  const data = new Zombies({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Zombies);
  expectTypeOf(data).toEqualTypeOf<Zombies>();
  expect(data.overall).toBeDefined();
  expectTypeOf(data.overall).toEqualTypeOf<ZombiesStats>();
  expect(data.deadEnd).toBeDefined();
  expectTypeOf(data.deadEnd).toEqualTypeOf<ZombiesStats>();
  expect(data.badBlood).toBeDefined();
  expectTypeOf(data.badBlood).toEqualTypeOf<ZombiesStats>();
  expect(data.alienArcadium).toBeDefined();
  expectTypeOf(data.alienArcadium).toEqualTypeOf<ZombiesStats>();
  expect(data.prison).toBeDefined();
  expectTypeOf(data.prison).toEqualTypeOf<ZombiesStats>();
  expect(data.killsByZombie).toBeDefined();
  expectTypeOf(data.killsByZombie).toEqualTypeOf<Record<string, number>>();
  expect(data.bulletsHit).toBeDefined();
  expect(data.bulletsHit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bulletsHit).toEqualTypeOf<number>();
  expect(data.bulletsShot).toBeDefined();
  expect(data.bulletsShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bulletsShot).toEqualTypeOf<number>();
  expect(data.gunAccuracy).toBeDefined();
  expect(data.gunAccuracy).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunAccuracy).toEqualTypeOf<number>();
  expect(data.headshots).toBeDefined();
  expect(data.headshots).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.headshots).toEqualTypeOf<number>();
  expect(data.headshotAccuracy).toBeDefined();
  expect(data.headshotAccuracy).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.headshotAccuracy).toEqualTypeOf<number>();
});
