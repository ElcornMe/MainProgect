const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(user_Id) => "Authorizations"
 * addColumn(userId) => "Orders"
 *
 */

const info = {
  revision: 8,
  name: "change 1",
  created: "2022-10-23T08:27:25.427Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["Authorizations", "user_Id", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "Orders",
      "userId",
      {
        type: Sequelize.INTEGER,
        field: "userId",
        onUpdate: "NO ACTION",
        onDelete: "CASCADE",
        references: { model: "Users", key: "id" },
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["Orders", "userId", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "Authorizations",
      "user_Id",
      {
        type: Sequelize.INTEGER,
        field: "user_Id",
        onUpdate: "NO ACTION",
        onDelete: "CASCADE",
        references: { model: "Users", key: "id" },
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
