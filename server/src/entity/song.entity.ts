import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Song extends BaseEntity {

  @PrimaryColumn({
    type: 'int',
    comment: 'mid, music id.'
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
  artist: string;

  @Column({
    type: 'char',
    length: 64,
    nullable: false
  })
  album: string;

  @Column('int')
  time: number;

}

export default Song;
