const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "Catalogs", deps: []
 * createTable() => "Orders", deps: []
 * createTable() => "Products", deps: [Catalogs]
 * createTable() => "ProductPerOrders", deps: [Orders, Products]
 *
 */

const info = {
  revision: 1,
  name: "first",
  created: "2022-09-26T15:18:50.987Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "Catalogs",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        title: { type: Sequelize.STRING, field: "title" },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Orders",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        price: { type: Sequelize.STRING, field: "price" },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Products",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        manufacturer: { type: Sequelize.STRING, field: "manufacturer" },
        price: { type: Sequelize.INTEGER, field: "price" },
        amount: { type: Sequelize.INTEGER, field: "amount" },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        catalogId: {
          type: Sequelize.INTEGER,
          field: "catalogId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "Catalogs", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "ProductPerOrders",
      {
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        orderId: {
          type: Sequelize.INTEGER,
          field: "orderId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "Orders", key: "id" },
          primaryKey: true,
        },
        productId: {
          type: Sequelize.INTEGER,
          field: "productId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "Products", key: "id" },
          primaryKey: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["Catalogs", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Orders", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Products", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["ProductPerOrders", { transaction }],
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
