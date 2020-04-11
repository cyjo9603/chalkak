/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

export const DEFAULT_IMAGE_ATTRIBUTES = ['id', 'src'];

class Image extends Model {
  public readonly id!: number;
  public src!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Image.init(
  {
    src: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Image',
    tableName: 'image',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);

export const associate = (db: dbType) => {
  db.Image.belongsTo(db.Post);
};

export default Image;
