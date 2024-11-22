import { DataTypes, type Sequelize, Model, Optional } from 'sequelize';

interface EventAttributes {
  id: number;
  planner_Id: string;
  customer_Id: string;
  title: string;
  description: string;
  location: string;
  start_date: Date
  budget: number;
}

interface EventCreationAttributes extends Optional<EventAttributes, 'id'> {}

export class Event
  extends Model<EventAttributes, EventCreationAttributes>
//   extends Model<EventAttributes>
  implements EventAttributes
{
  public id!: number;
  public planner_Id!: string; 
  public customer_Id!: string; // TODO: Look into making this optional 
  public title!: string;
  public description!: string;
  public location!: string;
  public start_date!: Date;
  public budget!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

//   // Hash the password before saving the user
//   public async setPassword(password: string) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(password, saltRounds);
//   }
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
          type: DataTypes.STRING,
          allowNull: false,
        },
        customer_Id: {
          type: DataTypes.STRING,
          allowNull: false,
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
            type: DataTypes.STRING,
            allowNull: false,
        }
      },
      {
        sequelize,
        tableName: 'events',
        timestamps: false,
        underscored: true,
        freezeTableName: true,
      }
    );
  
    return Event;
  }
  