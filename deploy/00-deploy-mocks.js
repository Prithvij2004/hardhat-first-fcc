const { network } = require("hardhat")
const { developmentChain } = require("../helper-hardhat-config")
const { DECIMALS } = require("../helper-hardhat-config")
const { INITIAL_ANSWER } = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    // here we use network.name as helper js has names in it

    if (chainId == 31337) {
        log("Local network detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })
        log("Mock deployed!")
        log("--------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
