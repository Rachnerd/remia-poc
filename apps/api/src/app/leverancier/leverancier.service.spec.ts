import { LeverancierService } from './leverancier.service';
import { LeverancierRepository } from './leverancier.repository';
import { Test } from '@nestjs/testing';
import { EntityNotFoundException } from '../exceptions/entity-not-found.exception';
import { MOCK_LEVERANCIER_ENTITY } from './leverancier.entity-mock';
import { RemiaGraphqlModule } from '../graphql.module';
import { LeverancierModule } from './leverancier.module';
import { LeverancierEntity } from './leverancier.entity';

describe('LeverancierService', () => {
  /**
   * Service + dependencies
   */
  let leverancierService: LeverancierService;
  let leverancierRepository: LeverancierRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [RemiaGraphqlModule, LeverancierModule]
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
    leverancierService = module.get(LeverancierService);

    /**
     * Dependency used by the test subject.
     */
    leverancierRepository = module.get(LeverancierRepository);
  });

  describe('getById', () => {
    /**
     * We take control over what the leverancierRepository will return to the
     * service so that we can easily test all logic in the service.
     */
    const mockRepositoryFindOne = (data: LeverancierEntity | undefined) =>
      jest
        .spyOn(leverancierRepository, 'findOne')
        .mockImplementation(() => Promise.resolve(data));

    it('should return a found Leverancier', async () => {
      /**
       * We override the method called by the service and force it to return
       * a LeverancierEntity.
       */
      const repositoryFindOneSpy = mockRepositoryFindOne(
        MOCK_LEVERANCIER_ENTITY
      );

      /**
       * Here we check if the mocked entity we configured in the repository
       * is returned by the service.
       */
      await expect(leverancierService.getById(1)).resolves.toEqual(
        MOCK_LEVERANCIER_ENTITY
      );

      /**
       * We expect our mocked method to have been called only once.
       */
      expect(repositoryFindOneSpy).toHaveBeenCalledTimes(1);
    });

    it(`should throw an EntityNotFoundException if a Leverancier can't be found`, async () => {
      /**
       * We override the method called by the service and force it to return
       * undefined (simulate an empty database result).
       */
      const repositoryFindOneSpy = mockRepositoryFindOne(undefined);

      await expect(leverancierService.getById(1)).rejects.toThrow(
        EntityNotFoundException
      );
      expect(repositoryFindOneSpy).toHaveBeenCalledTimes(1);
    });
  });
});
