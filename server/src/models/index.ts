import sequelize from '../config/connection.js';

import { EventFactory } from './event.js';
import { UserFactory } from './user.js';

const Event = EventFactory(sequelize);
const User = UserFactory(sequelize);

Event.belongsTo(User, { foreignKey: 'planner_Id', as: 'planner' });
Event.belongsTo(User, { foreignKey: 'customer_Id', as: 'customer' });
User.hasMany(Event, { foreignKey: 'planner_Id', as: 'plannedEvents' });
User.hasMany(Event, { foreignKey: 'customer_Id', as: 'customerEvents' });

export { sequelize, User, Event };
