# TACT Compilation Report
Contract: SwapTonContract
BOC Size: 1692 bytes

# Types
Total Types: 10

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## Client
TLB: `_ address:address amount:coins currency:^string = Client`
Signature: `Client{address:address,amount:coins,currency:^string}`

## CreateOffer
TLB: `create_offer#10f24e71 addressClient1:address amountTon:coins offerCurrency:^string = CreateOffer`
Signature: `CreateOffer{addressClient1:address,amountTon:coins,offerCurrency:^string}`

## Swap
TLB: `swap#bf5eb9ce addressClient2:address amountTon:coins swapCurrency:^string = Swap`
Signature: `Swap{addressClient2:address,amountTon:coins,swapCurrency:^string}`

## Claim
TLB: `claim#5f63c310 secureCode:uint32 = Claim`
Signature: `Claim{secureCode:uint32}`

# Get Methods
Total Get Methods: 1

## info

# Error Codes
2: Stack underflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
54040: Only the deployer is permitted here