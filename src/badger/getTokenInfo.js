import SLPSDK from "slp-sdk";
import util from "util";
import getSlpInstance from './getSlpInstance'

const NETWORK = process.env.NETWORK

util.inspect.defaultOptions = { depth: 1 }

const SLP = getSlpInstance(NETWORK);

export const getTokenInfo = async (tokenId) => {
    try {
        return await SLP.Utils.list(tokenId);
    } catch (error) {
        console.error(error);
    }
};