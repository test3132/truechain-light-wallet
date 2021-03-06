function getVote(fromAddr, callback) {
	const iterface = [{
			"constant": true,
			"inputs": [],
			"name": "name",
			"outputs": [{
				"name": "",
				"type": "string"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [{
					"name": "_spender",
					"type": "address"
				},
				{
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [{
				"name": "success",
				"type": "bool"
			}],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "totalSupply",
			"outputs": [{
				"name": "supply",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [{
					"name": "",
					"type": "address"
				},
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "votingInfo",
			"outputs": [{
				"name": "",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [{
					"name": "_from",
					"type": "address"
				},
				{
					"name": "_to",
					"type": "address"
				},
				{
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [{
				"name": "success",
				"type": "bool"
			}],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [{
				"name": "",
				"type": "address"
			}],
			"name": "balances",
			"outputs": [{
				"name": "",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "decimals",
			"outputs": [{
				"name": "",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [{
				"name": "_owner",
				"type": "address"
			}],
			"name": "ticketsOf",
			"outputs": [{
				"name": "tickets",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "kill",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "founder",
			"outputs": [{
				"name": "",
				"type": "address"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [{
					"name": "_to",
					"type": "address"
				},
				{
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "vote",
			"outputs": [{
				"name": "success",
				"type": "bool"
			}],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [{
				"name": "_owner",
				"type": "address"
			}],
			"name": "balanceOf",
			"outputs": [{
				"name": "balance",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [{
				"name": "newFounder",
				"type": "address"
			}],
			"name": "changeFounder",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "symbol",
			"outputs": [{
				"name": "",
				"type": "string"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "voteEndTime",
			"outputs": [{
				"name": "",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [{
				"name": "",
				"type": "address"
			}],
			"name": "totalVotes",
			"outputs": [{
				"name": "",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [{
					"name": "_to",
					"type": "address"
				},
				{
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [{
				"name": "success",
				"type": "bool"
			}],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [{
					"name": "_tos",
					"type": "address[]"
				},
				{
					"name": "_values",
					"type": "uint256[]"
				}
			],
			"name": "distributeMultiple",
			"outputs": [{
				"name": "success",
				"type": "bool"
			}],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [{
				"name": "_to",
				"type": "address"
			}],
			"name": "voteAll",
			"outputs": [{
				"name": "success",
				"type": "bool"
			}],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [{
				"name": "_endTime",
				"type": "uint256"
			}],
			"name": "setEndTime",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [{
				"name": "",
				"type": "address"
			}],
			"name": "frozen",
			"outputs": [{
				"name": "",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [{
					"name": "_owner",
					"type": "address"
				},
				{
					"name": "_spender",
					"type": "address"
				}
			],
			"name": "allowance",
			"outputs": [{
				"name": "remaining",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "distributed",
			"outputs": [{
				"name": "",
				"type": "uint256"
			}],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [{
					"name": "_to",
					"type": "address"
				},
				{
					"name": "_amount",
					"type": "uint256"
				}
			],
			"name": "distribute",
			"outputs": [{
				"name": "success",
				"type": "bool"
			}],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [{
					"indexed": true,
					"name": "_from",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "_to",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [{
					"indexed": true,
					"name": "_from",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "_to",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "Vote",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [{
					"indexed": true,
					"name": "_owner",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "_spender",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		}
	];

	let host = plus.storage.getItem('web3Host');
	let reg = /https:\/\/ropsten.infura.io/;
	let ttrContractAddr;
	if(!host) {
		host = 'https://mainnet.infura.io/';
		ttrContractAddr = "0xf2bb016e8c9c8975654dcd62f318323a8a79d48e";
	} else if(reg.test(host)) {
		ttrContractAddr = "0x635AfeB8739f908A37b3d312cB4958CB2033F456";
	} else {
		ttrContractAddr = "0xf2bb016e8c9c8975654dcd62f318323a8a79d48e";
	}
	var web3 = new Web3(new Web3.providers.HttpProvider(host));
	let contract = new web3.eth.Contract(iterface);
	contract.options.address = ttrContractAddr;

	try {
		contract.methods.ticketsOf(fromAddr).call().then(function(num) {
			let num1 = web3.utils.fromWei(num, 'ether');
			callback(num1)
		});

	} catch(error) {
		console.log('error: ' + error);
	}
}