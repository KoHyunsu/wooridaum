module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    admin: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false,
      comment: 'id'
    },
    pw: {
      type: DataTypes.STRING(40),
      allowNull: false,
      comment: '비밀번호'
    },
    auth: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: '권한',
      defaultValue: 0,
    }
  }, {
    tableName: 'user',
    comment: '유저'
  });
  return user;
};
