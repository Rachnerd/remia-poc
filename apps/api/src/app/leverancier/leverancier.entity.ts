import { TaalCode, ValutaCode } from '../../../graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
