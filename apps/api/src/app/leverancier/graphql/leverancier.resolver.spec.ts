import { Test } from '@nestjs/testing';
import { LeverancierResolver } from './leverancier.resolver';
import { LeverancierService } from '../leverancier.service';
import { MOCK_LEVERANCIER_ENTITY } from '../leverancier.entity-mock';
import { Leverancier } from './leverancier.type';
import { EntityNotFoundException } from '../../exceptions/entity-not-found.exception';
import { LeverancierModule } from '../leverancier.module';
import { LeverancierRepository } from '../leverancier.repository';
import { LeverancierEntity } from '../leverancier.entity';

describe('LeverancierResolver', () => {
  /**
   * Resolver + dependencies used in this test.
   */
  let leverancierResolver: LeverancierResolver;
  let leverancierService: LeverancierService;

  beforeEach(async () => {
    /**
     * This unit test is limited to the LeverancierModule.
     */
    const module = await Test.createTestingModule({
      imports: [LeverancierModule]
    })
      /**
       * The repositories of the LeverancierModule need to be overridden because
       * they will try to resolve TypeORM related dependencies which are out of
       * scope in service tests.
       */
      .overrideProvider(LeverancierRepository)
      /**
       * LeverancierRepository is instantiated without dependencies so that it
       * will not try to resolve TypeORM related dependencies.
       */
      .useValue(new LeverancierRepository())
      .compile();

    /**
     * Test subject
     */
    leverancierResolver = module.get(LeverancierResolver);

    /**
     * The leverancierService is injected to gain control over the data returned
     * to the resolver.
     */
    leverancierService = module.get(LeverancierService);
  });

  describe('leverancier', () => {
    /**
     * We take control over what the leverancierService will return to the
     * resolver so that we can easily test all logic in the resolver.
     */
    const mockServiceGetById = (
      data: LeverancierEntity | undefined | EntityNotFoundException,
      successful = true
    ) =>
      jest
        .spyOn(leverancierService, 'getById')
        .mockImplementation(() =>
          successful
            ? Promise.resolve(data as LeverancierEntity | undefined)
            : Promise.reject(data as EntityNotFoundException)
        );

    it('should return a Leverancier when a LeverancierEntity is found', async () => {
      const serviceFindOneSpy = mockServiceGetById(MOCK_LEVERANCIER_ENTITY);

      expect(
        (await leverancierResolver.leverancier(1)) instanceof Leverancier
      ).toBeTruthy();

      expect(serviceFindOneSpy).toHaveBeenCalledTimes(1);
    });

    it('should return a LeverancierNotFound when a LeverancierEntity is not found', async () => {
      /**
       * We override the method called by the resolver and force it to throw
       * an EntityNotFoundException.
       */
      const serviceFindOneSpy = mockServiceGetById(
        new EntityNotFoundException('Leverancier', 1),
        false
      );

      expect(await leverancierResolver.leverancier(1)).toEqual({
        id: 1,
        reason: 'Leverancier does not exist.'
      });

      expect(serviceFindOneSpy).toHaveBeenCalledTimes(1);
    });
  });
});
