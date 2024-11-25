import { DataTypes, type Sequelize, Model, Optional } from 'sequelize';

interface EventAttributes {
  id: number;
  planner_Id: number;
  customer_Id?: number | null;
  title: string;
  description: string;
  location: string;
  start_date: Date;
  budget: number;
}

interface EventCreationAttributes extends Optional<EventAttributes, 'id'> {}

export class Event
  extends Model<EventAttributes, EventCreationAttributes>
  implements EventAttributes
{
  public id!: number;
  public planner_Id!: number;
  public customer_Id!: number | null;
  public title!: string;
  public description!: string;
  public location!: string;
  public start_date!: Date;
  public budget!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Optional: Add Sequelize associations here
  public static associate(models: any) {
    Event.belongsTo(models.User, { foreignKey: 'planner_Id', as: 'planner' });
    Event.belongsTo(models.User, { foreignKey: 'customer_Id', as: 'customer' });
  }
}

export function EventFactory(sequelize: Sequelize): typeof Event {
  Event.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      planner_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      customer_Id: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'SET NULL', 
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'events',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Event;
}
