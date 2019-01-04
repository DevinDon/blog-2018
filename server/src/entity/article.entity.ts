import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Article extends BaseEntity {

  @PrimaryColumn({
    type: 'int',
    width: 11,
    nullable: false
  })
  id: number;

  @Column({
    type: 'char',
    length: 64,
    nullable: false
  })
  title: string;

  @Column({
    type: 'char',
    length: 64,
    nullable: false
  })
  author: string;

  @Column('int')
  date: number;

  @Column('text')
  summary: string;

  @Column('text')
  text: string;

  @Column('text')
  html: string;

}
