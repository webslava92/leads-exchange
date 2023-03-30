import {
  Table,
  Column,
  Model,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  // Unique,
  // AllowNull,
} from 'sequelize-typescript';
import { Upload } from 'src/upload/upload.schema';

@Table({
  timestamps: true,
})
export class Lead extends Model {
  @BelongsTo(() => Upload)
  upload: Upload;

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
  firstName: string;

  @Column
  // @AllowNull
  lastName: string;

  @Column
  // @Unique
  // @AllowNull
  phone: string;

  @Column
  // @Unique
  // @AllowNull
  email: string;

  @ForeignKey(() => Upload)
  @Column
  // @AllowNull
  uploadId: number;
}
