import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaalCode } from './graphql/taal-code.enum';
import { ValutaCode } from './graphql/valuta-code.enum';

/**
 * This represents a table in the database.
 */
@Entity()
export class LeverancierEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  naam: string;

  @Column()
  plaats: string;

  @Column()
  postcode: string;

  @Column({ type: 'varchar' })
  taalcode: TaalCode;

  @Column()
  telefoon: string;

  @Column({ type: 'varchar' })
  valutacode: ValutaCode;
}
