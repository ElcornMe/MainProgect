const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * renameColumn(role) => "Users"
 *
 */

const info = {
  revision: 3,
  name: "changeUserTable",
  created: "2022-10-03T08:37:53.923Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "renameColumn",
    params: ["Users", "role", "city"],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "renameColumn",
    params: ["Users", "city", "role"],
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
