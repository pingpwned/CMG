const abi = {
  deploy: {
    'VM:-': {
      linkReferences: {},
      autoDeployLib: true,
    },
    'main:1': {
      linkReferences: {},
      autoDeployLib: true,
    },
    'ropsten:3': {
      linkReferences: {},
      autoDeployLib: true,
    },
    'rinkeby:4': {
      linkReferences: {},
      autoDeployLib: true,
    },
    'kovan:42': {
      linkReferences: {},
      autoDeployLib: true,
    },
    'görli:5': {
      linkReferences: {},
      autoDeployLib: true,
    },
    Custom: {
      linkReferences: {},
      autoDeployLib: true,
    },
  },
  data: {
    bytecode: {
      functionDebugData: {
        '@_349': {
          entryPoint: null,
          id: 349,
          parameterSlots: 1,
          returnSlots: 0,
        },
        abi_decode_t_address_fromMemory: {
          entryPoint: 127,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        abi_decode_tuple_t_address_fromMemory: {
          entryPoint: 148,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        allocate_unbounded: {
          entryPoint: null,
          id: null,
          parameterSlots: 0,
          returnSlots: 1,
        },
        cleanup_t_address: {
          entryPoint: 193,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        cleanup_t_uint160: {
          entryPoint: 211,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db: {
          entryPoint: null,
          id: null,
          parameterSlots: 0,
          returnSlots: 0,
        },
        revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b: {
          entryPoint: 243,
          id: null,
          parameterSlots: 0,
          returnSlots: 0,
        },
        validator_revert_t_address: {
          entryPoint: 248,
          id: null,
          parameterSlots: 1,
          returnSlots: 0,
        },
      },
      generatedSources: [
        {
          ast: {
            nodeType: 'YulBlock',
            src: '0:1199:4',
            statements: [
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '70:80:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '80:22:4',
                      value: {
                        arguments: [
                          {
                            name: 'offset',
                            nodeType: 'YulIdentifier',
                            src: '95:6:4',
                          },
                        ],
                        functionName: {
                          name: 'mload',
                          nodeType: 'YulIdentifier',
                          src: '89:5:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '89:13:4',
                      },
                      variableNames: [
                        {
                          name: 'value',
                          nodeType: 'YulIdentifier',
                          src: '80:5:4',
                        },
                      ],
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '138:5:4',
                          },
                        ],
                        functionName: {
                          name: 'validator_revert_t_address',
                          nodeType: 'YulIdentifier',
                          src: '111:26:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '111:33:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '111:33:4',
                    },
                  ],
                },
                name: 'abi_decode_t_address_fromMemory',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'offset',
                    nodeType: 'YulTypedName',
                    src: '48:6:4',
                    type: '',
                  },
                  {
                    name: 'end',
                    nodeType: 'YulTypedName',
                    src: '56:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '64:5:4',
                    type: '',
                  },
                ],
                src: '7:143:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '233:274:4',
                  statements: [
                    {
                      body: {
                        nodeType: 'YulBlock',
                        src: '279:83:4',
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
                                nodeType: 'YulIdentifier',
                                src: '281:77:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '281:79:4',
                            },
                            nodeType: 'YulExpressionStatement',
                            src: '281:79:4',
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'dataEnd',
                                nodeType: 'YulIdentifier',
                                src: '254:7:4',
                              },
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '263:9:4',
                              },
                            ],
                            functionName: {
                              name: 'sub',
                              nodeType: 'YulIdentifier',
                              src: '250:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '250:23:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '275:2:4',
                            type: '',
                            value: '32',
                          },
                        ],
                        functionName: {
                          name: 'slt',
                          nodeType: 'YulIdentifier',
                          src: '246:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '246:32:4',
                      },
                      nodeType: 'YulIf',
                      src: '243:119:4',
                    },
                    {
                      nodeType: 'YulBlock',
                      src: '372:128:4',
                      statements: [
                        {
                          nodeType: 'YulVariableDeclaration',
                          src: '387:15:4',
                          value: {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '401:1:4',
                            type: '',
                            value: '0',
                          },
                          variables: [
                            {
                              name: 'offset',
                              nodeType: 'YulTypedName',
                              src: '391:6:4',
                              type: '',
                            },
                          ],
                        },
                        {
                          nodeType: 'YulAssignment',
                          src: '416:74:4',
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: 'headStart',
                                    nodeType: 'YulIdentifier',
                                    src: '462:9:4',
                                  },
                                  {
                                    name: 'offset',
                                    nodeType: 'YulIdentifier',
                                    src: '473:6:4',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '458:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '458:22:4',
                              },
                              {
                                name: 'dataEnd',
                                nodeType: 'YulIdentifier',
                                src: '482:7:4',
                              },
                            ],
                            functionName: {
                              name: 'abi_decode_t_address_fromMemory',
                              nodeType: 'YulIdentifier',
                              src: '426:31:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '426:64:4',
                          },
                          variableNames: [
                            {
                              name: 'value0',
                              nodeType: 'YulIdentifier',
                              src: '416:6:4',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_decode_tuple_t_address_fromMemory',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'headStart',
                    nodeType: 'YulTypedName',
                    src: '203:9:4',
                    type: '',
                  },
                  {
                    name: 'dataEnd',
                    nodeType: 'YulTypedName',
                    src: '214:7:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'value0',
                    nodeType: 'YulTypedName',
                    src: '226:6:4',
                    type: '',
                  },
                ],
                src: '156:351:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '553:35:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '563:19:4',
                      value: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '579:2:4',
                            type: '',
                            value: '64',
                          },
                        ],
                        functionName: {
                          name: 'mload',
                          nodeType: 'YulIdentifier',
                          src: '573:5:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '573:9:4',
                      },
                      variableNames: [
                        {
                          name: 'memPtr',
                          nodeType: 'YulIdentifier',
                          src: '563:6:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'allocate_unbounded',
                nodeType: 'YulFunctionDefinition',
                returnVariables: [
                  {
                    name: 'memPtr',
                    nodeType: 'YulTypedName',
                    src: '546:6:4',
                    type: '',
                  },
                ],
                src: '513:75:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '639:51:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '649:35:4',
                      value: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '678:5:4',
                          },
                        ],
                        functionName: {
                          name: 'cleanup_t_uint160',
                          nodeType: 'YulIdentifier',
                          src: '660:17:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '660:24:4',
                      },
                      variableNames: [
                        {
                          name: 'cleaned',
                          nodeType: 'YulIdentifier',
                          src: '649:7:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'cleanup_t_address',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '621:5:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'cleaned',
                    nodeType: 'YulTypedName',
                    src: '631:7:4',
                    type: '',
                  },
                ],
                src: '594:96:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '741:81:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '751:65:4',
                      value: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '766:5:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '773:42:4',
                            type: '',
                            value: '0xffffffffffffffffffffffffffffffffffffffff',
                          },
                        ],
                        functionName: {
                          name: 'and',
                          nodeType: 'YulIdentifier',
                          src: '762:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '762:54:4',
                      },
                      variableNames: [
                        {
                          name: 'cleaned',
                          nodeType: 'YulIdentifier',
                          src: '751:7:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'cleanup_t_uint160',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '723:5:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'cleaned',
                    nodeType: 'YulTypedName',
                    src: '733:7:4',
                    type: '',
                  },
                ],
                src: '696:126:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '917:28:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '934:1:4',
                            type: '',
                            value: '0',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '937:1:4',
                            type: '',
                            value: '0',
                          },
                        ],
                        functionName: {
                          name: 'revert',
                          nodeType: 'YulIdentifier',
                          src: '927:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '927:12:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '927:12:4',
                    },
                  ],
                },
                name: 'revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db',
                nodeType: 'YulFunctionDefinition',
                src: '828:117:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '1040:28:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '1057:1:4',
                            type: '',
                            value: '0',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '1060:1:4',
                            type: '',
                            value: '0',
                          },
                        ],
                        functionName: {
                          name: 'revert',
                          nodeType: 'YulIdentifier',
                          src: '1050:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1050:12:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '1050:12:4',
                    },
                  ],
                },
                name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
                nodeType: 'YulFunctionDefinition',
                src: '951:117:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '1117:79:4',
                  statements: [
                    {
                      body: {
                        nodeType: 'YulBlock',
                        src: '1174:16:4',
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: 'number',
                                  nodeType: 'YulLiteral',
                                  src: '1183:1:4',
                                  type: '',
                                  value: '0',
                                },
                                {
                                  kind: 'number',
                                  nodeType: 'YulLiteral',
                                  src: '1186:1:4',
                                  type: '',
                                  value: '0',
                                },
                              ],
                              functionName: {
                                name: 'revert',
                                nodeType: 'YulIdentifier',
                                src: '1176:6:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '1176:12:4',
                            },
                            nodeType: 'YulExpressionStatement',
                            src: '1176:12:4',
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'value',
                                nodeType: 'YulIdentifier',
                                src: '1140:5:4',
                              },
                              {
                                arguments: [
                                  {
                                    name: 'value',
                                    nodeType: 'YulIdentifier',
                                    src: '1165:5:4',
                                  },
                                ],
                                functionName: {
                                  name: 'cleanup_t_address',
                                  nodeType: 'YulIdentifier',
                                  src: '1147:17:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '1147:24:4',
                              },
                            ],
                            functionName: {
                              name: 'eq',
                              nodeType: 'YulIdentifier',
                              src: '1137:2:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '1137:35:4',
                          },
                        ],
                        functionName: {
                          name: 'iszero',
                          nodeType: 'YulIdentifier',
                          src: '1130:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1130:43:4',
                      },
                      nodeType: 'YulIf',
                      src: '1127:63:4',
                    },
                  ],
                },
                name: 'validator_revert_t_address',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '1110:5:4',
                    type: '',
                  },
                ],
                src: '1074:122:4',
              },
            ],
          },
          contents:
            '{\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n}\n',
          id: 4,
          language: 'Yul',
          name: '#utility.yul',
        },
      ],
      linkReferences: {},
      object:
        '608060405234801561001057600080fd5b50604051610b84380380610b8483398181016040528101906100329190610094565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600180819055505061010f565b60008151905061008e816100f8565b92915050565b6000602082840312156100aa576100a96100f3565b5b60006100b88482850161007f565b91505092915050565b60006100cc826100d3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b610101816100c1565b811461010c57600080fd5b50565b610a668061011e6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806338ee821b1461006757806353ed514314610097578063aff0b297146100b5578063be9a6555146100d1578063d299aa07146100db578063f71d96cb1461010b575b600080fd5b610081600480360381019061007c919061060e565b61013c565b60405161008e9190610855565b60405180910390f35b61009f610154565b6040516100ac91906107f6565b60405180910390f35b6100cf60048036038101906100ca919061063b565b6101c7565b005b6100d9610435565b005b6100f560048036038101906100f0919061060e565b610598565b6040516101029190610855565b60405180910390f35b6101256004803603810190610120919061063b565b6105b0565b604051610133929190610870565b60405180910390f35b60036020528060005260406000206000915090505481565b60606004805480602002602001604051908101604052809291908181526020016000905b828210156101be57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610178565b50505050905090565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638358ba0882846040518363ffffffff1660e01b8152600401610266929190610870565b600060405180830381600087803b15801561028057600080fd5b505af1158015610294573d6000803e3d6000fd5b5050505081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006040518060400160405280600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152509050600481908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090557f96bed669ba2036cc25b69d1ebfdfa3d3ae2ea025967d7e3b01e9ad2255081d4a60046040516104289190610818565b60405180910390a1505050565b600154600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395805dad600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518263ffffffff1660e01b81526004016105139190610855565b600060405180830381600087803b15801561052d57600080fd5b505af1158015610541573d6000803e3d6000fd5b50505050600180600082825461055791906108ff565b925050819055507f898a393a858c3e53a0c17028b22a4244ad013a6a5432ead1ba081e13f4053199600160405161058e919061083a565b60405180910390a1565b60026020528060005260406000206000915090505481565b600481815481106105c057600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b6000813590506105f381610a02565b92915050565b60008135905061060881610a19565b92915050565b600060208284031215610624576106236109f0565b5b6000610632848285016105e4565b91505092915050565b600060208284031215610651576106506109f0565b5b600061065f848285016105f9565b91505092915050565b60006106748383610762565b60408301905092915050565b600061068c8383610791565b60408301905092915050565b60006106a3826108be565b6106ad81856108ee565b93506106b883610899565b8060005b838110156106e95781516106d08882610668565b97506106db836108d4565b9250506001810190506106bc565b5085935050505092915050565b6000610701826108c9565b61070b81856108ee565b9350610716836108a9565b8060005b83811015610746578161072d8882610680565b9750610738836108e1565b92505060018101905061071a565b5085935050505092915050565b61075c81610971565b82525050565b60408201600082015161077860008501826107d8565b50602082015161078b60208501826107d8565b50505050565b6040820160008083015490506107a6816109a7565b6107b360008601826107d8565b50600183015490506107c4816109a7565b6107d160208601826107d8565b5050505050565b6107e18161099d565b82525050565b6107f08161099d565b82525050565b600060208201905081810360008301526108108184610698565b905092915050565b6000602082019050818103600083015261083281846106f6565b905092915050565b600060208201905061084f6000830184610753565b92915050565b600060208201905061086a60008301846107e7565b92915050565b600060408201905061088560008301856107e7565b61089260208301846107e7565b9392505050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081549050919050565b6000602082019050919050565b6000600282019050919050565b600082825260208201905092915050565b600061090a8261099d565b91506109158361099d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561094a576109496109c1565b5b828201905092915050565b6000819050919050565b600061096a8261097d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006109ba6109b5836109f5565b610955565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b60008160001c9050919050565b610a0b8161095f565b8114610a1657600080fd5b50565b610a228161099d565b8114610a2d57600080fd5b5056fea2646970667358221220cf488fef364a713555766cac67183db2336ac7af7f27fd93b26cd1c048116f0664736f6c63430008070033',
      opcodes:
        'PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0xB84 CODESIZE SUB DUP1 PUSH2 0xB84 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH2 0x32 SWAP2 SWAP1 PUSH2 0x94 JUMP JUMPDEST DUP1 PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x1 DUP1 DUP2 SWAP1 SSTORE POP POP PUSH2 0x10F JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0x8E DUP2 PUSH2 0xF8 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xAA JUMPI PUSH2 0xA9 PUSH2 0xF3 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xB8 DUP5 DUP3 DUP6 ADD PUSH2 0x7F JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xCC DUP3 PUSH2 0xD3 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x101 DUP2 PUSH2 0xC1 JUMP JUMPDEST DUP2 EQ PUSH2 0x10C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0xA66 DUP1 PUSH2 0x11E PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x62 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x38EE821B EQ PUSH2 0x67 JUMPI DUP1 PUSH4 0x53ED5143 EQ PUSH2 0x97 JUMPI DUP1 PUSH4 0xAFF0B297 EQ PUSH2 0xB5 JUMPI DUP1 PUSH4 0xBE9A6555 EQ PUSH2 0xD1 JUMPI DUP1 PUSH4 0xD299AA07 EQ PUSH2 0xDB JUMPI DUP1 PUSH4 0xF71D96CB EQ PUSH2 0x10B JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x81 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x7C SWAP2 SWAP1 PUSH2 0x60E JUMP JUMPDEST PUSH2 0x13C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x8E SWAP2 SWAP1 PUSH2 0x855 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x9F PUSH2 0x154 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xAC SWAP2 SWAP1 PUSH2 0x7F6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xCF PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xCA SWAP2 SWAP1 PUSH2 0x63B JUMP JUMPDEST PUSH2 0x1C7 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xD9 PUSH2 0x435 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xF5 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xF0 SWAP2 SWAP1 PUSH2 0x60E JUMP JUMPDEST PUSH2 0x598 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x102 SWAP2 SWAP1 PUSH2 0x855 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x125 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x120 SWAP2 SWAP1 PUSH2 0x63B JUMP JUMPDEST PUSH2 0x5B0 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x133 SWAP3 SWAP2 SWAP1 PUSH2 0x870 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x3 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x4 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 SWAP1 JUMPDEST DUP3 DUP3 LT ISZERO PUSH2 0x1BE JUMPI DUP4 DUP3 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE SWAP1 DUP2 PUSH1 0x0 DUP3 ADD SLOAD DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP3 ADD SLOAD DUP2 MSTORE POP POP DUP2 MSTORE PUSH1 0x20 ADD SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x178 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP PUSH1 0x0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x8358BA08 DUP3 DUP5 PUSH1 0x40 MLOAD DUP4 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x266 SWAP3 SWAP2 SWAP1 PUSH2 0x870 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x280 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x294 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP DUP2 PUSH1 0x3 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x3 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD DUP2 MSTORE POP SWAP1 POP PUSH1 0x4 DUP2 SWAP1 DUP1 PUSH1 0x1 DUP2 SLOAD ADD DUP1 DUP3 SSTORE DUP1 SWAP2 POP POP PUSH1 0x1 SWAP1 SUB SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x0 SWAP1 SWAP2 SWAP1 SWAP2 SWAP1 SWAP2 POP PUSH1 0x0 DUP3 ADD MLOAD DUP2 PUSH1 0x0 ADD SSTORE PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE POP POP PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SSTORE PUSH32 0x96BED669BA2036CC25B69D1EBFDFA3D3AE2EA025967D7E3B01E9AD2255081D4A PUSH1 0x4 PUSH1 0x40 MLOAD PUSH2 0x428 SWAP2 SWAP1 PUSH2 0x818 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH1 0x0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x95805DAD PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH1 0x40 MLOAD DUP3 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x513 SWAP2 SWAP1 PUSH2 0x855 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x52D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x541 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x1 DUP1 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x557 SWAP2 SWAP1 PUSH2 0x8FF JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH32 0x898A393A858C3E53A0C17028B22A4244AD013A6A5432EAD1BA081E13F4053199 PUSH1 0x1 PUSH1 0x40 MLOAD PUSH2 0x58E SWAP2 SWAP1 PUSH2 0x83A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMP JUMPDEST PUSH1 0x2 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 DUP2 DUP2 SLOAD DUP2 LT PUSH2 0x5C0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x0 SWAP2 POP SWAP1 POP DUP1 PUSH1 0x0 ADD SLOAD SWAP1 DUP1 PUSH1 0x1 ADD SLOAD SWAP1 POP DUP3 JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x5F3 DUP2 PUSH2 0xA02 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x608 DUP2 PUSH2 0xA19 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x624 JUMPI PUSH2 0x623 PUSH2 0x9F0 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x632 DUP5 DUP3 DUP6 ADD PUSH2 0x5E4 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x651 JUMPI PUSH2 0x650 PUSH2 0x9F0 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x65F DUP5 DUP3 DUP6 ADD PUSH2 0x5F9 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x674 DUP4 DUP4 PUSH2 0x762 JUMP JUMPDEST PUSH1 0x40 DUP4 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x68C DUP4 DUP4 PUSH2 0x791 JUMP JUMPDEST PUSH1 0x40 DUP4 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x6A3 DUP3 PUSH2 0x8BE JUMP JUMPDEST PUSH2 0x6AD DUP2 DUP6 PUSH2 0x8EE JUMP JUMPDEST SWAP4 POP PUSH2 0x6B8 DUP4 PUSH2 0x899 JUMP JUMPDEST DUP1 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x6E9 JUMPI DUP2 MLOAD PUSH2 0x6D0 DUP9 DUP3 PUSH2 0x668 JUMP JUMPDEST SWAP8 POP PUSH2 0x6DB DUP4 PUSH2 0x8D4 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH2 0x6BC JUMP JUMPDEST POP DUP6 SWAP4 POP POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x701 DUP3 PUSH2 0x8C9 JUMP JUMPDEST PUSH2 0x70B DUP2 DUP6 PUSH2 0x8EE JUMP JUMPDEST SWAP4 POP PUSH2 0x716 DUP4 PUSH2 0x8A9 JUMP JUMPDEST DUP1 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x746 JUMPI DUP2 PUSH2 0x72D DUP9 DUP3 PUSH2 0x680 JUMP JUMPDEST SWAP8 POP PUSH2 0x738 DUP4 PUSH2 0x8E1 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH2 0x71A JUMP JUMPDEST POP DUP6 SWAP4 POP POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x75C DUP2 PUSH2 0x971 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x40 DUP3 ADD PUSH1 0x0 DUP3 ADD MLOAD PUSH2 0x778 PUSH1 0x0 DUP6 ADD DUP3 PUSH2 0x7D8 JUMP JUMPDEST POP PUSH1 0x20 DUP3 ADD MLOAD PUSH2 0x78B PUSH1 0x20 DUP6 ADD DUP3 PUSH2 0x7D8 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x40 DUP3 ADD PUSH1 0x0 DUP1 DUP4 ADD SLOAD SWAP1 POP PUSH2 0x7A6 DUP2 PUSH2 0x9A7 JUMP JUMPDEST PUSH2 0x7B3 PUSH1 0x0 DUP7 ADD DUP3 PUSH2 0x7D8 JUMP JUMPDEST POP PUSH1 0x1 DUP4 ADD SLOAD SWAP1 POP PUSH2 0x7C4 DUP2 PUSH2 0x9A7 JUMP JUMPDEST PUSH2 0x7D1 PUSH1 0x20 DUP7 ADD DUP3 PUSH2 0x7D8 JUMP JUMPDEST POP POP POP POP POP JUMP JUMPDEST PUSH2 0x7E1 DUP2 PUSH2 0x99D JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x7F0 DUP2 PUSH2 0x99D JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x810 DUP2 DUP5 PUSH2 0x698 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x832 DUP2 DUP5 PUSH2 0x6F6 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x84F PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x753 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x86A PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x7E7 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x885 PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0x7E7 JUMP JUMPDEST PUSH2 0x892 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x7E7 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP2 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x90A DUP3 PUSH2 0x99D JUMP JUMPDEST SWAP2 POP PUSH2 0x915 DUP4 PUSH2 0x99D JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x94A JUMPI PUSH2 0x949 PUSH2 0x9C1 JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x96A DUP3 PUSH2 0x97D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x9BA PUSH2 0x9B5 DUP4 PUSH2 0x9F5 JUMP JUMPDEST PUSH2 0x955 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 SHR SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xA0B DUP2 PUSH2 0x95F JUMP JUMPDEST DUP2 EQ PUSH2 0xA16 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0xA22 DUP2 PUSH2 0x99D JUMP JUMPDEST DUP2 EQ PUSH2 0xA2D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xCF BASEFEE DUP16 0xEF CALLDATASIZE 0x4A PUSH18 0x3555766CAC67183DB2336AC7AF7F27FD93B2 PUSH13 0xD1C048116F0664736F6C634300 ADDMOD SMOD STOP CALLER ',
      sourceMap:
        '91:948:3:-:0;;;391:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;438:4;423:3;;:20;;;;;;;;;;;;;;;;;;454:1;449:2;:6;;;;391:69;91:948;;7:143:4;64:5;95:6;89:13;80:22;;111:33;138:5;111:33;:::i;:::-;7:143;;;;:::o;156:351::-;226:6;275:2;263:9;254:7;250:23;246:32;243:119;;;281:79;;:::i;:::-;243:119;401:1;426:64;482:7;473:6;462:9;458:22;426:64;:::i;:::-;416:74;;372:128;156:351;;;;:::o;594:96::-;631:7;660:24;678:5;660:24;:::i;:::-;649:35;;594:96;;;:::o;696:126::-;733:7;773:42;766:5;762:54;751:65;;696:126;;;:::o;951:117::-;1060:1;1057;1050:12;1074:122;1147:24;1165:5;1147:24;:::i;:::-;1140:5;1137:35;1127:63;;1186:1;1183;1176:12;1127:63;1074:122;:::o;91:948:3:-;;;;;;;',
    },
    deployedBytecode: {
      functionDebugData: {
        '@addressList_310': {
          entryPoint: 1432,
          id: 310,
          parameterSlots: 0,
          returnSlots: 0,
        },
        '@getAll_444': {
          entryPoint: 340,
          id: 444,
          parameterSlots: 0,
          returnSlots: 1,
        },
        '@players_323': {
          entryPoint: 1456,
          id: 323,
          parameterSlots: 0,
          returnSlots: 0,
        },
        '@start_377': {
          entryPoint: 1077,
          id: 377,
          parameterSlots: 0,
          returnSlots: 0,
        },
        '@submitScore_434': {
          entryPoint: 455,
          id: 434,
          parameterSlots: 1,
          returnSlots: 0,
        },
        '@userScore_314': {
          entryPoint: 316,
          id: 314,
          parameterSlots: 0,
          returnSlots: 0,
        },
        abi_decode_t_address: {
          entryPoint: 1508,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        abi_decode_t_uint256: {
          entryPoint: 1529,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        abi_decode_tuple_t_address: {
          entryPoint: 1550,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        abi_decode_tuple_t_uint256: {
          entryPoint: 1595,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        abi_encodeUpdatedPos_t_struct$_Player_$319_memory_ptr_to_t_struct$_Player_$319_memory_ptr: {
          entryPoint: 1640,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        abi_encodeUpdatedPos_t_struct$_Player_$319_storage_to_t_struct$_Player_$319_memory_ptr: {
          entryPoint: 1664,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        abi_encode_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack:
          {
            entryPoint: 1688,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
          },
        abi_encode_t_array$_t_struct$_Player_$319_storage_$dyn_storage_to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack:
          {
            entryPoint: 1782,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
          },
        abi_encode_t_bool_to_t_bool_fromStack: {
          entryPoint: 1875,
          id: null,
          parameterSlots: 2,
          returnSlots: 0,
        },
        abi_encode_t_struct$_Player_$319_memory_ptr_to_t_struct$_Player_$319_memory_ptr: {
          entryPoint: 1890,
          id: null,
          parameterSlots: 2,
          returnSlots: 0,
        },
        abi_encode_t_struct$_Player_$319_storage_to_t_struct$_Player_$319_memory_ptr: {
          entryPoint: 1937,
          id: null,
          parameterSlots: 2,
          returnSlots: 0,
        },
        abi_encode_t_uint256_to_t_uint256: {
          entryPoint: 2008,
          id: null,
          parameterSlots: 2,
          returnSlots: 0,
        },
        abi_encode_t_uint256_to_t_uint256_fromStack: {
          entryPoint: 2023,
          id: null,
          parameterSlots: 2,
          returnSlots: 0,
        },
        abi_encode_tuple_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr__fromStack_reversed:
          {
            entryPoint: 2038,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
          },
        abi_encode_tuple_t_array$_t_struct$_Player_$319_storage_$dyn_storage__to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr__fromStack_reversed:
          {
            entryPoint: 2072,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
          },
        abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed: {
          entryPoint: 2106,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed: {
          entryPoint: 2133,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed: {
          entryPoint: 2160,
          id: null,
          parameterSlots: 3,
          returnSlots: 1,
        },
        allocate_unbounded: {
          entryPoint: null,
          id: null,
          parameterSlots: 0,
          returnSlots: 1,
        },
        array_dataslot_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr: {
          entryPoint: 2201,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        array_dataslot_t_array$_t_struct$_Player_$319_storage_$dyn_storage: {
          entryPoint: 2217,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        array_length_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr: {
          entryPoint: 2238,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        array_length_t_array$_t_struct$_Player_$319_storage_$dyn_storage: {
          entryPoint: 2249,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        array_nextElement_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr: {
          entryPoint: 2260,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        array_nextElement_t_array$_t_struct$_Player_$319_storage_$dyn_storage: {
          entryPoint: 2273,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        array_storeLengthForEncoding_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack:
          {
            entryPoint: 2286,
            id: null,
            parameterSlots: 2,
            returnSlots: 1,
          },
        checked_add_t_uint256: {
          entryPoint: 2303,
          id: null,
          parameterSlots: 2,
          returnSlots: 1,
        },
        cleanup_from_storage_t_uint256: {
          entryPoint: 2389,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        cleanup_t_address: {
          entryPoint: 2399,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        cleanup_t_bool: {
          entryPoint: 2417,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        cleanup_t_uint160: {
          entryPoint: 2429,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        cleanup_t_uint256: {
          entryPoint: 2461,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        extract_from_storage_value_offset_0t_uint256: {
          entryPoint: 2471,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        panic_error_0x11: {
          entryPoint: 2497,
          id: null,
          parameterSlots: 0,
          returnSlots: 0,
        },
        revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db: {
          entryPoint: null,
          id: null,
          parameterSlots: 0,
          returnSlots: 0,
        },
        revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b: {
          entryPoint: 2544,
          id: null,
          parameterSlots: 0,
          returnSlots: 0,
        },
        shift_right_0_unsigned: {
          entryPoint: 2549,
          id: null,
          parameterSlots: 1,
          returnSlots: 1,
        },
        validator_revert_t_address: {
          entryPoint: 2562,
          id: null,
          parameterSlots: 1,
          returnSlots: 0,
        },
        validator_revert_t_uint256: {
          entryPoint: 2585,
          id: null,
          parameterSlots: 1,
          returnSlots: 0,
        },
      },
      generatedSources: [
        {
          ast: {
            nodeType: 'YulBlock',
            src: '0:9750:4',
            statements: [
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '59:87:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '69:29:4',
                      value: {
                        arguments: [
                          {
                            name: 'offset',
                            nodeType: 'YulIdentifier',
                            src: '91:6:4',
                          },
                        ],
                        functionName: {
                          name: 'calldataload',
                          nodeType: 'YulIdentifier',
                          src: '78:12:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '78:20:4',
                      },
                      variableNames: [
                        {
                          name: 'value',
                          nodeType: 'YulIdentifier',
                          src: '69:5:4',
                        },
                      ],
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '134:5:4',
                          },
                        ],
                        functionName: {
                          name: 'validator_revert_t_address',
                          nodeType: 'YulIdentifier',
                          src: '107:26:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '107:33:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '107:33:4',
                    },
                  ],
                },
                name: 'abi_decode_t_address',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'offset',
                    nodeType: 'YulTypedName',
                    src: '37:6:4',
                    type: '',
                  },
                  {
                    name: 'end',
                    nodeType: 'YulTypedName',
                    src: '45:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '53:5:4',
                    type: '',
                  },
                ],
                src: '7:139:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '204:87:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '214:29:4',
                      value: {
                        arguments: [
                          {
                            name: 'offset',
                            nodeType: 'YulIdentifier',
                            src: '236:6:4',
                          },
                        ],
                        functionName: {
                          name: 'calldataload',
                          nodeType: 'YulIdentifier',
                          src: '223:12:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '223:20:4',
                      },
                      variableNames: [
                        {
                          name: 'value',
                          nodeType: 'YulIdentifier',
                          src: '214:5:4',
                        },
                      ],
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '279:5:4',
                          },
                        ],
                        functionName: {
                          name: 'validator_revert_t_uint256',
                          nodeType: 'YulIdentifier',
                          src: '252:26:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '252:33:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '252:33:4',
                    },
                  ],
                },
                name: 'abi_decode_t_uint256',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'offset',
                    nodeType: 'YulTypedName',
                    src: '182:6:4',
                    type: '',
                  },
                  {
                    name: 'end',
                    nodeType: 'YulTypedName',
                    src: '190:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '198:5:4',
                    type: '',
                  },
                ],
                src: '152:139:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '363:263:4',
                  statements: [
                    {
                      body: {
                        nodeType: 'YulBlock',
                        src: '409:83:4',
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
                                nodeType: 'YulIdentifier',
                                src: '411:77:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '411:79:4',
                            },
                            nodeType: 'YulExpressionStatement',
                            src: '411:79:4',
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'dataEnd',
                                nodeType: 'YulIdentifier',
                                src: '384:7:4',
                              },
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '393:9:4',
                              },
                            ],
                            functionName: {
                              name: 'sub',
                              nodeType: 'YulIdentifier',
                              src: '380:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '380:23:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '405:2:4',
                            type: '',
                            value: '32',
                          },
                        ],
                        functionName: {
                          name: 'slt',
                          nodeType: 'YulIdentifier',
                          src: '376:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '376:32:4',
                      },
                      nodeType: 'YulIf',
                      src: '373:119:4',
                    },
                    {
                      nodeType: 'YulBlock',
                      src: '502:117:4',
                      statements: [
                        {
                          nodeType: 'YulVariableDeclaration',
                          src: '517:15:4',
                          value: {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '531:1:4',
                            type: '',
                            value: '0',
                          },
                          variables: [
                            {
                              name: 'offset',
                              nodeType: 'YulTypedName',
                              src: '521:6:4',
                              type: '',
                            },
                          ],
                        },
                        {
                          nodeType: 'YulAssignment',
                          src: '546:63:4',
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: 'headStart',
                                    nodeType: 'YulIdentifier',
                                    src: '581:9:4',
                                  },
                                  {
                                    name: 'offset',
                                    nodeType: 'YulIdentifier',
                                    src: '592:6:4',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '577:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '577:22:4',
                              },
                              {
                                name: 'dataEnd',
                                nodeType: 'YulIdentifier',
                                src: '601:7:4',
                              },
                            ],
                            functionName: {
                              name: 'abi_decode_t_address',
                              nodeType: 'YulIdentifier',
                              src: '556:20:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '556:53:4',
                          },
                          variableNames: [
                            {
                              name: 'value0',
                              nodeType: 'YulIdentifier',
                              src: '546:6:4',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_decode_tuple_t_address',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'headStart',
                    nodeType: 'YulTypedName',
                    src: '333:9:4',
                    type: '',
                  },
                  {
                    name: 'dataEnd',
                    nodeType: 'YulTypedName',
                    src: '344:7:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'value0',
                    nodeType: 'YulTypedName',
                    src: '356:6:4',
                    type: '',
                  },
                ],
                src: '297:329:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '698:263:4',
                  statements: [
                    {
                      body: {
                        nodeType: 'YulBlock',
                        src: '744:83:4',
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
                                nodeType: 'YulIdentifier',
                                src: '746:77:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '746:79:4',
                            },
                            nodeType: 'YulExpressionStatement',
                            src: '746:79:4',
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'dataEnd',
                                nodeType: 'YulIdentifier',
                                src: '719:7:4',
                              },
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '728:9:4',
                              },
                            ],
                            functionName: {
                              name: 'sub',
                              nodeType: 'YulIdentifier',
                              src: '715:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '715:23:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '740:2:4',
                            type: '',
                            value: '32',
                          },
                        ],
                        functionName: {
                          name: 'slt',
                          nodeType: 'YulIdentifier',
                          src: '711:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '711:32:4',
                      },
                      nodeType: 'YulIf',
                      src: '708:119:4',
                    },
                    {
                      nodeType: 'YulBlock',
                      src: '837:117:4',
                      statements: [
                        {
                          nodeType: 'YulVariableDeclaration',
                          src: '852:15:4',
                          value: {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '866:1:4',
                            type: '',
                            value: '0',
                          },
                          variables: [
                            {
                              name: 'offset',
                              nodeType: 'YulTypedName',
                              src: '856:6:4',
                              type: '',
                            },
                          ],
                        },
                        {
                          nodeType: 'YulAssignment',
                          src: '881:63:4',
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: 'headStart',
                                    nodeType: 'YulIdentifier',
                                    src: '916:9:4',
                                  },
                                  {
                                    name: 'offset',
                                    nodeType: 'YulIdentifier',
                                    src: '927:6:4',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '912:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '912:22:4',
                              },
                              {
                                name: 'dataEnd',
                                nodeType: 'YulIdentifier',
                                src: '936:7:4',
                              },
                            ],
                            functionName: {
                              name: 'abi_decode_t_uint256',
                              nodeType: 'YulIdentifier',
                              src: '891:20:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '891:53:4',
                          },
                          variableNames: [
                            {
                              name: 'value0',
                              nodeType: 'YulIdentifier',
                              src: '881:6:4',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_decode_tuple_t_uint256',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'headStart',
                    nodeType: 'YulTypedName',
                    src: '668:9:4',
                    type: '',
                  },
                  {
                    name: 'dataEnd',
                    nodeType: 'YulTypedName',
                    src: '679:7:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'value0',
                    nodeType: 'YulTypedName',
                    src: '691:6:4',
                    type: '',
                  },
                ],
                src: '632:329:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '1093:145:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'value0',
                            nodeType: 'YulIdentifier',
                            src: '1183:6:4',
                          },
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '1191:3:4',
                          },
                        ],
                        functionName: {
                          name: 'abi_encode_t_struct$_Player_$319_memory_ptr_to_t_struct$_Player_$319_memory_ptr',
                          nodeType: 'YulIdentifier',
                          src: '1103:79:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1103:92:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '1103:92:4',
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '1204:28:4',
                      value: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '1222:3:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '1227:4:4',
                            type: '',
                            value: '0x40',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '1218:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1218:14:4',
                      },
                      variableNames: [
                        {
                          name: 'updatedPos',
                          nodeType: 'YulIdentifier',
                          src: '1204:10:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_encodeUpdatedPos_t_struct$_Player_$319_memory_ptr_to_t_struct$_Player_$319_memory_ptr',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value0',
                    nodeType: 'YulTypedName',
                    src: '1066:6:4',
                    type: '',
                  },
                  {
                    name: 'pos',
                    nodeType: 'YulTypedName',
                    src: '1074:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'updatedPos',
                    nodeType: 'YulTypedName',
                    src: '1082:10:4',
                    type: '',
                  },
                ],
                src: '967:271:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '1367:142:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'value0',
                            nodeType: 'YulIdentifier',
                            src: '1454:6:4',
                          },
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '1462:3:4',
                          },
                        ],
                        functionName: {
                          name: 'abi_encode_t_struct$_Player_$319_storage_to_t_struct$_Player_$319_memory_ptr',
                          nodeType: 'YulIdentifier',
                          src: '1377:76:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1377:89:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '1377:89:4',
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '1475:28:4',
                      value: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '1493:3:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '1498:4:4',
                            type: '',
                            value: '0x40',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '1489:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1489:14:4',
                      },
                      variableNames: [
                        {
                          name: 'updatedPos',
                          nodeType: 'YulIdentifier',
                          src: '1475:10:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_encodeUpdatedPos_t_struct$_Player_$319_storage_to_t_struct$_Player_$319_memory_ptr',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value0',
                    nodeType: 'YulTypedName',
                    src: '1340:6:4',
                    type: '',
                  },
                  {
                    name: 'pos',
                    nodeType: 'YulTypedName',
                    src: '1348:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'updatedPos',
                    nodeType: 'YulTypedName',
                    src: '1356:10:4',
                    type: '',
                  },
                ],
                src: '1244:265:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '1737:746:4',
                  statements: [
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '1747:91:4',
                      value: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '1832:5:4',
                          },
                        ],
                        functionName: {
                          name: 'array_length_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr',
                          nodeType: 'YulIdentifier',
                          src: '1761:70:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1761:77:4',
                      },
                      variables: [
                        {
                          name: 'length',
                          nodeType: 'YulTypedName',
                          src: '1751:6:4',
                          type: '',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '1847:116:4',
                      value: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '1951:3:4',
                          },
                          {
                            name: 'length',
                            nodeType: 'YulIdentifier',
                            src: '1956:6:4',
                          },
                        ],
                        functionName: {
                          name: 'array_storeLengthForEncoding_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack',
                          nodeType: 'YulIdentifier',
                          src: '1854:96:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1854:109:4',
                      },
                      variableNames: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '1847:3:4',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '1972:94:4',
                      value: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '2060:5:4',
                          },
                        ],
                        functionName: {
                          name: 'array_dataslot_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr',
                          nodeType: 'YulIdentifier',
                          src: '1987:72:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '1987:79:4',
                      },
                      variables: [
                        {
                          name: 'baseRef',
                          nodeType: 'YulTypedName',
                          src: '1976:7:4',
                          type: '',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '2075:21:4',
                      value: {
                        name: 'baseRef',
                        nodeType: 'YulIdentifier',
                        src: '2089:7:4',
                      },
                      variables: [
                        {
                          name: 'srcPtr',
                          nodeType: 'YulTypedName',
                          src: '2079:6:4',
                          type: '',
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: 'YulBlock',
                        src: '2165:293:4',
                        statements: [
                          {
                            nodeType: 'YulVariableDeclaration',
                            src: '2179:34:4',
                            value: {
                              arguments: [
                                {
                                  name: 'srcPtr',
                                  nodeType: 'YulIdentifier',
                                  src: '2206:6:4',
                                },
                              ],
                              functionName: {
                                name: 'mload',
                                nodeType: 'YulIdentifier',
                                src: '2200:5:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '2200:13:4',
                            },
                            variables: [
                              {
                                name: 'elementValue0',
                                nodeType: 'YulTypedName',
                                src: '2183:13:4',
                                type: '',
                              },
                            ],
                          },
                          {
                            nodeType: 'YulAssignment',
                            src: '2226:116:4',
                            value: {
                              arguments: [
                                {
                                  name: 'elementValue0',
                                  nodeType: 'YulIdentifier',
                                  src: '2323:13:4',
                                },
                                {
                                  name: 'pos',
                                  nodeType: 'YulIdentifier',
                                  src: '2338:3:4',
                                },
                              ],
                              functionName: {
                                name: 'abi_encodeUpdatedPos_t_struct$_Player_$319_memory_ptr_to_t_struct$_Player_$319_memory_ptr',
                                nodeType: 'YulIdentifier',
                                src: '2233:89:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '2233:109:4',
                            },
                            variableNames: [
                              {
                                name: 'pos',
                                nodeType: 'YulIdentifier',
                                src: '2226:3:4',
                              },
                            ],
                          },
                          {
                            nodeType: 'YulAssignment',
                            src: '2355:93:4',
                            value: {
                              arguments: [
                                {
                                  name: 'srcPtr',
                                  nodeType: 'YulIdentifier',
                                  src: '2441:6:4',
                                },
                              ],
                              functionName: {
                                name: 'array_nextElement_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr',
                                nodeType: 'YulIdentifier',
                                src: '2365:75:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '2365:83:4',
                            },
                            variableNames: [
                              {
                                name: 'srcPtr',
                                nodeType: 'YulIdentifier',
                                src: '2355:6:4',
                              },
                            ],
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: 'i',
                            nodeType: 'YulIdentifier',
                            src: '2127:1:4',
                          },
                          {
                            name: 'length',
                            nodeType: 'YulIdentifier',
                            src: '2130:6:4',
                          },
                        ],
                        functionName: {
                          name: 'lt',
                          nodeType: 'YulIdentifier',
                          src: '2124:2:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '2124:13:4',
                      },
                      nodeType: 'YulForLoop',
                      post: {
                        nodeType: 'YulBlock',
                        src: '2138:18:4',
                        statements: [
                          {
                            nodeType: 'YulAssignment',
                            src: '2140:14:4',
                            value: {
                              arguments: [
                                {
                                  name: 'i',
                                  nodeType: 'YulIdentifier',
                                  src: '2149:1:4',
                                },
                                {
                                  kind: 'number',
                                  nodeType: 'YulLiteral',
                                  src: '2152:1:4',
                                  type: '',
                                  value: '1',
                                },
                              ],
                              functionName: {
                                name: 'add',
                                nodeType: 'YulIdentifier',
                                src: '2145:3:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '2145:9:4',
                            },
                            variableNames: [
                              {
                                name: 'i',
                                nodeType: 'YulIdentifier',
                                src: '2140:1:4',
                              },
                            ],
                          },
                        ],
                      },
                      pre: {
                        nodeType: 'YulBlock',
                        src: '2109:14:4',
                        statements: [
                          {
                            nodeType: 'YulVariableDeclaration',
                            src: '2111:10:4',
                            value: {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '2120:1:4',
                              type: '',
                              value: '0',
                            },
                            variables: [
                              {
                                name: 'i',
                                nodeType: 'YulTypedName',
                                src: '2115:1:4',
                                type: '',
                              },
                            ],
                          },
                        ],
                      },
                      src: '2105:353:4',
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '2467:10:4',
                      value: {
                        name: 'pos',
                        nodeType: 'YulIdentifier',
                        src: '2474:3:4',
                      },
                      variableNames: [
                        {
                          name: 'end',
                          nodeType: 'YulIdentifier',
                          src: '2467:3:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_encode_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '1716:5:4',
                    type: '',
                  },
                  {
                    name: 'pos',
                    nodeType: 'YulTypedName',
                    src: '1723:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'end',
                    nodeType: 'YulTypedName',
                    src: '1732:3:4',
                    type: '',
                  },
                ],
                src: '1567:916:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '2705:718:4',
                  statements: [
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '2715:85:4',
                      value: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '2794:5:4',
                          },
                        ],
                        functionName: {
                          name: 'array_length_t_array$_t_struct$_Player_$319_storage_$dyn_storage',
                          nodeType: 'YulIdentifier',
                          src: '2729:64:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '2729:71:4',
                      },
                      variables: [
                        {
                          name: 'length',
                          nodeType: 'YulTypedName',
                          src: '2719:6:4',
                          type: '',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '2809:116:4',
                      value: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '2913:3:4',
                          },
                          {
                            name: 'length',
                            nodeType: 'YulIdentifier',
                            src: '2918:6:4',
                          },
                        ],
                        functionName: {
                          name: 'array_storeLengthForEncoding_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack',
                          nodeType: 'YulIdentifier',
                          src: '2816:96:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '2816:109:4',
                      },
                      variableNames: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '2809:3:4',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '2934:88:4',
                      value: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '3016:5:4',
                          },
                        ],
                        functionName: {
                          name: 'array_dataslot_t_array$_t_struct$_Player_$319_storage_$dyn_storage',
                          nodeType: 'YulIdentifier',
                          src: '2949:66:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '2949:73:4',
                      },
                      variables: [
                        {
                          name: 'baseRef',
                          nodeType: 'YulTypedName',
                          src: '2938:7:4',
                          type: '',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '3031:21:4',
                      value: {
                        name: 'baseRef',
                        nodeType: 'YulIdentifier',
                        src: '3045:7:4',
                      },
                      variables: [
                        {
                          name: 'srcPtr',
                          nodeType: 'YulTypedName',
                          src: '3035:6:4',
                          type: '',
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: 'YulBlock',
                        src: '3121:277:4',
                        statements: [
                          {
                            nodeType: 'YulVariableDeclaration',
                            src: '3135:27:4',
                            value: {
                              name: 'srcPtr',
                              nodeType: 'YulIdentifier',
                              src: '3156:6:4',
                            },
                            variables: [
                              {
                                name: 'elementValue0',
                                nodeType: 'YulTypedName',
                                src: '3139:13:4',
                                type: '',
                              },
                            ],
                          },
                          {
                            nodeType: 'YulAssignment',
                            src: '3175:113:4',
                            value: {
                              arguments: [
                                {
                                  name: 'elementValue0',
                                  nodeType: 'YulIdentifier',
                                  src: '3269:13:4',
                                },
                                {
                                  name: 'pos',
                                  nodeType: 'YulIdentifier',
                                  src: '3284:3:4',
                                },
                              ],
                              functionName: {
                                name: 'abi_encodeUpdatedPos_t_struct$_Player_$319_storage_to_t_struct$_Player_$319_memory_ptr',
                                nodeType: 'YulIdentifier',
                                src: '3182:86:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '3182:106:4',
                            },
                            variableNames: [
                              {
                                name: 'pos',
                                nodeType: 'YulIdentifier',
                                src: '3175:3:4',
                              },
                            ],
                          },
                          {
                            nodeType: 'YulAssignment',
                            src: '3301:87:4',
                            value: {
                              arguments: [
                                {
                                  name: 'srcPtr',
                                  nodeType: 'YulIdentifier',
                                  src: '3381:6:4',
                                },
                              ],
                              functionName: {
                                name: 'array_nextElement_t_array$_t_struct$_Player_$319_storage_$dyn_storage',
                                nodeType: 'YulIdentifier',
                                src: '3311:69:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '3311:77:4',
                            },
                            variableNames: [
                              {
                                name: 'srcPtr',
                                nodeType: 'YulIdentifier',
                                src: '3301:6:4',
                              },
                            ],
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: 'i',
                            nodeType: 'YulIdentifier',
                            src: '3083:1:4',
                          },
                          {
                            name: 'length',
                            nodeType: 'YulIdentifier',
                            src: '3086:6:4',
                          },
                        ],
                        functionName: {
                          name: 'lt',
                          nodeType: 'YulIdentifier',
                          src: '3080:2:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '3080:13:4',
                      },
                      nodeType: 'YulForLoop',
                      post: {
                        nodeType: 'YulBlock',
                        src: '3094:18:4',
                        statements: [
                          {
                            nodeType: 'YulAssignment',
                            src: '3096:14:4',
                            value: {
                              arguments: [
                                {
                                  name: 'i',
                                  nodeType: 'YulIdentifier',
                                  src: '3105:1:4',
                                },
                                {
                                  kind: 'number',
                                  nodeType: 'YulLiteral',
                                  src: '3108:1:4',
                                  type: '',
                                  value: '1',
                                },
                              ],
                              functionName: {
                                name: 'add',
                                nodeType: 'YulIdentifier',
                                src: '3101:3:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '3101:9:4',
                            },
                            variableNames: [
                              {
                                name: 'i',
                                nodeType: 'YulIdentifier',
                                src: '3096:1:4',
                              },
                            ],
                          },
                        ],
                      },
                      pre: {
                        nodeType: 'YulBlock',
                        src: '3065:14:4',
                        statements: [
                          {
                            nodeType: 'YulVariableDeclaration',
                            src: '3067:10:4',
                            value: {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '3076:1:4',
                              type: '',
                              value: '0',
                            },
                            variables: [
                              {
                                name: 'i',
                                nodeType: 'YulTypedName',
                                src: '3071:1:4',
                                type: '',
                              },
                            ],
                          },
                        ],
                      },
                      src: '3061:337:4',
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '3407:10:4',
                      value: {
                        name: 'pos',
                        nodeType: 'YulIdentifier',
                        src: '3414:3:4',
                      },
                      variableNames: [
                        {
                          name: 'end',
                          nodeType: 'YulIdentifier',
                          src: '3407:3:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_encode_t_array$_t_struct$_Player_$319_storage_$dyn_storage_to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '2684:5:4',
                    type: '',
                  },
                  {
                    name: 'pos',
                    nodeType: 'YulTypedName',
                    src: '2691:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'end',
                    nodeType: 'YulTypedName',
                    src: '2700:3:4',
                    type: '',
                  },
                ],
                src: '2541:882:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '3488:50:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '3505:3:4',
                          },
                          {
                            arguments: [
                              {
                                name: 'value',
                                nodeType: 'YulIdentifier',
                                src: '3525:5:4',
                              },
                            ],
                            functionName: {
                              name: 'cleanup_t_bool',
                              nodeType: 'YulIdentifier',
                              src: '3510:14:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '3510:21:4',
                          },
                        ],
                        functionName: {
                          name: 'mstore',
                          nodeType: 'YulIdentifier',
                          src: '3498:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '3498:34:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '3498:34:4',
                    },
                  ],
                },
                name: 'abi_encode_t_bool_to_t_bool_fromStack',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '3476:5:4',
                    type: '',
                  },
                  {
                    name: 'pos',
                    nodeType: 'YulTypedName',
                    src: '3483:3:4',
                    type: '',
                  },
                ],
                src: '3429:109:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '3694:390:4',
                  statements: [
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '3704:26:4',
                      value: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '3720:3:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '3725:4:4',
                            type: '',
                            value: '0x40',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '3716:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '3716:14:4',
                      },
                      variables: [
                        {
                          name: 'tail',
                          nodeType: 'YulTypedName',
                          src: '3708:4:4',
                          type: '',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulBlock',
                      src: '3740:162:4',
                      statements: [
                        {
                          nodeType: 'YulVariableDeclaration',
                          src: '3773:43:4',
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: 'value',
                                    nodeType: 'YulIdentifier',
                                    src: '3803:5:4',
                                  },
                                  {
                                    kind: 'number',
                                    nodeType: 'YulLiteral',
                                    src: '3810:4:4',
                                    type: '',
                                    value: '0x00',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '3799:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '3799:16:4',
                              },
                            ],
                            functionName: {
                              name: 'mload',
                              nodeType: 'YulIdentifier',
                              src: '3793:5:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '3793:23:4',
                          },
                          variables: [
                            {
                              name: 'memberValue0',
                              nodeType: 'YulTypedName',
                              src: '3777:12:4',
                              type: '',
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: 'memberValue0',
                                nodeType: 'YulIdentifier',
                                src: '3863:12:4',
                              },
                              {
                                arguments: [
                                  {
                                    name: 'pos',
                                    nodeType: 'YulIdentifier',
                                    src: '3881:3:4',
                                  },
                                  {
                                    kind: 'number',
                                    nodeType: 'YulLiteral',
                                    src: '3886:4:4',
                                    type: '',
                                    value: '0x00',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '3877:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '3877:14:4',
                              },
                            ],
                            functionName: {
                              name: 'abi_encode_t_uint256_to_t_uint256',
                              nodeType: 'YulIdentifier',
                              src: '3829:33:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '3829:63:4',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '3829:63:4',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulBlock',
                      src: '3912:165:4',
                      statements: [
                        {
                          nodeType: 'YulVariableDeclaration',
                          src: '3948:43:4',
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: 'value',
                                    nodeType: 'YulIdentifier',
                                    src: '3978:5:4',
                                  },
                                  {
                                    kind: 'number',
                                    nodeType: 'YulLiteral',
                                    src: '3985:4:4',
                                    type: '',
                                    value: '0x20',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '3974:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '3974:16:4',
                              },
                            ],
                            functionName: {
                              name: 'mload',
                              nodeType: 'YulIdentifier',
                              src: '3968:5:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '3968:23:4',
                          },
                          variables: [
                            {
                              name: 'memberValue0',
                              nodeType: 'YulTypedName',
                              src: '3952:12:4',
                              type: '',
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: 'memberValue0',
                                nodeType: 'YulIdentifier',
                                src: '4038:12:4',
                              },
                              {
                                arguments: [
                                  {
                                    name: 'pos',
                                    nodeType: 'YulIdentifier',
                                    src: '4056:3:4',
                                  },
                                  {
                                    kind: 'number',
                                    nodeType: 'YulLiteral',
                                    src: '4061:4:4',
                                    type: '',
                                    value: '0x20',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '4052:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '4052:14:4',
                              },
                            ],
                            functionName: {
                              name: 'abi_encode_t_uint256_to_t_uint256',
                              nodeType: 'YulIdentifier',
                              src: '4004:33:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '4004:63:4',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '4004:63:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_encode_t_struct$_Player_$319_memory_ptr_to_t_struct$_Player_$319_memory_ptr',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '3681:5:4',
                    type: '',
                  },
                  {
                    name: 'pos',
                    nodeType: 'YulTypedName',
                    src: '3688:3:4',
                    type: '',
                  },
                ],
                src: '3592:492:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '4237:577:4',
                  statements: [
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '4247:26:4',
                      value: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '4263:3:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '4268:4:4',
                            type: '',
                            value: '0x40',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '4259:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '4259:14:4',
                      },
                      variables: [
                        {
                          name: 'tail',
                          nodeType: 'YulTypedName',
                          src: '4251:4:4',
                          type: '',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulVariableDeclaration',
                      src: '4282:18:4',
                      value: {
                        kind: 'number',
                        nodeType: 'YulLiteral',
                        src: '4299:1:4',
                        type: '',
                        value: '0',
                      },
                      variables: [
                        {
                          name: 'slotValue',
                          nodeType: 'YulTypedName',
                          src: '4286:9:4',
                          type: '',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulBlock',
                      src: '4310:242:4',
                      statements: [
                        {
                          nodeType: 'YulAssignment',
                          src: '4342:36:4',
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: 'value',
                                    nodeType: 'YulIdentifier',
                                    src: '4365:5:4',
                                  },
                                  {
                                    kind: 'number',
                                    nodeType: 'YulLiteral',
                                    src: '4372:4:4',
                                    type: '',
                                    value: '0x00',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '4361:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '4361:16:4',
                              },
                            ],
                            functionName: {
                              name: 'sload',
                              nodeType: 'YulIdentifier',
                              src: '4355:5:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '4355:23:4',
                          },
                          variableNames: [
                            {
                              name: 'slotValue',
                              nodeType: 'YulIdentifier',
                              src: '4342:9:4',
                            },
                          ],
                        },
                        {
                          nodeType: 'YulVariableDeclaration',
                          src: '4391:75:4',
                          value: {
                            arguments: [
                              {
                                name: 'slotValue',
                                nodeType: 'YulIdentifier',
                                src: '4456:9:4',
                              },
                            ],
                            functionName: {
                              name: 'extract_from_storage_value_offset_0t_uint256',
                              nodeType: 'YulIdentifier',
                              src: '4411:44:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '4411:55:4',
                          },
                          variables: [
                            {
                              name: 'memberValue0',
                              nodeType: 'YulTypedName',
                              src: '4395:12:4',
                              type: '',
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: 'memberValue0',
                                nodeType: 'YulIdentifier',
                                src: '4513:12:4',
                              },
                              {
                                arguments: [
                                  {
                                    name: 'pos',
                                    nodeType: 'YulIdentifier',
                                    src: '4531:3:4',
                                  },
                                  {
                                    kind: 'number',
                                    nodeType: 'YulLiteral',
                                    src: '4536:4:4',
                                    type: '',
                                    value: '0x00',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '4527:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '4527:14:4',
                              },
                            ],
                            functionName: {
                              name: 'abi_encode_t_uint256_to_t_uint256',
                              nodeType: 'YulIdentifier',
                              src: '4479:33:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '4479:63:4',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '4479:63:4',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulBlock',
                      src: '4562:245:4',
                      statements: [
                        {
                          nodeType: 'YulAssignment',
                          src: '4597:36:4',
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: 'value',
                                    nodeType: 'YulIdentifier',
                                    src: '4620:5:4',
                                  },
                                  {
                                    kind: 'number',
                                    nodeType: 'YulLiteral',
                                    src: '4627:4:4',
                                    type: '',
                                    value: '0x01',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '4616:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '4616:16:4',
                              },
                            ],
                            functionName: {
                              name: 'sload',
                              nodeType: 'YulIdentifier',
                              src: '4610:5:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '4610:23:4',
                          },
                          variableNames: [
                            {
                              name: 'slotValue',
                              nodeType: 'YulIdentifier',
                              src: '4597:9:4',
                            },
                          ],
                        },
                        {
                          nodeType: 'YulVariableDeclaration',
                          src: '4646:75:4',
                          value: {
                            arguments: [
                              {
                                name: 'slotValue',
                                nodeType: 'YulIdentifier',
                                src: '4711:9:4',
                              },
                            ],
                            functionName: {
                              name: 'extract_from_storage_value_offset_0t_uint256',
                              nodeType: 'YulIdentifier',
                              src: '4666:44:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '4666:55:4',
                          },
                          variables: [
                            {
                              name: 'memberValue0',
                              nodeType: 'YulTypedName',
                              src: '4650:12:4',
                              type: '',
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: 'memberValue0',
                                nodeType: 'YulIdentifier',
                                src: '4768:12:4',
                              },
                              {
                                arguments: [
                                  {
                                    name: 'pos',
                                    nodeType: 'YulIdentifier',
                                    src: '4786:3:4',
                                  },
                                  {
                                    kind: 'number',
                                    nodeType: 'YulLiteral',
                                    src: '4791:4:4',
                                    type: '',
                                    value: '0x20',
                                  },
                                ],
                                functionName: {
                                  name: 'add',
                                  nodeType: 'YulIdentifier',
                                  src: '4782:3:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '4782:14:4',
                              },
                            ],
                            functionName: {
                              name: 'abi_encode_t_uint256_to_t_uint256',
                              nodeType: 'YulIdentifier',
                              src: '4734:33:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '4734:63:4',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '4734:63:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_encode_t_struct$_Player_$319_storage_to_t_struct$_Player_$319_memory_ptr',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '4224:5:4',
                    type: '',
                  },
                  {
                    name: 'pos',
                    nodeType: 'YulTypedName',
                    src: '4231:3:4',
                    type: '',
                  },
                ],
                src: '4138:676:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '4875:53:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '4892:3:4',
                          },
                          {
                            arguments: [
                              {
                                name: 'value',
                                nodeType: 'YulIdentifier',
                                src: '4915:5:4',
                              },
                            ],
                            functionName: {
                              name: 'cleanup_t_uint256',
                              nodeType: 'YulIdentifier',
                              src: '4897:17:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '4897:24:4',
                          },
                        ],
                        functionName: {
                          name: 'mstore',
                          nodeType: 'YulIdentifier',
                          src: '4885:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '4885:37:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '4885:37:4',
                    },
                  ],
                },
                name: 'abi_encode_t_uint256_to_t_uint256',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '4863:5:4',
                    type: '',
                  },
                  {
                    name: 'pos',
                    nodeType: 'YulTypedName',
                    src: '4870:3:4',
                    type: '',
                  },
                ],
                src: '4820:108:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '4999:53:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '5016:3:4',
                          },
                          {
                            arguments: [
                              {
                                name: 'value',
                                nodeType: 'YulIdentifier',
                                src: '5039:5:4',
                              },
                            ],
                            functionName: {
                              name: 'cleanup_t_uint256',
                              nodeType: 'YulIdentifier',
                              src: '5021:17:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '5021:24:4',
                          },
                        ],
                        functionName: {
                          name: 'mstore',
                          nodeType: 'YulIdentifier',
                          src: '5009:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '5009:37:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '5009:37:4',
                    },
                  ],
                },
                name: 'abi_encode_t_uint256_to_t_uint256_fromStack',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '4987:5:4',
                    type: '',
                  },
                  {
                    name: 'pos',
                    nodeType: 'YulTypedName',
                    src: '4994:3:4',
                    type: '',
                  },
                ],
                src: '4934:118:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '5252:271:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '5262:26:4',
                      value: {
                        arguments: [
                          {
                            name: 'headStart',
                            nodeType: 'YulIdentifier',
                            src: '5274:9:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '5285:2:4',
                            type: '',
                            value: '32',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '5270:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '5270:18:4',
                      },
                      variableNames: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '5262:4:4',
                        },
                      ],
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '5309:9:4',
                              },
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '5320:1:4',
                                type: '',
                                value: '0',
                              },
                            ],
                            functionName: {
                              name: 'add',
                              nodeType: 'YulIdentifier',
                              src: '5305:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '5305:17:4',
                          },
                          {
                            arguments: [
                              {
                                name: 'tail',
                                nodeType: 'YulIdentifier',
                                src: '5328:4:4',
                              },
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '5334:9:4',
                              },
                            ],
                            functionName: {
                              name: 'sub',
                              nodeType: 'YulIdentifier',
                              src: '5324:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '5324:20:4',
                          },
                        ],
                        functionName: {
                          name: 'mstore',
                          nodeType: 'YulIdentifier',
                          src: '5298:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '5298:47:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '5298:47:4',
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '5354:162:4',
                      value: {
                        arguments: [
                          {
                            name: 'value0',
                            nodeType: 'YulIdentifier',
                            src: '5502:6:4',
                          },
                          {
                            name: 'tail',
                            nodeType: 'YulIdentifier',
                            src: '5511:4:4',
                          },
                        ],
                        functionName: {
                          name: 'abi_encode_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack',
                          nodeType: 'YulIdentifier',
                          src: '5362:139:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '5362:154:4',
                      },
                      variableNames: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '5354:4:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_encode_tuple_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr__fromStack_reversed',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'headStart',
                    nodeType: 'YulTypedName',
                    src: '5224:9:4',
                    type: '',
                  },
                  {
                    name: 'value0',
                    nodeType: 'YulTypedName',
                    src: '5236:6:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'tail',
                    nodeType: 'YulTypedName',
                    src: '5247:4:4',
                    type: '',
                  },
                ],
                src: '5058:465:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '5717:265:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '5727:26:4',
                      value: {
                        arguments: [
                          {
                            name: 'headStart',
                            nodeType: 'YulIdentifier',
                            src: '5739:9:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '5750:2:4',
                            type: '',
                            value: '32',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '5735:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '5735:18:4',
                      },
                      variableNames: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '5727:4:4',
                        },
                      ],
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '5774:9:4',
                              },
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '5785:1:4',
                                type: '',
                                value: '0',
                              },
                            ],
                            functionName: {
                              name: 'add',
                              nodeType: 'YulIdentifier',
                              src: '5770:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '5770:17:4',
                          },
                          {
                            arguments: [
                              {
                                name: 'tail',
                                nodeType: 'YulIdentifier',
                                src: '5793:4:4',
                              },
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '5799:9:4',
                              },
                            ],
                            functionName: {
                              name: 'sub',
                              nodeType: 'YulIdentifier',
                              src: '5789:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '5789:20:4',
                          },
                        ],
                        functionName: {
                          name: 'mstore',
                          nodeType: 'YulIdentifier',
                          src: '5763:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '5763:47:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '5763:47:4',
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '5819:156:4',
                      value: {
                        arguments: [
                          {
                            name: 'value0',
                            nodeType: 'YulIdentifier',
                            src: '5961:6:4',
                          },
                          {
                            name: 'tail',
                            nodeType: 'YulIdentifier',
                            src: '5970:4:4',
                          },
                        ],
                        functionName: {
                          name: 'abi_encode_t_array$_t_struct$_Player_$319_storage_$dyn_storage_to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack',
                          nodeType: 'YulIdentifier',
                          src: '5827:133:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '5827:148:4',
                      },
                      variableNames: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '5819:4:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'abi_encode_tuple_t_array$_t_struct$_Player_$319_storage_$dyn_storage__to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr__fromStack_reversed',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'headStart',
                    nodeType: 'YulTypedName',
                    src: '5689:9:4',
                    type: '',
                  },
                  {
                    name: 'value0',
                    nodeType: 'YulTypedName',
                    src: '5701:6:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'tail',
                    nodeType: 'YulTypedName',
                    src: '5712:4:4',
                    type: '',
                  },
                ],
                src: '5529:453:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '6080:118:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '6090:26:4',
                      value: {
                        arguments: [
                          {
                            name: 'headStart',
                            nodeType: 'YulIdentifier',
                            src: '6102:9:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '6113:2:4',
                            type: '',
                            value: '32',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '6098:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '6098:18:4',
                      },
                      variableNames: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '6090:4:4',
                        },
                      ],
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'value0',
                            nodeType: 'YulIdentifier',
                            src: '6164:6:4',
                          },
                          {
                            arguments: [
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '6177:9:4',
                              },
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '6188:1:4',
                                type: '',
                                value: '0',
                              },
                            ],
                            functionName: {
                              name: 'add',
                              nodeType: 'YulIdentifier',
                              src: '6173:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '6173:17:4',
                          },
                        ],
                        functionName: {
                          name: 'abi_encode_t_bool_to_t_bool_fromStack',
                          nodeType: 'YulIdentifier',
                          src: '6126:37:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '6126:65:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '6126:65:4',
                    },
                  ],
                },
                name: 'abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'headStart',
                    nodeType: 'YulTypedName',
                    src: '6052:9:4',
                    type: '',
                  },
                  {
                    name: 'value0',
                    nodeType: 'YulTypedName',
                    src: '6064:6:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'tail',
                    nodeType: 'YulTypedName',
                    src: '6075:4:4',
                    type: '',
                  },
                ],
                src: '5988:210:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '6302:124:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '6312:26:4',
                      value: {
                        arguments: [
                          {
                            name: 'headStart',
                            nodeType: 'YulIdentifier',
                            src: '6324:9:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '6335:2:4',
                            type: '',
                            value: '32',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '6320:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '6320:18:4',
                      },
                      variableNames: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '6312:4:4',
                        },
                      ],
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'value0',
                            nodeType: 'YulIdentifier',
                            src: '6392:6:4',
                          },
                          {
                            arguments: [
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '6405:9:4',
                              },
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '6416:1:4',
                                type: '',
                                value: '0',
                              },
                            ],
                            functionName: {
                              name: 'add',
                              nodeType: 'YulIdentifier',
                              src: '6401:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '6401:17:4',
                          },
                        ],
                        functionName: {
                          name: 'abi_encode_t_uint256_to_t_uint256_fromStack',
                          nodeType: 'YulIdentifier',
                          src: '6348:43:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '6348:71:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '6348:71:4',
                    },
                  ],
                },
                name: 'abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'headStart',
                    nodeType: 'YulTypedName',
                    src: '6274:9:4',
                    type: '',
                  },
                  {
                    name: 'value0',
                    nodeType: 'YulTypedName',
                    src: '6286:6:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'tail',
                    nodeType: 'YulTypedName',
                    src: '6297:4:4',
                    type: '',
                  },
                ],
                src: '6204:222:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '6558:206:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '6568:26:4',
                      value: {
                        arguments: [
                          {
                            name: 'headStart',
                            nodeType: 'YulIdentifier',
                            src: '6580:9:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '6591:2:4',
                            type: '',
                            value: '64',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '6576:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '6576:18:4',
                      },
                      variableNames: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '6568:4:4',
                        },
                      ],
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'value0',
                            nodeType: 'YulIdentifier',
                            src: '6648:6:4',
                          },
                          {
                            arguments: [
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '6661:9:4',
                              },
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '6672:1:4',
                                type: '',
                                value: '0',
                              },
                            ],
                            functionName: {
                              name: 'add',
                              nodeType: 'YulIdentifier',
                              src: '6657:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '6657:17:4',
                          },
                        ],
                        functionName: {
                          name: 'abi_encode_t_uint256_to_t_uint256_fromStack',
                          nodeType: 'YulIdentifier',
                          src: '6604:43:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '6604:71:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '6604:71:4',
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'value1',
                            nodeType: 'YulIdentifier',
                            src: '6729:6:4',
                          },
                          {
                            arguments: [
                              {
                                name: 'headStart',
                                nodeType: 'YulIdentifier',
                                src: '6742:9:4',
                              },
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '6753:2:4',
                                type: '',
                                value: '32',
                              },
                            ],
                            functionName: {
                              name: 'add',
                              nodeType: 'YulIdentifier',
                              src: '6738:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '6738:18:4',
                          },
                        ],
                        functionName: {
                          name: 'abi_encode_t_uint256_to_t_uint256_fromStack',
                          nodeType: 'YulIdentifier',
                          src: '6685:43:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '6685:72:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '6685:72:4',
                    },
                  ],
                },
                name: 'abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'headStart',
                    nodeType: 'YulTypedName',
                    src: '6522:9:4',
                    type: '',
                  },
                  {
                    name: 'value1',
                    nodeType: 'YulTypedName',
                    src: '6534:6:4',
                    type: '',
                  },
                  {
                    name: 'value0',
                    nodeType: 'YulTypedName',
                    src: '6542:6:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'tail',
                    nodeType: 'YulTypedName',
                    src: '6553:4:4',
                    type: '',
                  },
                ],
                src: '6432:332:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '6810:35:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '6820:19:4',
                      value: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '6836:2:4',
                            type: '',
                            value: '64',
                          },
                        ],
                        functionName: {
                          name: 'mload',
                          nodeType: 'YulIdentifier',
                          src: '6830:5:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '6830:9:4',
                      },
                      variableNames: [
                        {
                          name: 'memPtr',
                          nodeType: 'YulIdentifier',
                          src: '6820:6:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'allocate_unbounded',
                nodeType: 'YulFunctionDefinition',
                returnVariables: [
                  {
                    name: 'memPtr',
                    nodeType: 'YulTypedName',
                    src: '6803:6:4',
                    type: '',
                  },
                ],
                src: '6770:75:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '6946:60:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '6956:11:4',
                      value: {
                        name: 'ptr',
                        nodeType: 'YulIdentifier',
                        src: '6964:3:4',
                      },
                      variableNames: [
                        {
                          name: 'data',
                          nodeType: 'YulIdentifier',
                          src: '6956:4:4',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '6977:22:4',
                      value: {
                        arguments: [
                          {
                            name: 'ptr',
                            nodeType: 'YulIdentifier',
                            src: '6989:3:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '6994:4:4',
                            type: '',
                            value: '0x20',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '6985:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '6985:14:4',
                      },
                      variableNames: [
                        {
                          name: 'data',
                          nodeType: 'YulIdentifier',
                          src: '6977:4:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'array_dataslot_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'ptr',
                    nodeType: 'YulTypedName',
                    src: '6933:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'data',
                    nodeType: 'YulTypedName',
                    src: '6941:4:4',
                    type: '',
                  },
                ],
                src: '6851:155:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '7101:87:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '7111:11:4',
                      value: {
                        name: 'ptr',
                        nodeType: 'YulIdentifier',
                        src: '7119:3:4',
                      },
                      variableNames: [
                        {
                          name: 'data',
                          nodeType: 'YulIdentifier',
                          src: '7111:4:4',
                        },
                      ],
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '7139:1:4',
                            type: '',
                            value: '0',
                          },
                          {
                            name: 'ptr',
                            nodeType: 'YulIdentifier',
                            src: '7142:3:4',
                          },
                        ],
                        functionName: {
                          name: 'mstore',
                          nodeType: 'YulIdentifier',
                          src: '7132:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '7132:14:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '7132:14:4',
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '7155:26:4',
                      value: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '7173:1:4',
                            type: '',
                            value: '0',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '7176:4:4',
                            type: '',
                            value: '0x20',
                          },
                        ],
                        functionName: {
                          name: 'keccak256',
                          nodeType: 'YulIdentifier',
                          src: '7163:9:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '7163:18:4',
                      },
                      variableNames: [
                        {
                          name: 'data',
                          nodeType: 'YulIdentifier',
                          src: '7155:4:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'array_dataslot_t_array$_t_struct$_Player_$319_storage_$dyn_storage',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'ptr',
                    nodeType: 'YulTypedName',
                    src: '7088:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'data',
                    nodeType: 'YulTypedName',
                    src: '7096:4:4',
                    type: '',
                  },
                ],
                src: '7012:176:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '7291:40:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '7302:22:4',
                      value: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '7318:5:4',
                          },
                        ],
                        functionName: {
                          name: 'mload',
                          nodeType: 'YulIdentifier',
                          src: '7312:5:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '7312:12:4',
                      },
                      variableNames: [
                        {
                          name: 'length',
                          nodeType: 'YulIdentifier',
                          src: '7302:6:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'array_length_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '7274:5:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'length',
                    nodeType: 'YulTypedName',
                    src: '7284:6:4',
                    type: '',
                  },
                ],
                src: '7194:137:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '7428:40:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '7439:22:4',
                      value: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '7455:5:4',
                          },
                        ],
                        functionName: {
                          name: 'sload',
                          nodeType: 'YulIdentifier',
                          src: '7449:5:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '7449:12:4',
                      },
                      variableNames: [
                        {
                          name: 'length',
                          nodeType: 'YulIdentifier',
                          src: '7439:6:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'array_length_t_array$_t_struct$_Player_$319_storage_$dyn_storage',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '7411:5:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'length',
                    nodeType: 'YulTypedName',
                    src: '7421:6:4',
                    type: '',
                  },
                ],
                src: '7337:131:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '7572:38:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '7582:22:4',
                      value: {
                        arguments: [
                          {
                            name: 'ptr',
                            nodeType: 'YulIdentifier',
                            src: '7594:3:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '7599:4:4',
                            type: '',
                            value: '0x20',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '7590:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '7590:14:4',
                      },
                      variableNames: [
                        {
                          name: 'next',
                          nodeType: 'YulIdentifier',
                          src: '7582:4:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'array_nextElement_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'ptr',
                    nodeType: 'YulTypedName',
                    src: '7559:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'next',
                    nodeType: 'YulTypedName',
                    src: '7567:4:4',
                    type: '',
                  },
                ],
                src: '7474:136:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '7708:38:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '7718:22:4',
                      value: {
                        arguments: [
                          {
                            name: 'ptr',
                            nodeType: 'YulIdentifier',
                            src: '7730:3:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '7735:4:4',
                            type: '',
                            value: '0x02',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '7726:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '7726:14:4',
                      },
                      variableNames: [
                        {
                          name: 'next',
                          nodeType: 'YulIdentifier',
                          src: '7718:4:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'array_nextElement_t_array$_t_struct$_Player_$319_storage_$dyn_storage',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'ptr',
                    nodeType: 'YulTypedName',
                    src: '7695:3:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'next',
                    nodeType: 'YulTypedName',
                    src: '7703:4:4',
                    type: '',
                  },
                ],
                src: '7616:130:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '7886:73:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '7903:3:4',
                          },
                          {
                            name: 'length',
                            nodeType: 'YulIdentifier',
                            src: '7908:6:4',
                          },
                        ],
                        functionName: {
                          name: 'mstore',
                          nodeType: 'YulIdentifier',
                          src: '7896:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '7896:19:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '7896:19:4',
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '7924:29:4',
                      value: {
                        arguments: [
                          {
                            name: 'pos',
                            nodeType: 'YulIdentifier',
                            src: '7943:3:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '7948:4:4',
                            type: '',
                            value: '0x20',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '7939:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '7939:14:4',
                      },
                      variableNames: [
                        {
                          name: 'updated_pos',
                          nodeType: 'YulIdentifier',
                          src: '7924:11:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'array_storeLengthForEncoding_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'pos',
                    nodeType: 'YulTypedName',
                    src: '7858:3:4',
                    type: '',
                  },
                  {
                    name: 'length',
                    nodeType: 'YulTypedName',
                    src: '7863:6:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'updated_pos',
                    nodeType: 'YulTypedName',
                    src: '7874:11:4',
                    type: '',
                  },
                ],
                src: '7752:207:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '8009:261:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '8019:25:4',
                      value: {
                        arguments: [
                          {
                            name: 'x',
                            nodeType: 'YulIdentifier',
                            src: '8042:1:4',
                          },
                        ],
                        functionName: {
                          name: 'cleanup_t_uint256',
                          nodeType: 'YulIdentifier',
                          src: '8024:17:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '8024:20:4',
                      },
                      variableNames: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '8019:1:4',
                        },
                      ],
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '8053:25:4',
                      value: {
                        arguments: [
                          {
                            name: 'y',
                            nodeType: 'YulIdentifier',
                            src: '8076:1:4',
                          },
                        ],
                        functionName: {
                          name: 'cleanup_t_uint256',
                          nodeType: 'YulIdentifier',
                          src: '8058:17:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '8058:20:4',
                      },
                      variableNames: [
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '8053:1:4',
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: 'YulBlock',
                        src: '8216:22:4',
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: 'panic_error_0x11',
                                nodeType: 'YulIdentifier',
                                src: '8218:16:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '8218:18:4',
                            },
                            nodeType: 'YulExpressionStatement',
                            src: '8218:18:4',
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: 'x',
                            nodeType: 'YulIdentifier',
                            src: '8137:1:4',
                          },
                          {
                            arguments: [
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '8144:66:4',
                                type: '',
                                value:
                                  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                              },
                              {
                                name: 'y',
                                nodeType: 'YulIdentifier',
                                src: '8212:1:4',
                              },
                            ],
                            functionName: {
                              name: 'sub',
                              nodeType: 'YulIdentifier',
                              src: '8140:3:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '8140:74:4',
                          },
                        ],
                        functionName: {
                          name: 'gt',
                          nodeType: 'YulIdentifier',
                          src: '8134:2:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '8134:81:4',
                      },
                      nodeType: 'YulIf',
                      src: '8131:107:4',
                    },
                    {
                      nodeType: 'YulAssignment',
                      src: '8248:16:4',
                      value: {
                        arguments: [
                          {
                            name: 'x',
                            nodeType: 'YulIdentifier',
                            src: '8259:1:4',
                          },
                          {
                            name: 'y',
                            nodeType: 'YulIdentifier',
                            src: '8262:1:4',
                          },
                        ],
                        functionName: {
                          name: 'add',
                          nodeType: 'YulIdentifier',
                          src: '8255:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '8255:9:4',
                      },
                      variableNames: [
                        {
                          name: 'sum',
                          nodeType: 'YulIdentifier',
                          src: '8248:3:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'checked_add_t_uint256',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'x',
                    nodeType: 'YulTypedName',
                    src: '7996:1:4',
                    type: '',
                  },
                  {
                    name: 'y',
                    nodeType: 'YulTypedName',
                    src: '7999:1:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'sum',
                    nodeType: 'YulTypedName',
                    src: '8005:3:4',
                    type: '',
                  },
                ],
                src: '7965:305:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '8334:32:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '8344:16:4',
                      value: {
                        name: 'value',
                        nodeType: 'YulIdentifier',
                        src: '8355:5:4',
                      },
                      variableNames: [
                        {
                          name: 'cleaned',
                          nodeType: 'YulIdentifier',
                          src: '8344:7:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'cleanup_from_storage_t_uint256',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '8316:5:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'cleaned',
                    nodeType: 'YulTypedName',
                    src: '8326:7:4',
                    type: '',
                  },
                ],
                src: '8276:90:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '8417:51:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '8427:35:4',
                      value: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '8456:5:4',
                          },
                        ],
                        functionName: {
                          name: 'cleanup_t_uint160',
                          nodeType: 'YulIdentifier',
                          src: '8438:17:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '8438:24:4',
                      },
                      variableNames: [
                        {
                          name: 'cleaned',
                          nodeType: 'YulIdentifier',
                          src: '8427:7:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'cleanup_t_address',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '8399:5:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'cleaned',
                    nodeType: 'YulTypedName',
                    src: '8409:7:4',
                    type: '',
                  },
                ],
                src: '8372:96:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '8516:48:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '8526:32:4',
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'value',
                                nodeType: 'YulIdentifier',
                                src: '8551:5:4',
                              },
                            ],
                            functionName: {
                              name: 'iszero',
                              nodeType: 'YulIdentifier',
                              src: '8544:6:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '8544:13:4',
                          },
                        ],
                        functionName: {
                          name: 'iszero',
                          nodeType: 'YulIdentifier',
                          src: '8537:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '8537:21:4',
                      },
                      variableNames: [
                        {
                          name: 'cleaned',
                          nodeType: 'YulIdentifier',
                          src: '8526:7:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'cleanup_t_bool',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '8498:5:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'cleaned',
                    nodeType: 'YulTypedName',
                    src: '8508:7:4',
                    type: '',
                  },
                ],
                src: '8474:90:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '8615:81:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '8625:65:4',
                      value: {
                        arguments: [
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '8640:5:4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '8647:42:4',
                            type: '',
                            value: '0xffffffffffffffffffffffffffffffffffffffff',
                          },
                        ],
                        functionName: {
                          name: 'and',
                          nodeType: 'YulIdentifier',
                          src: '8636:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '8636:54:4',
                      },
                      variableNames: [
                        {
                          name: 'cleaned',
                          nodeType: 'YulIdentifier',
                          src: '8625:7:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'cleanup_t_uint160',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '8597:5:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'cleaned',
                    nodeType: 'YulTypedName',
                    src: '8607:7:4',
                    type: '',
                  },
                ],
                src: '8570:126:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '8747:32:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '8757:16:4',
                      value: {
                        name: 'value',
                        nodeType: 'YulIdentifier',
                        src: '8768:5:4',
                      },
                      variableNames: [
                        {
                          name: 'cleaned',
                          nodeType: 'YulIdentifier',
                          src: '8757:7:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'cleanup_t_uint256',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '8729:5:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'cleaned',
                    nodeType: 'YulTypedName',
                    src: '8739:7:4',
                    type: '',
                  },
                ],
                src: '8702:77:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '8860:91:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '8870:75:4',
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'slot_value',
                                nodeType: 'YulIdentifier',
                                src: '8933:10:4',
                              },
                            ],
                            functionName: {
                              name: 'shift_right_0_unsigned',
                              nodeType: 'YulIdentifier',
                              src: '8910:22:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '8910:34:4',
                          },
                        ],
                        functionName: {
                          name: 'cleanup_from_storage_t_uint256',
                          nodeType: 'YulIdentifier',
                          src: '8879:30:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '8879:66:4',
                      },
                      variableNames: [
                        {
                          name: 'value',
                          nodeType: 'YulIdentifier',
                          src: '8870:5:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'extract_from_storage_value_offset_0t_uint256',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'slot_value',
                    nodeType: 'YulTypedName',
                    src: '8839:10:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '8854:5:4',
                    type: '',
                  },
                ],
                src: '8785:166:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '8985:152:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9002:1:4',
                            type: '',
                            value: '0',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9005:77:4',
                            type: '',
                            value:
                              '35408467139433450592217433187231851964531694900788300625387963629091585785856',
                          },
                        ],
                        functionName: {
                          name: 'mstore',
                          nodeType: 'YulIdentifier',
                          src: '8995:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '8995:88:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '8995:88:4',
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9099:1:4',
                            type: '',
                            value: '4',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9102:4:4',
                            type: '',
                            value: '0x11',
                          },
                        ],
                        functionName: {
                          name: 'mstore',
                          nodeType: 'YulIdentifier',
                          src: '9092:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '9092:15:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '9092:15:4',
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9123:1:4',
                            type: '',
                            value: '0',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9126:4:4',
                            type: '',
                            value: '0x24',
                          },
                        ],
                        functionName: {
                          name: 'revert',
                          nodeType: 'YulIdentifier',
                          src: '9116:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '9116:15:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '9116:15:4',
                    },
                  ],
                },
                name: 'panic_error_0x11',
                nodeType: 'YulFunctionDefinition',
                src: '8957:180:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '9232:28:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9249:1:4',
                            type: '',
                            value: '0',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9252:1:4',
                            type: '',
                            value: '0',
                          },
                        ],
                        functionName: {
                          name: 'revert',
                          nodeType: 'YulIdentifier',
                          src: '9242:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '9242:12:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '9242:12:4',
                    },
                  ],
                },
                name: 'revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db',
                nodeType: 'YulFunctionDefinition',
                src: '9143:117:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '9355:28:4',
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9372:1:4',
                            type: '',
                            value: '0',
                          },
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9375:1:4',
                            type: '',
                            value: '0',
                          },
                        ],
                        functionName: {
                          name: 'revert',
                          nodeType: 'YulIdentifier',
                          src: '9365:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '9365:12:4',
                      },
                      nodeType: 'YulExpressionStatement',
                      src: '9365:12:4',
                    },
                  ],
                },
                name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
                nodeType: 'YulFunctionDefinition',
                src: '9266:117:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '9440:51:4',
                  statements: [
                    {
                      nodeType: 'YulAssignment',
                      src: '9450:34:4',
                      value: {
                        arguments: [
                          {
                            kind: 'number',
                            nodeType: 'YulLiteral',
                            src: '9475:1:4',
                            type: '',
                            value: '0',
                          },
                          {
                            name: 'value',
                            nodeType: 'YulIdentifier',
                            src: '9478:5:4',
                          },
                        ],
                        functionName: {
                          name: 'shr',
                          nodeType: 'YulIdentifier',
                          src: '9471:3:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '9471:13:4',
                      },
                      variableNames: [
                        {
                          name: 'newValue',
                          nodeType: 'YulIdentifier',
                          src: '9450:8:4',
                        },
                      ],
                    },
                  ],
                },
                name: 'shift_right_0_unsigned',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '9421:5:4',
                    type: '',
                  },
                ],
                returnVariables: [
                  {
                    name: 'newValue',
                    nodeType: 'YulTypedName',
                    src: '9431:8:4',
                    type: '',
                  },
                ],
                src: '9389:102:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '9540:79:4',
                  statements: [
                    {
                      body: {
                        nodeType: 'YulBlock',
                        src: '9597:16:4',
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: 'number',
                                  nodeType: 'YulLiteral',
                                  src: '9606:1:4',
                                  type: '',
                                  value: '0',
                                },
                                {
                                  kind: 'number',
                                  nodeType: 'YulLiteral',
                                  src: '9609:1:4',
                                  type: '',
                                  value: '0',
                                },
                              ],
                              functionName: {
                                name: 'revert',
                                nodeType: 'YulIdentifier',
                                src: '9599:6:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '9599:12:4',
                            },
                            nodeType: 'YulExpressionStatement',
                            src: '9599:12:4',
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'value',
                                nodeType: 'YulIdentifier',
                                src: '9563:5:4',
                              },
                              {
                                arguments: [
                                  {
                                    name: 'value',
                                    nodeType: 'YulIdentifier',
                                    src: '9588:5:4',
                                  },
                                ],
                                functionName: {
                                  name: 'cleanup_t_address',
                                  nodeType: 'YulIdentifier',
                                  src: '9570:17:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '9570:24:4',
                              },
                            ],
                            functionName: {
                              name: 'eq',
                              nodeType: 'YulIdentifier',
                              src: '9560:2:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '9560:35:4',
                          },
                        ],
                        functionName: {
                          name: 'iszero',
                          nodeType: 'YulIdentifier',
                          src: '9553:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '9553:43:4',
                      },
                      nodeType: 'YulIf',
                      src: '9550:63:4',
                    },
                  ],
                },
                name: 'validator_revert_t_address',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '9533:5:4',
                    type: '',
                  },
                ],
                src: '9497:122:4',
              },
              {
                body: {
                  nodeType: 'YulBlock',
                  src: '9668:79:4',
                  statements: [
                    {
                      body: {
                        nodeType: 'YulBlock',
                        src: '9725:16:4',
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: 'number',
                                  nodeType: 'YulLiteral',
                                  src: '9734:1:4',
                                  type: '',
                                  value: '0',
                                },
                                {
                                  kind: 'number',
                                  nodeType: 'YulLiteral',
                                  src: '9737:1:4',
                                  type: '',
                                  value: '0',
                                },
                              ],
                              functionName: {
                                name: 'revert',
                                nodeType: 'YulIdentifier',
                                src: '9727:6:4',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '9727:12:4',
                            },
                            nodeType: 'YulExpressionStatement',
                            src: '9727:12:4',
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: 'value',
                                nodeType: 'YulIdentifier',
                                src: '9691:5:4',
                              },
                              {
                                arguments: [
                                  {
                                    name: 'value',
                                    nodeType: 'YulIdentifier',
                                    src: '9716:5:4',
                                  },
                                ],
                                functionName: {
                                  name: 'cleanup_t_uint256',
                                  nodeType: 'YulIdentifier',
                                  src: '9698:17:4',
                                },
                                nodeType: 'YulFunctionCall',
                                src: '9698:24:4',
                              },
                            ],
                            functionName: {
                              name: 'eq',
                              nodeType: 'YulIdentifier',
                              src: '9688:2:4',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '9688:35:4',
                          },
                        ],
                        functionName: {
                          name: 'iszero',
                          nodeType: 'YulIdentifier',
                          src: '9681:6:4',
                        },
                        nodeType: 'YulFunctionCall',
                        src: '9681:43:4',
                      },
                      nodeType: 'YulIf',
                      src: '9678:63:4',
                    },
                  ],
                },
                name: 'validator_revert_t_uint256',
                nodeType: 'YulFunctionDefinition',
                parameters: [
                  {
                    name: 'value',
                    nodeType: 'YulTypedName',
                    src: '9661:5:4',
                    type: '',
                  },
                ],
                src: '9625:122:4',
              },
            ],
          },
          contents:
            '{\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encodeUpdatedPos_t_struct$_Player_$319_memory_ptr_to_t_struct$_Player_$319_memory_ptr(value0, pos) -> updatedPos {\n        abi_encode_t_struct$_Player_$319_memory_ptr_to_t_struct$_Player_$319_memory_ptr(value0, pos)\n        updatedPos := add(pos, 0x40)\n    }\n\n    function abi_encodeUpdatedPos_t_struct$_Player_$319_storage_to_t_struct$_Player_$319_memory_ptr(value0, pos) -> updatedPos {\n        abi_encode_t_struct$_Player_$319_storage_to_t_struct$_Player_$319_memory_ptr(value0, pos)\n        updatedPos := add(pos, 0x40)\n    }\n\n    // struct Game.Player[] -> struct Game.Player[]\n    function abi_encode_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack(value, pos)  -> end  {\n        let length := array_length_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack(pos, length)\n        let baseRef := array_dataslot_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            let elementValue0 := mload(srcPtr)\n            pos := abi_encodeUpdatedPos_t_struct$_Player_$319_memory_ptr_to_t_struct$_Player_$319_memory_ptr(elementValue0, pos)\n            srcPtr := array_nextElement_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr(srcPtr)\n        }\n        end := pos\n    }\n\n    // struct Game.Player[] -> struct Game.Player[]\n    function abi_encode_t_array$_t_struct$_Player_$319_storage_$dyn_storage_to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack(value, pos)  -> end  {\n        let length := array_length_t_array$_t_struct$_Player_$319_storage_$dyn_storage(value)\n        pos := array_storeLengthForEncoding_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack(pos, length)\n        let baseRef := array_dataslot_t_array$_t_struct$_Player_$319_storage_$dyn_storage(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            let elementValue0 := srcPtr\n            pos := abi_encodeUpdatedPos_t_struct$_Player_$319_storage_to_t_struct$_Player_$319_memory_ptr(elementValue0, pos)\n            srcPtr := array_nextElement_t_array$_t_struct$_Player_$319_storage_$dyn_storage(srcPtr)\n        }\n        end := pos\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    // struct Game.Player -> struct Game.Player\n    function abi_encode_t_struct$_Player_$319_memory_ptr_to_t_struct$_Player_$319_memory_ptr(value, pos)  {\n        let tail := add(pos, 0x40)\n\n        {\n            // id\n\n            let memberValue0 := mload(add(value, 0x00))\n            abi_encode_t_uint256_to_t_uint256(memberValue0, add(pos, 0x00))\n        }\n\n        {\n            // score\n\n            let memberValue0 := mload(add(value, 0x20))\n            abi_encode_t_uint256_to_t_uint256(memberValue0, add(pos, 0x20))\n        }\n\n    }\n\n    // struct Game.Player -> struct Game.Player\n    function abi_encode_t_struct$_Player_$319_storage_to_t_struct$_Player_$319_memory_ptr(value, pos)  {\n        let tail := add(pos, 0x40)\n        let slotValue := 0\n\n        {\n            // id\n            slotValue := sload(add(value, 0x00))\n            let memberValue0 := extract_from_storage_value_offset_0t_uint256(slotValue)\n            abi_encode_t_uint256_to_t_uint256(memberValue0, add(pos, 0x00))\n        }\n\n        {\n            // score\n            slotValue := sload(add(value, 0x01))\n            let memberValue0 := extract_from_storage_value_offset_0t_uint256(slotValue)\n            abi_encode_t_uint256_to_t_uint256(memberValue0, add(pos, 0x20))\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_tuple_t_array$_t_struct$_Player_$319_storage_$dyn_storage__to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_array$_t_struct$_Player_$319_storage_$dyn_storage_to_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_dataslot_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr(ptr) -> data {\n        data := ptr\n\n        data := add(ptr, 0x20)\n\n    }\n\n    function array_dataslot_t_array$_t_struct$_Player_$319_storage_$dyn_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function array_length_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_length_t_array$_t_struct$_Player_$319_storage_$dyn_storage(value) -> length {\n\n        length := sload(value)\n\n    }\n\n    function array_nextElement_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr(ptr) -> next {\n        next := add(ptr, 0x20)\n    }\n\n    function array_nextElement_t_array$_t_struct$_Player_$319_storage_$dyn_storage(ptr) -> next {\n        next := add(ptr, 0x02)\n    }\n\n    function array_storeLengthForEncoding_t_array$_t_struct$_Player_$319_memory_ptr_$dyn_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function cleanup_from_storage_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function extract_from_storage_value_offset_0t_uint256(slot_value) -> value {\n        value := cleanup_from_storage_t_uint256(shift_right_0_unsigned(slot_value))\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function shift_right_0_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(0, value)\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n',
          id: 4,
          language: 'Yul',
          name: '#utility.yul',
        },
      ],
      immutableReferences: {},
      linkReferences: {},
      object:
        '608060405234801561001057600080fd5b50600436106100625760003560e01c806338ee821b1461006757806353ed514314610097578063aff0b297146100b5578063be9a6555146100d1578063d299aa07146100db578063f71d96cb1461010b575b600080fd5b610081600480360381019061007c919061060e565b61013c565b60405161008e9190610855565b60405180910390f35b61009f610154565b6040516100ac91906107f6565b60405180910390f35b6100cf60048036038101906100ca919061063b565b6101c7565b005b6100d9610435565b005b6100f560048036038101906100f0919061060e565b610598565b6040516101029190610855565b60405180910390f35b6101256004803603810190610120919061063b565b6105b0565b604051610133929190610870565b60405180910390f35b60036020528060005260406000206000915090505481565b60606004805480602002602001604051908101604052809291908181526020016000905b828210156101be57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610178565b50505050905090565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638358ba0882846040518363ffffffff1660e01b8152600401610266929190610870565b600060405180830381600087803b15801561028057600080fd5b505af1158015610294573d6000803e3d6000fd5b5050505081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006040518060400160405280600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152509050600481908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090557f96bed669ba2036cc25b69d1ebfdfa3d3ae2ea025967d7e3b01e9ad2255081d4a60046040516104289190610818565b60405180910390a1505050565b600154600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395805dad600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518263ffffffff1660e01b81526004016105139190610855565b600060405180830381600087803b15801561052d57600080fd5b505af1158015610541573d6000803e3d6000fd5b50505050600180600082825461055791906108ff565b925050819055507f898a393a858c3e53a0c17028b22a4244ad013a6a5432ead1ba081e13f4053199600160405161058e919061083a565b60405180910390a1565b60026020528060005260406000206000915090505481565b600481815481106105c057600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b6000813590506105f381610a02565b92915050565b60008135905061060881610a19565b92915050565b600060208284031215610624576106236109f0565b5b6000610632848285016105e4565b91505092915050565b600060208284031215610651576106506109f0565b5b600061065f848285016105f9565b91505092915050565b60006106748383610762565b60408301905092915050565b600061068c8383610791565b60408301905092915050565b60006106a3826108be565b6106ad81856108ee565b93506106b883610899565b8060005b838110156106e95781516106d08882610668565b97506106db836108d4565b9250506001810190506106bc565b5085935050505092915050565b6000610701826108c9565b61070b81856108ee565b9350610716836108a9565b8060005b83811015610746578161072d8882610680565b9750610738836108e1565b92505060018101905061071a565b5085935050505092915050565b61075c81610971565b82525050565b60408201600082015161077860008501826107d8565b50602082015161078b60208501826107d8565b50505050565b6040820160008083015490506107a6816109a7565b6107b360008601826107d8565b50600183015490506107c4816109a7565b6107d160208601826107d8565b5050505050565b6107e18161099d565b82525050565b6107f08161099d565b82525050565b600060208201905081810360008301526108108184610698565b905092915050565b6000602082019050818103600083015261083281846106f6565b905092915050565b600060208201905061084f6000830184610753565b92915050565b600060208201905061086a60008301846107e7565b92915050565b600060408201905061088560008301856107e7565b61089260208301846107e7565b9392505050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081549050919050565b6000602082019050919050565b6000600282019050919050565b600082825260208201905092915050565b600061090a8261099d565b91506109158361099d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561094a576109496109c1565b5b828201905092915050565b6000819050919050565b600061096a8261097d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006109ba6109b5836109f5565b610955565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b60008160001c9050919050565b610a0b8161095f565b8114610a1657600080fd5b50565b610a228161099d565b8114610a2d57600080fd5b5056fea2646970667358221220cf488fef364a713555766cac67183db2336ac7af7f27fd93b26cd1c048116f0664736f6c63430008070033',
      opcodes:
        'PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x62 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x38EE821B EQ PUSH2 0x67 JUMPI DUP1 PUSH4 0x53ED5143 EQ PUSH2 0x97 JUMPI DUP1 PUSH4 0xAFF0B297 EQ PUSH2 0xB5 JUMPI DUP1 PUSH4 0xBE9A6555 EQ PUSH2 0xD1 JUMPI DUP1 PUSH4 0xD299AA07 EQ PUSH2 0xDB JUMPI DUP1 PUSH4 0xF71D96CB EQ PUSH2 0x10B JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x81 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x7C SWAP2 SWAP1 PUSH2 0x60E JUMP JUMPDEST PUSH2 0x13C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x8E SWAP2 SWAP1 PUSH2 0x855 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x9F PUSH2 0x154 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xAC SWAP2 SWAP1 PUSH2 0x7F6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xCF PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xCA SWAP2 SWAP1 PUSH2 0x63B JUMP JUMPDEST PUSH2 0x1C7 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xD9 PUSH2 0x435 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xF5 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xF0 SWAP2 SWAP1 PUSH2 0x60E JUMP JUMPDEST PUSH2 0x598 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x102 SWAP2 SWAP1 PUSH2 0x855 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x125 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x120 SWAP2 SWAP1 PUSH2 0x63B JUMP JUMPDEST PUSH2 0x5B0 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x133 SWAP3 SWAP2 SWAP1 PUSH2 0x870 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x3 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x4 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 SWAP1 JUMPDEST DUP3 DUP3 LT ISZERO PUSH2 0x1BE JUMPI DUP4 DUP3 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE SWAP1 DUP2 PUSH1 0x0 DUP3 ADD SLOAD DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP3 ADD SLOAD DUP2 MSTORE POP POP DUP2 MSTORE PUSH1 0x20 ADD SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x178 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP PUSH1 0x0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x8358BA08 DUP3 DUP5 PUSH1 0x40 MLOAD DUP4 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x266 SWAP3 SWAP2 SWAP1 PUSH2 0x870 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x280 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x294 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP DUP2 PUSH1 0x3 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x3 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD DUP2 MSTORE POP SWAP1 POP PUSH1 0x4 DUP2 SWAP1 DUP1 PUSH1 0x1 DUP2 SLOAD ADD DUP1 DUP3 SSTORE DUP1 SWAP2 POP POP PUSH1 0x1 SWAP1 SUB SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x0 SWAP1 SWAP2 SWAP1 SWAP2 SWAP1 SWAP2 POP PUSH1 0x0 DUP3 ADD MLOAD DUP2 PUSH1 0x0 ADD SSTORE PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE POP POP PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SSTORE PUSH32 0x96BED669BA2036CC25B69D1EBFDFA3D3AE2EA025967D7E3B01E9AD2255081D4A PUSH1 0x4 PUSH1 0x40 MLOAD PUSH2 0x428 SWAP2 SWAP1 PUSH2 0x818 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH1 0x0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x95805DAD PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH1 0x40 MLOAD DUP3 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x513 SWAP2 SWAP1 PUSH2 0x855 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x52D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x541 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x1 DUP1 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x557 SWAP2 SWAP1 PUSH2 0x8FF JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH32 0x898A393A858C3E53A0C17028B22A4244AD013A6A5432EAD1BA081E13F4053199 PUSH1 0x1 PUSH1 0x40 MLOAD PUSH2 0x58E SWAP2 SWAP1 PUSH2 0x83A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMP JUMPDEST PUSH1 0x2 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 DUP2 DUP2 SLOAD DUP2 LT PUSH2 0x5C0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x0 SWAP2 POP SWAP1 POP DUP1 PUSH1 0x0 ADD SLOAD SWAP1 DUP1 PUSH1 0x1 ADD SLOAD SWAP1 POP DUP3 JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x5F3 DUP2 PUSH2 0xA02 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x608 DUP2 PUSH2 0xA19 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x624 JUMPI PUSH2 0x623 PUSH2 0x9F0 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x632 DUP5 DUP3 DUP6 ADD PUSH2 0x5E4 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x651 JUMPI PUSH2 0x650 PUSH2 0x9F0 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x65F DUP5 DUP3 DUP6 ADD PUSH2 0x5F9 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x674 DUP4 DUP4 PUSH2 0x762 JUMP JUMPDEST PUSH1 0x40 DUP4 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x68C DUP4 DUP4 PUSH2 0x791 JUMP JUMPDEST PUSH1 0x40 DUP4 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x6A3 DUP3 PUSH2 0x8BE JUMP JUMPDEST PUSH2 0x6AD DUP2 DUP6 PUSH2 0x8EE JUMP JUMPDEST SWAP4 POP PUSH2 0x6B8 DUP4 PUSH2 0x899 JUMP JUMPDEST DUP1 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x6E9 JUMPI DUP2 MLOAD PUSH2 0x6D0 DUP9 DUP3 PUSH2 0x668 JUMP JUMPDEST SWAP8 POP PUSH2 0x6DB DUP4 PUSH2 0x8D4 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH2 0x6BC JUMP JUMPDEST POP DUP6 SWAP4 POP POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x701 DUP3 PUSH2 0x8C9 JUMP JUMPDEST PUSH2 0x70B DUP2 DUP6 PUSH2 0x8EE JUMP JUMPDEST SWAP4 POP PUSH2 0x716 DUP4 PUSH2 0x8A9 JUMP JUMPDEST DUP1 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x746 JUMPI DUP2 PUSH2 0x72D DUP9 DUP3 PUSH2 0x680 JUMP JUMPDEST SWAP8 POP PUSH2 0x738 DUP4 PUSH2 0x8E1 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH2 0x71A JUMP JUMPDEST POP DUP6 SWAP4 POP POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x75C DUP2 PUSH2 0x971 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x40 DUP3 ADD PUSH1 0x0 DUP3 ADD MLOAD PUSH2 0x778 PUSH1 0x0 DUP6 ADD DUP3 PUSH2 0x7D8 JUMP JUMPDEST POP PUSH1 0x20 DUP3 ADD MLOAD PUSH2 0x78B PUSH1 0x20 DUP6 ADD DUP3 PUSH2 0x7D8 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x40 DUP3 ADD PUSH1 0x0 DUP1 DUP4 ADD SLOAD SWAP1 POP PUSH2 0x7A6 DUP2 PUSH2 0x9A7 JUMP JUMPDEST PUSH2 0x7B3 PUSH1 0x0 DUP7 ADD DUP3 PUSH2 0x7D8 JUMP JUMPDEST POP PUSH1 0x1 DUP4 ADD SLOAD SWAP1 POP PUSH2 0x7C4 DUP2 PUSH2 0x9A7 JUMP JUMPDEST PUSH2 0x7D1 PUSH1 0x20 DUP7 ADD DUP3 PUSH2 0x7D8 JUMP JUMPDEST POP POP POP POP POP JUMP JUMPDEST PUSH2 0x7E1 DUP2 PUSH2 0x99D JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x7F0 DUP2 PUSH2 0x99D JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x810 DUP2 DUP5 PUSH2 0x698 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x832 DUP2 DUP5 PUSH2 0x6F6 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x84F PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x753 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x86A PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x7E7 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x885 PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0x7E7 JUMP JUMPDEST PUSH2 0x892 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x7E7 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP2 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x90A DUP3 PUSH2 0x99D JUMP JUMPDEST SWAP2 POP PUSH2 0x915 DUP4 PUSH2 0x99D JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x94A JUMPI PUSH2 0x949 PUSH2 0x9C1 JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x96A DUP3 PUSH2 0x97D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x9BA PUSH2 0x9B5 DUP4 PUSH2 0x9F5 JUMP JUMPDEST PUSH2 0x955 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 SHR SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xA0B DUP2 PUSH2 0x95F JUMP JUMPDEST DUP2 EQ PUSH2 0xA16 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0xA22 DUP2 PUSH2 0x99D JUMP JUMPDEST DUP2 EQ PUSH2 0xA2D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xCF BASEFEE DUP16 0xEF CALLDATASIZE 0x4A PUSH18 0x3555766CAC67183DB2336AC7AF7F27FD93B2 PUSH13 0xD1C048116F0664736F6C634300 ADDMOD SMOD STOP CALLER ',
      sourceMap:
        '91:948:3:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;189:44;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;956:81;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;612:340;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;464:144;;;:::i;:::-;;139:46;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;294:23;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;189:44;;;;;;;;;;;;;;;;;:::o;956:81::-;995:15;1025:7;1018:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;956:81;:::o;612:340::-;661:15;679:11;:23;691:10;679:23;;;;;;;;;;;;;;;;661:41;;708:3;;;;;;;;;;:15;;;724:7;733:5;708:31;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;769:5;745:9;:21;755:10;745:21;;;;;;;;;;;;;;;:29;;;;780:20;803:54;;;;;;;;810:11;:23;822:10;810:23;;;;;;;;;;;;;;;;803:54;;;;835:9;:21;845:10;835:21;;;;;;;;;;;;;;;;803:54;;;780:77;;863:7;876:6;863:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;896:11;:23;908:10;896:23;;;;;;;;;;;;;;;889:30;;;930:17;939:7;930:17;;;;;;:::i;:::-;;;;;;;;655:297;;612:340;:::o;464:144::-;520:2;;494:11;:23;506:10;494:23;;;;;;;;;;;;;;;:28;;;;528:3;;;;;;;;;;:9;;;538:11;:23;550:10;538:23;;;;;;;;;;;;;;;;528:34;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;574:1;568:2;;:7;;;;;;;:::i;:::-;;;;;;;;586:17;598:4;586:17;;;;;;:::i;:::-;;;;;;;;464:144::o;139:46::-;;;;;;;;;;;;;;;;;:::o;294:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7:139:4:-;53:5;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;7:139;;;;:::o;152:::-;198:5;236:6;223:20;214:29;;252:33;279:5;252:33;:::i;:::-;152:139;;;;:::o;297:329::-;356:6;405:2;393:9;384:7;380:23;376:32;373:119;;;411:79;;:::i;:::-;373:119;531:1;556:53;601:7;592:6;581:9;577:22;556:53;:::i;:::-;546:63;;502:117;297:329;;;;:::o;632:::-;691:6;740:2;728:9;719:7;715:23;711:32;708:119;;;746:79;;:::i;:::-;708:119;866:1;891:53;936:7;927:6;916:9;912:22;891:53;:::i;:::-;881:63;;837:117;632:329;;;;:::o;967:271::-;1082:10;1103:92;1191:3;1183:6;1103:92;:::i;:::-;1227:4;1222:3;1218:14;1204:28;;967:271;;;;:::o;1244:265::-;1356:10;1377:89;1462:3;1454:6;1377:89;:::i;:::-;1498:4;1493:3;1489:14;1475:28;;1244:265;;;;:::o;1567:916::-;1732:3;1761:77;1832:5;1761:77;:::i;:::-;1854:109;1956:6;1951:3;1854:109;:::i;:::-;1847:116;;1987:79;2060:5;1987:79;:::i;:::-;2089:7;2120:1;2105:353;2130:6;2127:1;2124:13;2105:353;;;2206:6;2200:13;2233:109;2338:3;2323:13;2233:109;:::i;:::-;2226:116;;2365:83;2441:6;2365:83;:::i;:::-;2355:93;;2165:293;2152:1;2149;2145:9;2140:14;;2105:353;;;2109:14;2474:3;2467:10;;1737:746;;;1567:916;;;;:::o;2541:882::-;2700:3;2729:71;2794:5;2729:71;:::i;:::-;2816:109;2918:6;2913:3;2816:109;:::i;:::-;2809:116;;2949:73;3016:5;2949:73;:::i;:::-;3045:7;3076:1;3061:337;3086:6;3083:1;3080:13;3061:337;;;3156:6;3182:106;3284:3;3269:13;3182:106;:::i;:::-;3175:113;;3311:77;3381:6;3311:77;:::i;:::-;3301:87;;3121:277;3108:1;3105;3101:9;3096:14;;3061:337;;;3065:14;3414:3;3407:10;;2705:718;;;2541:882;;;;:::o;3429:109::-;3510:21;3525:5;3510:21;:::i;:::-;3505:3;3498:34;3429:109;;:::o;3592:492::-;3725:4;3720:3;3716:14;3810:4;3803:5;3799:16;3793:23;3829:63;3886:4;3881:3;3877:14;3863:12;3829:63;:::i;:::-;3740:162;3985:4;3978:5;3974:16;3968:23;4004:63;4061:4;4056:3;4052:14;4038:12;4004:63;:::i;:::-;3912:165;3694:390;3592:492;;:::o;4138:676::-;4268:4;4263:3;4259:14;4299:1;4372:4;4365:5;4361:16;4355:23;4342:36;;4411:55;4456:9;4411:55;:::i;:::-;4479:63;4536:4;4531:3;4527:14;4513:12;4479:63;:::i;:::-;4310:242;4627:4;4620:5;4616:16;4610:23;4597:36;;4666:55;4711:9;4666:55;:::i;:::-;4734:63;4791:4;4786:3;4782:14;4768:12;4734:63;:::i;:::-;4562:245;4237:577;;4138:676;;:::o;4820:108::-;4897:24;4915:5;4897:24;:::i;:::-;4892:3;4885:37;4820:108;;:::o;4934:118::-;5021:24;5039:5;5021:24;:::i;:::-;5016:3;5009:37;4934:118;;:::o;5058:465::-;5247:4;5285:2;5274:9;5270:18;5262:26;;5334:9;5328:4;5324:20;5320:1;5309:9;5305:17;5298:47;5362:154;5511:4;5502:6;5362:154;:::i;:::-;5354:162;;5058:465;;;;:::o;5529:453::-;5712:4;5750:2;5739:9;5735:18;5727:26;;5799:9;5793:4;5789:20;5785:1;5774:9;5770:17;5763:47;5827:148;5970:4;5961:6;5827:148;:::i;:::-;5819:156;;5529:453;;;;:::o;5988:210::-;6075:4;6113:2;6102:9;6098:18;6090:26;;6126:65;6188:1;6177:9;6173:17;6164:6;6126:65;:::i;:::-;5988:210;;;;:::o;6204:222::-;6297:4;6335:2;6324:9;6320:18;6312:26;;6348:71;6416:1;6405:9;6401:17;6392:6;6348:71;:::i;:::-;6204:222;;;;:::o;6432:332::-;6553:4;6591:2;6580:9;6576:18;6568:26;;6604:71;6672:1;6661:9;6657:17;6648:6;6604:71;:::i;:::-;6685:72;6753:2;6742:9;6738:18;6729:6;6685:72;:::i;:::-;6432:332;;;;;:::o;6851:155::-;6941:4;6964:3;6956:11;;6994:4;6989:3;6985:14;6977:22;;6851:155;;;:::o;7012:176::-;7096:4;7119:3;7111:11;;7142:3;7139:1;7132:14;7176:4;7173:1;7163:18;7155:26;;7012:176;;;:::o;7194:137::-;7284:6;7318:5;7312:12;7302:22;;7194:137;;;:::o;7337:131::-;7421:6;7455:5;7449:12;7439:22;;7337:131;;;:::o;7474:136::-;7567:4;7599;7594:3;7590:14;7582:22;;7474:136;;;:::o;7616:130::-;7703:4;7735;7730:3;7726:14;7718:22;;7616:130;;;:::o;7752:207::-;7874:11;7908:6;7903:3;7896:19;7948:4;7943:3;7939:14;7924:29;;7752:207;;;;:::o;7965:305::-;8005:3;8024:20;8042:1;8024:20;:::i;:::-;8019:25;;8058:20;8076:1;8058:20;:::i;:::-;8053:25;;8212:1;8144:66;8140:74;8137:1;8134:81;8131:107;;;8218:18;;:::i;:::-;8131:107;8262:1;8259;8255:9;8248:16;;7965:305;;;;:::o;8276:90::-;8326:7;8355:5;8344:16;;8276:90;;;:::o;8372:96::-;8409:7;8438:24;8456:5;8438:24;:::i;:::-;8427:35;;8372:96;;;:::o;8474:90::-;8508:7;8551:5;8544:13;8537:21;8526:32;;8474:90;;;:::o;8570:126::-;8607:7;8647:42;8640:5;8636:54;8625:65;;8570:126;;;:::o;8702:77::-;8739:7;8768:5;8757:16;;8702:77;;;:::o;8785:166::-;8854:5;8879:66;8910:34;8933:10;8910:34;:::i;:::-;8879:66;:::i;:::-;8870:75;;8785:166;;;:::o;8957:180::-;9005:77;9002:1;8995:88;9102:4;9099:1;9092:15;9126:4;9123:1;9116:15;9266:117;9375:1;9372;9365:12;9389:102;9431:8;9478:5;9475:1;9471:13;9450:34;;9389:102;;;:::o;9497:122::-;9570:24;9588:5;9570:24;:::i;:::-;9563:5;9560:35;9550:63;;9609:1;9606;9599:12;9550:63;9497:122;:::o;9625:::-;9698:24;9716:5;9698:24;:::i;:::-;9691:5;9688:35;9678:63;;9737:1;9734;9727:12;9678:63;9625:122;:::o',
    },
    gasEstimates: {
      creation: {
        codeDepositCost: '532400',
        executionCost: 'infinite',
        totalCost: 'infinite',
      },
      external: {
        'addressList(address)': '2880',
        'getAll()': 'infinite',
        'players(uint256)': 'infinite',
        'start()': 'infinite',
        'submitScore(uint256)': 'infinite',
        'userScore(address)': '2792',
      },
    },
    methodIdentifiers: {
      'addressList(address)': 'd299aa07',
      'getAll()': '53ed5143',
      'players(uint256)': 'f71d96cb',
      'start()': 'be9a6555',
      'submitScore(uint256)': 'aff0b297',
      'userScore(address)': '38ee821b',
    },
  },
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_box',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bool',
          name: 'start',
          type: 'bool',
        },
      ],
      name: 'GameStarted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'score',
              type: 'uint256',
            },
          ],
          indexed: false,
          internalType: 'struct Game.Player[]',
          name: 'players',
          type: 'tuple[]',
        },
      ],
      name: 'NewScore',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'addressList',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAll',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'score',
              type: 'uint256',
            },
          ],
          internalType: 'struct Game.Player[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'players',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'score',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'start',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'score',
          type: 'uint256',
        },
      ],
      name: 'submitScore',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'userScore',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
};

export default abi.abi;
//export const contractAddress: string = '0xD4fb94BE159055b403B917356376B5de44E7f6F2';
export const contractAddress: string = '0x74910f5D7f1bF26965a406D76372aB0Ef8E33D4a';
