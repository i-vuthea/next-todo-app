import { TABLE_TODO, SEQUELIZE } from '@databases/db';
import { DataTypes } from 'sequelize';


const Todo = SEQUELIZE.define(TABLE_TODO, {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE(3),
        defaultValue: SEQUELIZE.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: false
});

export default Todo