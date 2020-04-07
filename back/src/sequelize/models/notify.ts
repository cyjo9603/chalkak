/* eslint-disable lines-between-class-members */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

class Notify extends Model {
  public readonly id!: number;
  public notifyType!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Notify.init(
  {
    notifyType: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Notify',
    tableName: 'notify',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);

export const associate = (db: dbType) => {
  db.Notify.belongsTo(db.User, { as: 'target' });
  db.Notify.belongsTo(db.User, { as: 'requetor' });
};

export default Notify;
