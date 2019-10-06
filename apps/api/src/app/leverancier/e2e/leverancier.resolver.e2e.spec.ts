import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { GraphqlModule } from '../../graphql.module';
import { LeverancierModule } from '../leverancier.module';
import { LeverancierRepository } from '../leverancier.repository';
import { TestDatabaseModule } from '../../../test/test-database.module';
import {
  MOCK_LEVERANCIER,
  MOCK_LEVERANCIER_ENTITY,
  mockLeverancierEntity
} from '../leverancier.entity-mock';
import {
  createQueryTester,
  QueryTester
} from '../../../test/test-graphql.sever';
import { Leverancier } from '../graphql/leverancier.type';
import { LeverancierNotFound } from '../graphql/leverancier-not-found.type';

describe('Leverancier e2e test', () => {
  /**
   * App + dependencies used in this test.
   */
  let app: INestApplication;
  let leverancierRepository: LeverancierRepository;
  /**
   * Utility to help sending queries to the server.
   */
  let testQuery: QueryTester;

  /**
   * Runs once before all tests within this "describe" scope.
   */
  beforeAll(async () => {
    /**
     * For this e2e test a test database is used together with the GraphQL functionality.
     */
    const module = await Test.createTestingModule({
      imports: [GraphqlModule, TestDatabaseModule, LeverancierModule]
    }).compile();

    /**
     * The leverancierRepository is injected to gain control over the data
     * in the database.
     */
    leverancierRepository = module.get(LeverancierRepository);

    /**
     * Create the app based on the module configuration.
     */
    app = module.createNestApplication();
    /**
     * Boot up the app.
     */
    await app.init();
    /**
     * App is passed to a custom test utility that reduces boilerplate code
     * for sending a query.
     */
    testQuery = createQueryTester(app);
  });

  /**
   * Runs once after all tests within this describe scope.
   */
  afterAll(async () => {
    /**
     * The app needs to be closed so that connections don't stay open.
     */
    await app.close();
  });

  /**
   * Runs before each test.
   */
  beforeEach(async () => {
    /**
     * The leverancier table gets cleared so that all tests have an empty table
     * to work with.
     */
    await leverancierRepository.clear();
  });

  const QUERY_ALL = `
    {
      leverancier(id: 1) {
        __typename
        ... on Leverancier {
          id
          naam
          plaats
          postcode
          taalcode
          telefoon
          valutacode
        }
        ... on LeverancierNotFound {
          id
          reason
        }
      }
    }
  `;

  it('should return a Leverancier if a Leverancier is found', async () => {
    /**
     * The table gets populated with one LeverancierEntity.
     */
    await leverancierRepository.save(MOCK_LEVERANCIER_ENTITY);

    /**
     * Query is sent to the server and is expected to successfully (200) return a Leverancier.
     */
    await testQuery(QUERY_ALL)
      .expect(200)
      .expect({
        data: {
          leverancier: {
            __typename: 'Leverancier',
            ...MOCK_LEVERANCIER
          } as Leverancier
        }
      });
  });

  it('should return a LeverancierNotFound if a Leverancier is not found', async () => {
    /**
     * No table setup is needed in this scenario (empty database suffices).
     */
    /**
     * Query is sent to the server and is expected to successfully (200) return a LeverancierNotFound.
     */
    await testQuery(QUERY_ALL)
      .expect(200)
      .expect({
        data: {
          leverancier: {
            __typename: 'LeverancierNotFound',
            id: 1,
            reason: 'Leverancier does not exist.'
          } as LeverancierNotFound
        }
      });
  });

  it('should not break if an unknown TaalCode is returned by the database', async () => {
    /**
     * Store a leverancier that contains data not supported by the schema.
     */
    const leverancierWithUnsupportedTaalCode = mockLeverancierEntity({
      taalcode: '123' as any
    });
    await leverancierRepository.save(leverancierWithUnsupportedTaalCode);

    /**
     * Query is sent to the server and is expected to successfully (200) return a Leverancier
     * with taalcode "UNKNOWN".
     */
    await testQuery(QUERY_ALL)
      .expect(200)
      .expect({
        data: {
          leverancier: {
            __typename: 'Leverancier',
            ...MOCK_LEVERANCIER,
            taalcode: 'UNKNOWN'
          } as Leverancier
        }
      });
  });

  it('should not break if an unknown ValutaCode is returned by the database', async () => {
    /**
     * Store a leverancier that contains data not supported by the schema.
     */
    const leverancierWithUnsupportedValutaCode = mockLeverancierEntity({
      valutacode: '123' as any
    });
    await leverancierRepository.save(leverancierWithUnsupportedValutaCode);

    /**
     * Query is sent to the server and is expected to successfully (200) return a Leverancier
     * with valutacode "UNKNOWN".
     */
    await testQuery(QUERY_ALL)
      .expect(200)
      .expect({
        data: {
          leverancier: {
            __typename: 'Leverancier',
            ...MOCK_LEVERANCIER,
            valutacode: 'UNKNOWN'
          }
        }
      });
  });
});
