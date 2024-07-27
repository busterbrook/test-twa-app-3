import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type Client = {
    $$type: 'Client';
    address: Address;
    amount: bigint;
    currency: string;
}

export function storeClient(src: Client) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.address);
        b_0.storeCoins(src.amount);
        b_0.storeStringRefTail(src.currency);
    };
}

export function loadClient(slice: Slice) {
    let sc_0 = slice;
    let _address = sc_0.loadAddress();
    let _amount = sc_0.loadCoins();
    let _currency = sc_0.loadStringRefTail();
    return { $$type: 'Client' as const, address: _address, amount: _amount, currency: _currency };
}

function loadTupleClient(source: TupleReader) {
    let _address = source.readAddress();
    let _amount = source.readBigNumber();
    let _currency = source.readString();
    return { $$type: 'Client' as const, address: _address, amount: _amount, currency: _currency };
}

function storeTupleClient(source: Client) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeNumber(source.amount);
    builder.writeString(source.currency);
    return builder.build();
}

function dictValueParserClient(): DictionaryValue<Client> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClient(src)).endCell());
        },
        parse: (src) => {
            return loadClient(src.loadRef().beginParse());
        }
    }
}

export type CreateOffer = {
    $$type: 'CreateOffer';
    addressClient1: Address;
    amountTon: bigint;
    offerCurrency: string;
}

export function storeCreateOffer(src: CreateOffer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(284315249, 32);
        b_0.storeAddress(src.addressClient1);
        b_0.storeCoins(src.amountTon);
        b_0.storeStringRefTail(src.offerCurrency);
    };
}

export function loadCreateOffer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 284315249) { throw Error('Invalid prefix'); }
    let _addressClient1 = sc_0.loadAddress();
    let _amountTon = sc_0.loadCoins();
    let _offerCurrency = sc_0.loadStringRefTail();
    return { $$type: 'CreateOffer' as const, addressClient1: _addressClient1, amountTon: _amountTon, offerCurrency: _offerCurrency };
}

function loadTupleCreateOffer(source: TupleReader) {
    let _addressClient1 = source.readAddress();
    let _amountTon = source.readBigNumber();
    let _offerCurrency = source.readString();
    return { $$type: 'CreateOffer' as const, addressClient1: _addressClient1, amountTon: _amountTon, offerCurrency: _offerCurrency };
}

function storeTupleCreateOffer(source: CreateOffer) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.addressClient1);
    builder.writeNumber(source.amountTon);
    builder.writeString(source.offerCurrency);
    return builder.build();
}

function dictValueParserCreateOffer(): DictionaryValue<CreateOffer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCreateOffer(src)).endCell());
        },
        parse: (src) => {
            return loadCreateOffer(src.loadRef().beginParse());
        }
    }
}

export type Swap = {
    $$type: 'Swap';
    addressClient2: Address;
    amountTon: bigint;
    swapCurrency: string;
}

export function storeSwap(src: Swap) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3210656206, 32);
        b_0.storeAddress(src.addressClient2);
        b_0.storeCoins(src.amountTon);
        b_0.storeStringRefTail(src.swapCurrency);
    };
}

export function loadSwap(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3210656206) { throw Error('Invalid prefix'); }
    let _addressClient2 = sc_0.loadAddress();
    let _amountTon = sc_0.loadCoins();
    let _swapCurrency = sc_0.loadStringRefTail();
    return { $$type: 'Swap' as const, addressClient2: _addressClient2, amountTon: _amountTon, swapCurrency: _swapCurrency };
}

function loadTupleSwap(source: TupleReader) {
    let _addressClient2 = source.readAddress();
    let _amountTon = source.readBigNumber();
    let _swapCurrency = source.readString();
    return { $$type: 'Swap' as const, addressClient2: _addressClient2, amountTon: _amountTon, swapCurrency: _swapCurrency };
}

function storeTupleSwap(source: Swap) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.addressClient2);
    builder.writeNumber(source.amountTon);
    builder.writeString(source.swapCurrency);
    return builder.build();
}

function dictValueParserSwap(): DictionaryValue<Swap> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSwap(src)).endCell());
        },
        parse: (src) => {
            return loadSwap(src.loadRef().beginParse());
        }
    }
}

export type Claim = {
    $$type: 'Claim';
    secureCode: bigint;
}

export function storeClaim(src: Claim) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1600373520, 32);
        b_0.storeUint(src.secureCode, 32);
    };
}

export function loadClaim(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1600373520) { throw Error('Invalid prefix'); }
    let _secureCode = sc_0.loadUintBig(32);
    return { $$type: 'Claim' as const, secureCode: _secureCode };
}

function loadTupleClaim(source: TupleReader) {
    let _secureCode = source.readBigNumber();
    return { $$type: 'Claim' as const, secureCode: _secureCode };
}

function storeTupleClaim(source: Claim) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.secureCode);
    return builder.build();
}

function dictValueParserClaim(): DictionaryValue<Claim> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaim(src)).endCell());
        },
        parse: (src) => {
            return loadClaim(src.loadRef().beginParse());
        }
    }
}

 type SwapTonContract_init_args = {
    $$type: 'SwapTonContract_init_args';
}

function initSwapTonContract_init_args(src: SwapTonContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function SwapTonContract_init() {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initSwapTonContract_init_args({ $$type: 'SwapTonContract_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const SwapTonContract_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    54040: { message: `Only the deployer is permitted here` },
}

const SwapTonContract_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Client","header":null,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"currency","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"CreateOffer","header":284315249,"fields":[{"name":"addressClient1","type":{"kind":"simple","type":"address","optional":false}},{"name":"amountTon","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"offerCurrency","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"Swap","header":3210656206,"fields":[{"name":"addressClient2","type":{"kind":"simple","type":"address","optional":false}},{"name":"amountTon","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"swapCurrency","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"Claim","header":1600373520,"fields":[{"name":"secureCode","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
]

const SwapTonContract_getters: ABIGetter[] = [
    {"name":"info","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
]

const SwapTonContract_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"CreateOffer"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Swap"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Claim"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class SwapTonContract implements Contract {
    
    static async init() {
        return await SwapTonContract_init();
    }
    
    static async fromInit() {
        const init = await SwapTonContract_init();
        const address = contractAddress(0, init);
        return new SwapTonContract(address, init);
    }
    
    static fromAddress(address: Address) {
        return new SwapTonContract(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  SwapTonContract_types,
        getters: SwapTonContract_getters,
        receivers: SwapTonContract_receivers,
        errors: SwapTonContract_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: CreateOffer | Swap | Claim | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CreateOffer') {
            body = beginCell().store(storeCreateOffer(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Swap') {
            body = beginCell().store(storeSwap(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Claim') {
            body = beginCell().store(storeClaim(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getInfo(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('info', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
}