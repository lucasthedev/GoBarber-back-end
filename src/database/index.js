import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import File from '../app/models/File';

const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.conncetion = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.conncetion))
      .map(model => model.associate && model.associate(this.conncetion.models));
  }
}

export default new Database();
