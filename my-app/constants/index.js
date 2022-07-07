export const NFT_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "whitelistContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "_paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTokenIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleEnded",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startPresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
export const NFT_CONTRACT_ADDRESS =
  "0xD7a3e68CAF87cC6d56CD7438b3Fbca709Fb5aB46";

export const TOKEN_CONTRACT_ABI = [
  {
    _format: "hh-sol-artifact-1",
    contractName: "CryptoDevToken",
    sourceName: "contracts/CryptoDevToken.sol",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_cryptoDevsContract",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        stateMutability: "payable",
        type: "fallback",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "subtractedValue",
            type: "uint256",
          },
        ],
        name: "decreaseAllowance",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "addedValue",
            type: "uint256",
          },
        ],
        name: "increaseAllowance",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "maxTotalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "tokenIdsClaimed",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "tokenPrice",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "tokensPerNFT",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        stateMutability: "payable",
        type: "receive",
      },
    ],
    bytecode:
      "0x60806040523480156200001157600080fd5b506040516200262a3803806200262a833981810160405281019062000037919062000327565b6040518060400160405280601081526020017f43727970746f2044657620546f6b656e000000000000000000000000000000008152506040518060400160405280600281526020017f43440000000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb9291906200020d565b508060049080519060200190620000d49291906200020d565b505050620000f7620000eb6200013f60201b60201c565b6200014760201b60201c565b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620003be565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200021b9062000388565b90600052602060002090601f0160209004810192826200023f57600085556200028b565b82601f106200025a57805160ff19168380011785556200028b565b828001600101855582156200028b579182015b828111156200028a5782518255916020019190600101906200026d565b5b5090506200029a91906200029e565b5090565b5b80821115620002b95760008160009055506001016200029f565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002ef82620002c2565b9050919050565b6200030181620002e2565b81146200030d57600080fd5b50565b6000815190506200032181620002f6565b92915050565b60006020828403121562000340576200033f620002bd565b5b6000620003508482850162000310565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003a157607f821691505b60208210811415620003b857620003b762000359565b5b50919050565b61225c80620003ce6000396000f3fe60806040526004361061012e5760003560e01c80635f3690af116100ab57806395d89b411161006f57806395d89b41146103da578063a0712d6814610405578063a457c2d714610421578063a9059cbb1461045e578063dd62ed3e1461049b578063f2fde38b146104d857610135565b80635f3690af146102f357806370a0823114610330578063715018a61461036d5780637ff9b596146103845780638da5cb5b146103af57610135565b8063313ce567116100f2578063313ce56714610232578063395093511461025d5780633ccfd60b1461029a5780634e71d92d146102b15780635afcc2f5146102c857610135565b806306fdde0314610137578063095ea7b31461016257806318160ddd1461019f57806323b872dd146101ca5780632ab4d0521461020757610135565b3661013557005b005b34801561014357600080fd5b5061014c610501565b6040516101599190611573565b60405180910390f35b34801561016e57600080fd5b506101896004803603810190610184919061162e565b610593565b6040516101969190611689565b60405180910390f35b3480156101ab57600080fd5b506101b46105b6565b6040516101c191906116b3565b60405180910390f35b3480156101d657600080fd5b506101f160048036038101906101ec91906116ce565b6105c0565b6040516101fe9190611689565b60405180910390f35b34801561021357600080fd5b5061021c6105ef565b60405161022991906116b3565b60405180910390f35b34801561023e57600080fd5b506102476105fd565b604051610254919061173d565b60405180910390f35b34801561026957600080fd5b50610284600480360381019061027f919061162e565b610606565b6040516102919190611689565b60405180910390f35b3480156102a657600080fd5b506102af61063d565b005b3480156102bd57600080fd5b506102c6610707565b005b3480156102d457600080fd5b506102dd610978565b6040516102ea91906116b3565b60405180910390f35b3480156102ff57600080fd5b5061031a60048036038101906103159190611758565b610984565b6040516103279190611689565b60405180910390f35b34801561033c57600080fd5b5061035760048036038101906103529190611785565b6109a4565b60405161036491906116b3565b60405180910390f35b34801561037957600080fd5b506103826109ec565b005b34801561039057600080fd5b50610399610a00565b6040516103a691906116b3565b60405180910390f35b3480156103bb57600080fd5b506103c4610a0b565b6040516103d191906117c1565b60405180910390f35b3480156103e657600080fd5b506103ef610a35565b6040516103fc9190611573565b60405180910390f35b61041f600480360381019061041a9190611758565b610ac7565b005b34801561042d57600080fd5b506104486004803603810190610443919061162e565b610ba7565b6040516104559190611689565b60405180910390f35b34801561046a57600080fd5b506104856004803603810190610480919061162e565b610c1e565b6040516104929190611689565b60405180910390f35b3480156104a757600080fd5b506104c260048036038101906104bd91906117dc565b610c41565b6040516104cf91906116b3565b60405180910390f35b3480156104e457600080fd5b506104ff60048036038101906104fa9190611785565b610cc8565b005b6060600380546105109061184b565b80601f016020809104026020016040519081016040528092919081815260200182805461053c9061184b565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b5050505050905090565b60008061059e610d4c565b90506105ab818585610d54565b600191505092915050565b6000600254905090565b6000806105cb610d4c565b90506105d8858285610f1f565b6105e3858585610fab565b60019150509392505050565b69021e19e0c9bab240000081565b60006012905090565b600080610611610d4c565b90506106328185856106238589610c41565b61062d91906118ac565b610d54565b600191505092915050565b61064561122c565b600061064f610a0b565b9050600047905060008273ffffffffffffffffffffffffffffffffffffffff168260405161067c90611933565b60006040518083038185875af1925050503d80600081146106b9576040519150601f19603f3d011682016040523d82523d6000602084013e6106be565b606091505b5050905080610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f990611994565b60405180910390fd5b505050565b60003390506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b815260040161076991906117c1565b602060405180830381865afa158015610786573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107aa91906119c9565b9050600081116107ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e690611a68565b60405180910390fd5b6000805b82811015610912576000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f745c5986846040518363ffffffff1660e01b815260040161085a929190611a88565b602060405180830381865afa158015610877573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089b91906119c9565b90506007600082815260200190815260200160002060009054906101000a900460ff166108fe576001836108cf91906118ac565b925060016007600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50808061090a90611ab1565b9150506107f3565b5060008111610956576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094d90611b6c565b60405180910390fd5b61097333678ac7230489e800008361096e9190611b8c565b6112aa565b505050565b678ac7230489e8000081565b60076020528060005260406000206000915054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6109f461122c565b6109fe600061140a565b565b66038d7ea4c6800081565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610a449061184b565b80601f0160208091040260200160405190810160405280929190818152602001828054610a709061184b565b8015610abd5780601f10610a9257610100808354040283529160200191610abd565b820191906000526020600020905b815481529060010190602001808311610aa057829003601f168201915b5050505050905090565b60008166038d7ea4c68000610adc9190611b8c565b905080341015610b21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1890611c32565b60405180910390fd5b6000670de0b6b3a764000083610b379190611b8c565b905069021e19e0c9bab240000081610b4d6105b6565b610b5791906118ac565b1115610b98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8f90611cc4565b60405180910390fd5b610ba233826112aa565b505050565b600080610bb2610d4c565b90506000610bc08286610c41565b905083811015610c05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfc90611d56565b60405180910390fd5b610c128286868403610d54565b60019250505092915050565b600080610c29610d4c565b9050610c36818585610fab565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610cd061122c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3790611de8565b60405180910390fd5b610d498161140a565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610dc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dbb90611e7a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2b90611f0c565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610f1291906116b3565b60405180910390a3505050565b6000610f2b8484610c41565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610fa55781811015610f97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8e90611f78565b60405180910390fd5b610fa48484848403610d54565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561101b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110129061200a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561108b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110829061209c565b60405180910390fd5b6110968383836114d0565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561111c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111139061212e565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111af91906118ac565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161121391906116b3565b60405180910390a36112268484846114d5565b50505050565b611234610d4c565b73ffffffffffffffffffffffffffffffffffffffff16611252610a0b565b73ffffffffffffffffffffffffffffffffffffffff16146112a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129f9061219a565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561131a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131190612206565b60405180910390fd5b611326600083836114d0565b806002600082825461133891906118ac565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461138d91906118ac565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113f291906116b3565b60405180910390a3611406600083836114d5565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156115145780820151818401526020810190506114f9565b83811115611523576000848401525b50505050565b6000601f19601f8301169050919050565b6000611545826114da565b61154f81856114e5565b935061155f8185602086016114f6565b61156881611529565b840191505092915050565b6000602082019050818103600083015261158d818461153a565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115c58261159a565b9050919050565b6115d5816115ba565b81146115e057600080fd5b50565b6000813590506115f2816115cc565b92915050565b6000819050919050565b61160b816115f8565b811461161657600080fd5b50565b60008135905061162881611602565b92915050565b6000806040838503121561164557611644611595565b5b6000611653858286016115e3565b925050602061166485828601611619565b9150509250929050565b60008115159050919050565b6116838161166e565b82525050565b600060208201905061169e600083018461167a565b92915050565b6116ad816115f8565b82525050565b60006020820190506116c860008301846116a4565b92915050565b6000806000606084860312156116e7576116e6611595565b5b60006116f5868287016115e3565b9350506020611706868287016115e3565b925050604061171786828701611619565b9150509250925092565b600060ff82169050919050565b61173781611721565b82525050565b6000602082019050611752600083018461172e565b92915050565b60006020828403121561176e5761176d611595565b5b600061177c84828501611619565b91505092915050565b60006020828403121561179b5761179a611595565b5b60006117a9848285016115e3565b91505092915050565b6117bb816115ba565b82525050565b60006020820190506117d660008301846117b2565b92915050565b600080604083850312156117f3576117f2611595565b5b6000611801858286016115e3565b9250506020611812858286016115e3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061186357607f821691505b602082108114156118775761187661181c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118b7826115f8565b91506118c2836115f8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118f7576118f661187d565b5b828201905092915050565b600081905092915050565b50565b600061191d600083611902565b91506119288261190d565b600082019050919050565b600061193e82611910565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b600061197e6014836114e5565b915061198982611948565b602082019050919050565b600060208201905081810360008301526119ad81611971565b9050919050565b6000815190506119c381611602565b92915050565b6000602082840312156119df576119de611595565b5b60006119ed848285016119b4565b91505092915050565b7f596f7520646f6e74206f776e20616e792043727970746f20446576204e46542760008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a526021836114e5565b9150611a5d826119f6565b604082019050919050565b60006020820190508181036000830152611a8181611a45565b9050919050565b6000604082019050611a9d60008301856117b2565b611aaa60208301846116a4565b9392505050565b6000611abc826115f8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611aef57611aee61187d565b5b600182019050919050565b7f596f75206861766520616c726561647920636c61696d656420616c6c2074686560008201527f20746f6b656e7300000000000000000000000000000000000000000000000000602082015250565b6000611b566027836114e5565b9150611b6182611afa565b604082019050919050565b60006020820190508181036000830152611b8581611b49565b9050919050565b6000611b97826115f8565b9150611ba2836115f8565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611bdb57611bda61187d565b5b828202905092915050565b7f45746865722073656e7420697320696e636f7272656374000000000000000000600082015250565b6000611c1c6017836114e5565b9150611c2782611be6565b602082019050919050565b60006020820190508181036000830152611c4b81611c0f565b9050919050565b7f4578636565647320746865206d617820746f74616c20737570706c792061766160008201527f696c61626c652e00000000000000000000000000000000000000000000000000602082015250565b6000611cae6027836114e5565b9150611cb982611c52565b604082019050919050565b60006020820190508181036000830152611cdd81611ca1565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611d406025836114e5565b9150611d4b82611ce4565b604082019050919050565b60006020820190508181036000830152611d6f81611d33565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611dd26026836114e5565b9150611ddd82611d76565b604082019050919050565b60006020820190508181036000830152611e0181611dc5565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611e646024836114e5565b9150611e6f82611e08565b604082019050919050565b60006020820190508181036000830152611e9381611e57565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ef66022836114e5565b9150611f0182611e9a565b604082019050919050565b60006020820190508181036000830152611f2581611ee9565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611f62601d836114e5565b9150611f6d82611f2c565b602082019050919050565b60006020820190508181036000830152611f9181611f55565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611ff46025836114e5565b9150611fff82611f98565b604082019050919050565b6000602082019050818103600083015261202381611fe7565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006120866023836114e5565b91506120918261202a565b604082019050919050565b600060208201905081810360008301526120b581612079565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006121186026836114e5565b9150612123826120bc565b604082019050919050565b600060208201905081810360008301526121478161210b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006121846020836114e5565b915061218f8261214e565b602082019050919050565b600060208201905081810360008301526121b381612177565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006121f0601f836114e5565b91506121fb826121ba565b602082019050919050565b6000602082019050818103600083015261221f816121e3565b905091905056fea26469706673582212205bf9303ea09ee7028d657d00fd6f1b2e45590699ecf4d86316bde8a10408a2d064736f6c634300080a0033",
    deployedBytecode:
      "0x60806040526004361061012e5760003560e01c80635f3690af116100ab57806395d89b411161006f57806395d89b41146103da578063a0712d6814610405578063a457c2d714610421578063a9059cbb1461045e578063dd62ed3e1461049b578063f2fde38b146104d857610135565b80635f3690af146102f357806370a0823114610330578063715018a61461036d5780637ff9b596146103845780638da5cb5b146103af57610135565b8063313ce567116100f2578063313ce56714610232578063395093511461025d5780633ccfd60b1461029a5780634e71d92d146102b15780635afcc2f5146102c857610135565b806306fdde0314610137578063095ea7b31461016257806318160ddd1461019f57806323b872dd146101ca5780632ab4d0521461020757610135565b3661013557005b005b34801561014357600080fd5b5061014c610501565b6040516101599190611573565b60405180910390f35b34801561016e57600080fd5b506101896004803603810190610184919061162e565b610593565b6040516101969190611689565b60405180910390f35b3480156101ab57600080fd5b506101b46105b6565b6040516101c191906116b3565b60405180910390f35b3480156101d657600080fd5b506101f160048036038101906101ec91906116ce565b6105c0565b6040516101fe9190611689565b60405180910390f35b34801561021357600080fd5b5061021c6105ef565b60405161022991906116b3565b60405180910390f35b34801561023e57600080fd5b506102476105fd565b604051610254919061173d565b60405180910390f35b34801561026957600080fd5b50610284600480360381019061027f919061162e565b610606565b6040516102919190611689565b60405180910390f35b3480156102a657600080fd5b506102af61063d565b005b3480156102bd57600080fd5b506102c6610707565b005b3480156102d457600080fd5b506102dd610978565b6040516102ea91906116b3565b60405180910390f35b3480156102ff57600080fd5b5061031a60048036038101906103159190611758565b610984565b6040516103279190611689565b60405180910390f35b34801561033c57600080fd5b5061035760048036038101906103529190611785565b6109a4565b60405161036491906116b3565b60405180910390f35b34801561037957600080fd5b506103826109ec565b005b34801561039057600080fd5b50610399610a00565b6040516103a691906116b3565b60405180910390f35b3480156103bb57600080fd5b506103c4610a0b565b6040516103d191906117c1565b60405180910390f35b3480156103e657600080fd5b506103ef610a35565b6040516103fc9190611573565b60405180910390f35b61041f600480360381019061041a9190611758565b610ac7565b005b34801561042d57600080fd5b506104486004803603810190610443919061162e565b610ba7565b6040516104559190611689565b60405180910390f35b34801561046a57600080fd5b506104856004803603810190610480919061162e565b610c1e565b6040516104929190611689565b60405180910390f35b3480156104a757600080fd5b506104c260048036038101906104bd91906117dc565b610c41565b6040516104cf91906116b3565b60405180910390f35b3480156104e457600080fd5b506104ff60048036038101906104fa9190611785565b610cc8565b005b6060600380546105109061184b565b80601f016020809104026020016040519081016040528092919081815260200182805461053c9061184b565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b5050505050905090565b60008061059e610d4c565b90506105ab818585610d54565b600191505092915050565b6000600254905090565b6000806105cb610d4c565b90506105d8858285610f1f565b6105e3858585610fab565b60019150509392505050565b69021e19e0c9bab240000081565b60006012905090565b600080610611610d4c565b90506106328185856106238589610c41565b61062d91906118ac565b610d54565b600191505092915050565b61064561122c565b600061064f610a0b565b9050600047905060008273ffffffffffffffffffffffffffffffffffffffff168260405161067c90611933565b60006040518083038185875af1925050503d80600081146106b9576040519150601f19603f3d011682016040523d82523d6000602084013e6106be565b606091505b5050905080610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f990611994565b60405180910390fd5b505050565b60003390506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b815260040161076991906117c1565b602060405180830381865afa158015610786573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107aa91906119c9565b9050600081116107ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e690611a68565b60405180910390fd5b6000805b82811015610912576000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f745c5986846040518363ffffffff1660e01b815260040161085a929190611a88565b602060405180830381865afa158015610877573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089b91906119c9565b90506007600082815260200190815260200160002060009054906101000a900460ff166108fe576001836108cf91906118ac565b925060016007600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50808061090a90611ab1565b9150506107f3565b5060008111610956576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094d90611b6c565b60405180910390fd5b61097333678ac7230489e800008361096e9190611b8c565b6112aa565b505050565b678ac7230489e8000081565b60076020528060005260406000206000915054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6109f461122c565b6109fe600061140a565b565b66038d7ea4c6800081565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610a449061184b565b80601f0160208091040260200160405190810160405280929190818152602001828054610a709061184b565b8015610abd5780601f10610a9257610100808354040283529160200191610abd565b820191906000526020600020905b815481529060010190602001808311610aa057829003601f168201915b5050505050905090565b60008166038d7ea4c68000610adc9190611b8c565b905080341015610b21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1890611c32565b60405180910390fd5b6000670de0b6b3a764000083610b379190611b8c565b905069021e19e0c9bab240000081610b4d6105b6565b610b5791906118ac565b1115610b98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8f90611cc4565b60405180910390fd5b610ba233826112aa565b505050565b600080610bb2610d4c565b90506000610bc08286610c41565b905083811015610c05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfc90611d56565b60405180910390fd5b610c128286868403610d54565b60019250505092915050565b600080610c29610d4c565b9050610c36818585610fab565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610cd061122c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3790611de8565b60405180910390fd5b610d498161140a565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610dc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dbb90611e7a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2b90611f0c565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610f1291906116b3565b60405180910390a3505050565b6000610f2b8484610c41565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610fa55781811015610f97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8e90611f78565b60405180910390fd5b610fa48484848403610d54565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561101b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110129061200a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561108b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110829061209c565b60405180910390fd5b6110968383836114d0565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561111c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111139061212e565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111af91906118ac565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161121391906116b3565b60405180910390a36112268484846114d5565b50505050565b611234610d4c565b73ffffffffffffffffffffffffffffffffffffffff16611252610a0b565b73ffffffffffffffffffffffffffffffffffffffff16146112a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129f9061219a565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561131a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131190612206565b60405180910390fd5b611326600083836114d0565b806002600082825461133891906118ac565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461138d91906118ac565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113f291906116b3565b60405180910390a3611406600083836114d5565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156115145780820151818401526020810190506114f9565b83811115611523576000848401525b50505050565b6000601f19601f8301169050919050565b6000611545826114da565b61154f81856114e5565b935061155f8185602086016114f6565b61156881611529565b840191505092915050565b6000602082019050818103600083015261158d818461153a565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115c58261159a565b9050919050565b6115d5816115ba565b81146115e057600080fd5b50565b6000813590506115f2816115cc565b92915050565b6000819050919050565b61160b816115f8565b811461161657600080fd5b50565b60008135905061162881611602565b92915050565b6000806040838503121561164557611644611595565b5b6000611653858286016115e3565b925050602061166485828601611619565b9150509250929050565b60008115159050919050565b6116838161166e565b82525050565b600060208201905061169e600083018461167a565b92915050565b6116ad816115f8565b82525050565b60006020820190506116c860008301846116a4565b92915050565b6000806000606084860312156116e7576116e6611595565b5b60006116f5868287016115e3565b9350506020611706868287016115e3565b925050604061171786828701611619565b9150509250925092565b600060ff82169050919050565b61173781611721565b82525050565b6000602082019050611752600083018461172e565b92915050565b60006020828403121561176e5761176d611595565b5b600061177c84828501611619565b91505092915050565b60006020828403121561179b5761179a611595565b5b60006117a9848285016115e3565b91505092915050565b6117bb816115ba565b82525050565b60006020820190506117d660008301846117b2565b92915050565b600080604083850312156117f3576117f2611595565b5b6000611801858286016115e3565b9250506020611812858286016115e3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061186357607f821691505b602082108114156118775761187661181c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118b7826115f8565b91506118c2836115f8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118f7576118f661187d565b5b828201905092915050565b600081905092915050565b50565b600061191d600083611902565b91506119288261190d565b600082019050919050565b600061193e82611910565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b600061197e6014836114e5565b915061198982611948565b602082019050919050565b600060208201905081810360008301526119ad81611971565b9050919050565b6000815190506119c381611602565b92915050565b6000602082840312156119df576119de611595565b5b60006119ed848285016119b4565b91505092915050565b7f596f7520646f6e74206f776e20616e792043727970746f20446576204e46542760008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a526021836114e5565b9150611a5d826119f6565b604082019050919050565b60006020820190508181036000830152611a8181611a45565b9050919050565b6000604082019050611a9d60008301856117b2565b611aaa60208301846116a4565b9392505050565b6000611abc826115f8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611aef57611aee61187d565b5b600182019050919050565b7f596f75206861766520616c726561647920636c61696d656420616c6c2074686560008201527f20746f6b656e7300000000000000000000000000000000000000000000000000602082015250565b6000611b566027836114e5565b9150611b6182611afa565b604082019050919050565b60006020820190508181036000830152611b8581611b49565b9050919050565b6000611b97826115f8565b9150611ba2836115f8565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611bdb57611bda61187d565b5b828202905092915050565b7f45746865722073656e7420697320696e636f7272656374000000000000000000600082015250565b6000611c1c6017836114e5565b9150611c2782611be6565b602082019050919050565b60006020820190508181036000830152611c4b81611c0f565b9050919050565b7f4578636565647320746865206d617820746f74616c20737570706c792061766160008201527f696c61626c652e00000000000000000000000000000000000000000000000000602082015250565b6000611cae6027836114e5565b9150611cb982611c52565b604082019050919050565b60006020820190508181036000830152611cdd81611ca1565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611d406025836114e5565b9150611d4b82611ce4565b604082019050919050565b60006020820190508181036000830152611d6f81611d33565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611dd26026836114e5565b9150611ddd82611d76565b604082019050919050565b60006020820190508181036000830152611e0181611dc5565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611e646024836114e5565b9150611e6f82611e08565b604082019050919050565b60006020820190508181036000830152611e9381611e57565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ef66022836114e5565b9150611f0182611e9a565b604082019050919050565b60006020820190508181036000830152611f2581611ee9565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611f62601d836114e5565b9150611f6d82611f2c565b602082019050919050565b60006020820190508181036000830152611f9181611f55565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611ff46025836114e5565b9150611fff82611f98565b604082019050919050565b6000602082019050818103600083015261202381611fe7565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006120866023836114e5565b91506120918261202a565b604082019050919050565b600060208201905081810360008301526120b581612079565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006121186026836114e5565b9150612123826120bc565b604082019050919050565b600060208201905081810360008301526121478161210b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006121846020836114e5565b915061218f8261214e565b602082019050919050565b600060208201905081810360008301526121b381612177565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006121f0601f836114e5565b91506121fb826121ba565b602082019050919050565b6000602082019050818103600083015261221f816121e3565b905091905056fea26469706673582212205bf9303ea09ee7028d657d00fd6f1b2e45590699ecf4d86316bde8a10408a2d064736f6c634300080a0033",
    linkReferences: {},
    deployedLinkReferences: {},
  },
];

export const TOKEN_CONTRACT_ADDRESS =
  "0xF1e83A2c879140414daac7BE1F0Cd64e63b990e5";
