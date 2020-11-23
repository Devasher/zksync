/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IEIP1271 } from "./IEIP1271";

export class IEIP1271Factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEIP1271 {
    return new Contract(address, _abi, signerOrProvider) as IEIP1271;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];