import {
  Table,
  Column,
  Model,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  HasMany,
  // AllowNull,
} from 'sequelize-typescript';
import { Lead } from 'src/lead/lead.schema';

@Table({
  timestamps: true,
})
export class Upload extends Model {
  @HasMany(() => Lead)
  upload: Lead[];

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  // @AllowNull
  numberOfEntries: number;
}
