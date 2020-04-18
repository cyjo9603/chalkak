/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

export const DEFAULT_USER_ATTRIBUTES = ['id', 'familyName', 'firstName', 'profilePhoto'];
export const FULL_USER_ATTRIBUTES = [
  'id',
  'familyName',
  'firstName',
  'userId',
  'birth',
  'gender',
  'phone',
  'phone',
  'mail',
  'profilePhoto',
];

class User extends Model {
  public readonly id!: number;
  public familyName!: string;
  public firstName!: string;
  public userId!: string;
  public password!: string;
  public birth!: string;
  public gender!: string;
  public phone!: string;
  public mail!: string;
  public profilePhoto?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    familyName: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    birth: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    profilePhoto: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);

export const associate = (db: dbType) => {
  db.User.hasMany(db.Post, { as: 'Posts' });
  db.User.hasMany(db.Comment);
  db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
  db.User.belongsToMany(db.User, { through: 'Friend', as: 'Friends' });
};

export default User;
