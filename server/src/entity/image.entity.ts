import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Image extends BaseEntity {

  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  id: number;

  @Column('text')
  link: string;

  @Column('longtext')
  image: any;

  @Column('text')
  text: string;

  @Column('bigint')
  date: number;

}
